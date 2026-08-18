const path = require('path');
const glob = require('glob');
const fs = require('fs');
const frontmatter = require('@github-docs/frontmatter');
const { v4: uuidv4 } = require('uuid');
const { createFilePath } = require('gatsby-source-filesystem');
const redirects = require('./src/redirects.json');
const leftNavTitle = require('./src/left-nav-title.json');

const ignorePaths = [];

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
      },
    });
  });
};

// ---------------------------------------------------------------------------
// LLM-friendly outputs: per-page .md companions + llms.txt index.
// Each source .md under src/pages/docs/test-management/ gets a sibling
// <slug>.md written to public/ alongside the rendered HTML. Plus an
// llms.txt index and a hand-authored .md for the /docs/test-management/
// home page (which is rendered from index.jsx and therefore has no source
// .md for the glob to pick up).
// ---------------------------------------------------------------------------

const SITE_URL = 'https://testsigma.com';
const TM_SRC_ROOT = path.join(__dirname, 'src/pages/docs/test-management');
const TM_URL_PREFIX = '/docs/test-management';

const transformInfoBlocks = (body) =>
  body.replace(
    /\[\[info\s*\|\s*([^\]]+)\]\]\n((?:\|[^\n]*\n?)+)/g,
    (_, label, lines) => {
      const cleaned = lines
        .replace(/\n+$/, '')
        .split('\n')
        .map((line) => '> ' + line.replace(/^\|\s?/, ''))
        .join('\n');
      return `> ${label.trim()}\n${cleaned}\n`;
    }
  );

const transformStorylaneEmbeds = (body) =>
  body.replace(
    /<div[^>]*>\s*<script[^>]*storylane[^>]*>[\s\S]*?<\/script>\s*<div[^>]*class="sl-embed"[^>]*>[\s\S]*?<iframe[^>]*src="([^"]+)"[\s\S]*?<\/iframe>\s*<\/div>\s*<\/div>/g,
    '> [Interactive demo: open in browser]($1)\n'
  );

const isTableLine = (line) =>
  /^\s*\|.*\|\s*$/.test(line) || /^\s*\|[\s\-:|]+$/.test(line);

const transformBrOutsideTables = (body) => {
  const lines = body.split('\n');
  const out = [];
  let buffer = [];
  let inTable = false;

  const flush = () => {
    if (buffer.length === 0) return;
    const segment = buffer.join('\n');
    out.push(inTable ? segment : segment.replace(/<br\s*\/?>/gi, '\n\n'));
    buffer = [];
  };

  for (const line of lines) {
    const lineInTable = isTableLine(line);
    if (lineInTable !== inTable) {
      flush();
      inTable = lineInTable;
    }
    buffer.push(line);
  }
  flush();
  return out.join('\n');
};

const transformAnchorsToMarkdown = (body) =>
  body.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, '[$2]($1)');

const stripScripts = (body) =>
  body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');

const transformBody = (raw) => {
  let body = raw;
  body = transformInfoBlocks(body);
  body = transformStorylaneEmbeds(body);
  body = transformBrOutsideTables(body);
  body = transformAnchorsToMarkdown(body);
  body = stripScripts(body);
  return body;
};

const deriveSlug = (srcPath) => {
  let slug = srcPath.replace(path.join(__dirname, 'src/pages'), '');
  slug = slug.replace(/\.md$/, '');
  if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
  return slug + '/';
};

const yamlEscape = (s) => `'${String(s).replace(/'/g, "''")}'`;

const buildMinimalFrontmatter = (data, slug) => {
  const fields = {
    title: data.title,
    metadesc: data.metadesc,
    canonical: data.canonical || `${SITE_URL}${slug}`,
  };
  if (data.page_id) fields.page_id = data.page_id;

  const yaml = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${k}: ${yamlEscape(v)}`)
    .join('\n');
  return `---\n${yaml}\n---\n`;
};

const titleCase = (slug) =>
  slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const writeLlmsTxt = (entries, outPath) => {
  const groups = {};
  for (const e of entries) {
    if (!groups[e.topSection]) groups[e.topSection] = [];
    groups[e.topSection].push(e);
  }
  for (const k of Object.keys(groups)) {
    groups[k].sort((a, b) => a.order - b.order);
  }
  const sortedGroupNames = Object.keys(groups).sort(
    (a, b) => groups[a][0].order - groups[b][0].order
  );

  const lines = [
    '# Test Management by Testsigma',
    '',
    '> Documentation for Test Management by Testsigma — test cases, test plans, test runs, reports, and AI-powered automation with Atto.',
    '',
  ];
  for (const name of sortedGroupNames) {
    lines.push(`## ${titleCase(name)}`);
    for (const e of groups[name]) {
      const url = `${SITE_URL}${e.slug.replace(/\/$/, '')}.md`;
      const desc = e.metadesc ? `: ${e.metadesc}` : '';
      lines.push(`- [${e.title}](${url})${desc}`);
    }
    lines.push('');
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
};

