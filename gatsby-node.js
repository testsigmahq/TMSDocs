const path = require('path');
const glob = require('glob');
const fs = require('fs');
const frontmatter = require('@github-docs/frontmatter');
const { v4: uuidv4 } = require('uuid');
const { createFilePath } = require('gatsby-source-filesystem');
const redirects = require('./src/redirects.json');
const leftNavTitle = require('./src/left-nav-title.json');

const ignorePaths = [];

let builtNavTree = null;

const NAV_META_KEYS = new Set(['leftNavTitle', 'old', 'overview', 'url', 'title']);

function extractSubsectionMeta(sectionData) {
  const keys = Object.keys(sectionData).filter(
    (k) => !NAV_META_KEYS.has(k)
  );
  return keys.map((key) => {
    const item = sectionData[key];
    const isLeaf = !!item.url && Object.keys(item).filter((k) => !NAV_META_KEYS.has(k)).length === 0;
    return {
      key,
      title: item.leftNavTitle || key.replaceAll('-', ' '),
      overviewUrl: item?.overview?.url || (isLeaf ? item.url : null),
      isLeaf,
    };
  });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: to,
    });
  });

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              metadesc
              canonical
              keywords
              social_share_summary
              social_share_desc
              social_share_image
              noindex
            }
          }
        }
      }
    }
  `);
  const mainSection = builtNavTree?.['test-management'] ?? null;
  const navSubsections = mainSection ? extractSubsectionMeta(mainSection) : [];

  result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
    if (node.fields.slug.includes('-')) {
      const underscoreSlug = node.fields.slug.replace(/-/g, '_');

      createRedirect({
        fromPath: underscoreSlug,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: node.fields.slug,
      });
    }

    const slugParts = node.fields.slug.split('/').filter(Boolean);
    const activeSubSection = slugParts.length >= 3 ? slugParts[2] : null;
    const activeNavData =
      activeSubSection && mainSection && mainSection[activeSubSection]
        ? JSON.stringify(mainSection[activeSubSection])
        : null;

    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/page.jsx'),
      context: {
        slug: node.fields.slug,
        prev:
          index === 0
            ? null
            : result.data.allMarkdownRemark.edges[index - 1].node,
        next:
          index === result.data.allMarkdownRemark.edges.length - 1
            ? null
            : result.data.allMarkdownRemark.edges[index + 1].node,
        navSubsections,
        activeSubSection,
        activeNavData,
      },
    });
  });
};

exports.onPostBuild = () => {
  const sourcePath = path.join(__dirname, 'src/pages/docs/sitemap.xml');
  const destinationPath = path.join(__dirname, 'public/docs/sitemap.xml');

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log('Sitemap.xml copied to public folder!');
  } else {
    console.error('Sitemap.xml not found in src/pages/docs/');
  }

  if (builtNavTree?.['test-management']) {
    const navDataDir = path.join(__dirname, 'public', 'nav-data');
    if (!fs.existsSync(navDataDir)) {
      fs.mkdirSync(navDataDir, { recursive: true });
    }
    const section = builtNavTree['test-management'];
    const keys = Object.keys(section).filter(
      (k) => !NAV_META_KEYS.has(k)
    );
    keys.forEach((key) => {
      const filePath = path.join(navDataDir, `${key}.json`);
      fs.writeFileSync(filePath, JSON.stringify(section[key]));
    });
    console.log(`Wrote ${keys.length} nav-data JSON files for lazy loading.`);
  }
};

/* Create Header and Footer
/************************************************************************ */
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const prepareNode = (obj, name) => {
    const data = {
      key: uuidv4(),
      value: JSON.stringify(obj),
    };
    const node = JSON.stringify(data);
    const nodeMeta = {
      id: createNodeId(`my-data-${data.key}`),
      parent: null,
      children: [],
      internal: {
        type: name,
        mediaType: 'text/json',
        content: node,
        contentDigest: createContentDigest(data),
      },
    };

    const output = { ...data, ...nodeMeta };
    return output;
  };

  const { createNode } = actions;

  const getDirectories = (src) => glob.sync(`${src}/**/*`);
  const pathsWithMeta = getDirectories('./src/pages/docs')
    .filter((val) => val.slice(-3) === '.md')
    .map((val) => {
      const { data } = frontmatter(fs.readFileSync(val));
      const order = data.order || 200;
      const title = data.title || '';
      return [val, order, title];
    })
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map((val) => {
      let newVal = val[0].replace(/\.\/src\/pages/g, '');
      newVal = newVal.substring(0, newVal.length - 3);
      newVal =
        newVal.slice(-5) === 'index'
          ? newVal.substring(0, newVal.length - 5)
          : newVal;
      return [`${newVal}/`, val[2]];
    })
    .filter((val) => !ignorePaths.includes(val[0]));

  const output = {};

  pathsWithMeta.forEach(([val, pageTitle]) => {
    let split = val.split('/');
    split = split.filter((url) => url !== '');

    let current = output;
    split.forEach((part) => {
      if (current[part]) current[part] = current[part];
      else {
        current[part] = {};
        if (leftNavTitle[part]) {
          Object.keys(leftNavTitle[part]).forEach((key) => {
            if (val.indexOf(key) === 0) {
              current[part] = { leftNavTitle: leftNavTitle[part][key] };
            }
          });
        }
      }
      current = current[part];
    });
    current.url = `/${split.join('/')}/`;
    if (pageTitle) {
      current.title = pageTitle;
    }
  });

  builtNavTree = output.docs;
  createNode(prepareNode(output.docs, 'leftNavLinks'));
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
      html: String!
      id: String!
      pluginCreator___NODE: String
    }

    type Frontmatter {
      title: String!
      page_title: String
      metadesc: String
      canonical: String
      keywords: [String]
      social_share_summary: String
      social_share_desc: String
      social_share_image: String
      noindex: Boolean
      order: Int
      contextual_links: [ContextualLink]
    }

    type ContextualLink {
      type: String
      name: String
      url: String
    }

    type Fields {
      slug: String!
    }
  `);
};