const TM_HOME_MD = `---
title: 'Test Management by Testsigma'
canonical: 'https://testsigma.com/docs/test-management/'
---
# Test Management by Testsigma — Documentation

The complete documentation for Test Management by Testsigma — test cases, test plans, test runs, reports, and AI-powered automation with Atto.

See [llms.txt](https://testsigma.com/docs/test-management/llms.txt) for the full document index, or browse top sections:

- [Introduction & Overview](https://testsigma.com/docs/test-management/introduction/overview.md)
- [Atto AI Overview](https://testsigma.com/docs/test-management/atto/overview.md)
- [Test Cases](https://testsigma.com/docs/test-management/test-cases/manage-test-cases.md)
- [Test Plans](https://testsigma.com/docs/test-management/test-plans/manage-test-plans.md)
- [Test Runs](https://testsigma.com/docs/test-management/test-runs/manage-test-runs.md)
- [Reports](https://testsigma.com/docs/test-management/reports/view-reports.md)
- [Settings](https://testsigma.com/docs/test-management/settings/manage-properties.md)
- [Manage Users](https://testsigma.com/docs/test-management/manage-users/invite-users.md)
- [Integrations](https://testsigma.com/docs/test-management/integrations/jira.md)
- [API Reference](https://testsigma.com/docs/test-management/api-reference/overview.md)
- [CI/CD Integrations](https://testsigma.com/docs/test-management/ci-cd-integrations/jenkins.md)
`;

exports.onPostBuild = async () => {
  // Existing behavior: copy sitemap.xml to public/.
  const sitemapSrc = path.join(__dirname, 'src/pages/docs/sitemap.xml');
  const sitemapDst = path.join(__dirname, 'public/docs/sitemap.xml');
  if (fs.existsSync(sitemapSrc)) {
    fs.copyFileSync(sitemapSrc, sitemapDst);
    console.log('Sitemap.xml copied to public folder!');
  } else {
    console.error('Sitemap.xml not found in src/pages/docs/');
  }

  // Walk test-management markdown sources and emit clean .md companions.
  const sources = glob.sync(`${TM_SRC_ROOT}/**/*.md`);
  const indexEntries = [];

  await Promise.all(
    sources.map(async (srcPath) => {
      const raw = fs.readFileSync(srcPath, 'utf8');
      const { data, content } = frontmatter(raw);
      if (data.noindex === true) return;

      const slug = deriveSlug(srcPath);
      const outPath = path.join(
        __dirname,
        'public',
        slug.replace(/\/$/, '') + '.md'
      );
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      const transformed = transformBody(content);
      const header = buildMinimalFrontmatter(data, slug);
      fs.writeFileSync(
        outPath,
        `${header}\n# ${data.title}\n\n${transformed}`,
        'utf8'
      );

      const parts = slug.split('/').filter(Boolean);
      indexEntries.push({
        slug,
        title: data.title,
        metadesc: data.metadesc || '',
        topSection: parts[2] || 'misc',
        order: typeof data.order === 'number' ? data.order : 999,
      });
    })
  );

  // Hand-authored .md for /docs/test-management/ (the home is rendered from
  // index.jsx, so there's no source .md to walk).
  const homeMdPath = path.join(__dirname, 'public', `${TM_URL_PREFIX}.md`);
  fs.mkdirSync(path.dirname(homeMdPath), { recursive: true });
  fs.writeFileSync(homeMdPath, TM_HOME_MD, 'utf8');

  // llms.txt index over all emitted pages.
  writeLlmsTxt(
    indexEntries,
    path.join(__dirname, 'public', TM_URL_PREFIX, 'llms.txt')
  );

  console.log(
    `Emitted ${indexEntries.length} .md companions + llms.txt + test-management.md`
  );
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
  const paths = getDirectories('./src/pages/docs')
    .filter((val) => val.slice(-3) === '.md')
    .map((val) => {
      const { data } = frontmatter(fs.readFileSync(val));
      const order = data.order || 200;
      return [val, order];
    })
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map((val) => {
      let newVal = '';
      newVal = val[0].replace(/\.\/src\/pages/g, '');
      newVal = newVal.substring(0, newVal.length - 3);
      newVal =
        newVal.slice(-5) === 'index'
          ? newVal.substring(0, newVal.length - 5)
          : newVal;
      return `${newVal}/`;
    })
    .filter((val) => !ignorePaths.includes(val));

  const output = {};

  paths.forEach((val) => {
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
              //console.log(key);
              current[part] = { leftNavTitle: leftNavTitle[part][key] };
            }
          });
        }
      }
      current = current[part];
    });
    current.url = `/${split.join('/')}/`;
  });
  //console.log(output.docs)
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
