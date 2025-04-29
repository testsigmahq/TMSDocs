/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';
import book from './images/book.png';

const { v4: uuidv4 } = require('uuid');

let slugs;

const normalizePath = (path) => {
  if (!path) return '/';
  return path.endsWith('/') ? path : `${path}/`;
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { data, isRoot, identifier, currentUrl, parentPath } = this.props;
    this.state = {
      data,
      isRoot,
      identifier,
      parentPath: parentPath || '/docs/',
      currentUrl: currentUrl || '',
      expandedPanels: [],
    };
    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.handleParentClick = this.handleParentClick.bind(this);
    this.doesPathContainCurrentUrl = this.doesPathContainCurrentUrl.bind(this);
  }

  componentDidMount() {
    const urlToUse =
      this.state.currentUrl ||
      (typeof window !== 'undefined' ? window.location.pathname : '');
    const normalizedUrl = normalizePath(urlToUse);

    this.setState({ currentUrl: normalizedUrl }, () => {
      this.checkInitialExpansion();
    });
  }

  doesPathContainCurrentUrl(itemData, itemBasePath) {
    const { currentUrl } = this.state;
    if (!itemData || !currentUrl) return false;

    const normalizedItemBasePath = normalizePath(itemBasePath);

    if (
      itemData.overview?.url &&
      normalizePath(itemData.overview.url) === currentUrl
    ) {
      return true;
    }

    const keys = Object.keys(itemData).filter(
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview'
    );

    for (const key of keys) {
      const childItem = itemData[key];
      if (!childItem) continue;

      if (childItem.url) {
        if (normalizePath(childItem.url) === currentUrl) {
          return true;
        }
      } else if (
        typeof childItem === 'object' &&
        Object.keys(childItem).length > 0
      ) {
        const childBasePath = `${normalizedItemBasePath}${key}/`;
        if (this.doesPathContainCurrentUrl(childItem, childBasePath)) {
          return true;
        }
      }
    }

    return false;
  }

  checkInitialExpansion() {
    const { data, parentPath, currentUrl } = this.state;
    if (!currentUrl) return;

    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch (e) {
      console.error(
        'Failed to parse navigation data in checkInitialExpansion:',
        e
      );
      return;
    }

    const keys = Object.keys(parsedData).filter(
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview'
    );
    const panelsToExpand = [];

    keys.forEach((name) => {
      const childData = parsedData[name];
      if (
        childData &&
        typeof childData === 'object' &&
        !childData.url &&
        Object.keys(childData).length > 0
      ) {
        const basePath = normalizePath(`${parentPath}${name}/`);

        if (this.doesPathContainCurrentUrl(childData, basePath)) {
          panelsToExpand.push(name);
        }
      }
    });

    if (panelsToExpand.length > 0) {
      this.setState((prevState) => {
        const panelsToAdd = panelsToExpand.filter(
          (p) => !prevState.expandedPanels.includes(p)
        );
        if (panelsToAdd.length > 0) {
          return {
            expandedPanels: [...prevState.expandedPanels, ...panelsToAdd],
          };
        }
        return null;
      });
    }
  }

  handleParentClick(e) {
    let identifier;
    let currentTarget = e.target;
    while (currentTarget && !identifier) {
      identifier = currentTarget.getAttribute('identifier');
      if (identifier) break;
      currentTarget = currentTarget.parentElement;
    }
    if (identifier) {
      this.toggleExpansion(identifier);
    }
  }

  toggleExpansion(identifier) {
    this.setState((prevState) => {
      const { expandedPanels } = prevState;
      if (expandedPanels.includes(identifier)) {
        return {
          expandedPanels: expandedPanels.filter(
            (panel) => panel !== identifier
          ),
        };
      } else {
        return {
          expandedPanels: [...expandedPanels, identifier],
        };
      }
    });
  }

  inUrl = (url, urlToCheck) => {
    if (!urlToCheck || !url) return false;
    return normalizePath(url) === normalizePath(urlToCheck);
  };

  isPathRelevant = (pathPrefix, urlToCheck) => {
    if (!urlToCheck || !pathPrefix) return false;
    const normalizedPrefix = normalizePath(pathPrefix);
    const normalizedUrl = normalizePath(urlToCheck);
    return normalizedUrl.startsWith(normalizedPrefix);
  };

  child = (data, url) => {
    const nameEntry = slugs.find(
      (val) => normalizePath(url) === normalizePath(val.fields.slug)
    );
    const title = nameEntry ? nameEntry.frontmatter.title : 'Unnamed Page';
    const { currentUrl } = this.state;

    if (!url) return null;

    return (
      <li
        data-parent={this.state.identifier}
        data-url={url}
        key={`${data.leftNavTitle || title}-${uuidv4()}`}
        className={`child${
          this.inUrl(url, currentUrl) ? ' currentUrl text_green' : ''
        }`}
      >
        <div className='activeIndicator' />
        <img src={book} alt='book' />
        <Link to={normalizePath(url)}>{data.leftNavTitle || title}</Link>{' '}
      </li>
    );
  };

  parent = (data, name) => {
    const { isRoot, parentPath, currentUrl } = this.state;

    const basePath = normalizePath(`${parentPath}${name}/`);

    let overviewLink = null;
    if (data.overview?.url) {
      overviewLink = normalizePath(data.overview.url);
    }

    const isExpanded = this.state.expandedPanels.includes(name);
    const isRelevant = this.isPathRelevant(basePath, currentUrl);

    return (
      <ul
        key={`${name}-${uuidv4()}`}
        className={` ${isExpanded ? 'active' : 'inactive'} ${
          isRoot ? ' root' : ''
        } `}
      >
        <li
          data-parent={this.state.identifier}
          className={`parent${isRelevant ? ' currentUrl text_green' : ''}`}
          identifier={name}
        >
          <div
            className='parent-title-container'
            onClick={this.handleParentClick}
            identifier={name}
          >
            <svg
              className={`inline float_left relative folder-icon parent_caret${
                isExpanded ? ' active_parent_caret' : ''
              }`}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              height='24'
              viewBox='0 0 24 24'
              width='24'
            >
              <path
                clipRule='evenodd'
                d='m16.5303 8.96967c.2929.29289.2929.76777 0 1.06063l-4 4c-.2929.2929-.7677.2929-1.0606 0l-4.00003-4c-.29289-.29286-.29289-.76774 0-1.06063s.76777-.29289 1.06066 0l3.46967 3.46963 3.4697-3.46963c.2929-.29289.7677-.29289 1.0606 0z'
                fill='#333333'
                fillRule='evenodd'
              ></path>
            </svg>

            {overviewLink ? (
              <Link
                to={overviewLink}
                onClick={(e) => e.stopPropagation()}
                className={
                  this.inUrl(overviewLink, currentUrl) ? 'font-semibold' : ''
                }
              >
                {data.leftNavTitle || name.replace(/-/g, ' ')}
              </Link>
            ) : (
              <span>{data.leftNavTitle || name.replace(/-/g, ' ')}</span>
            )}
          </div>
        </li>

        {isExpanded && (
          <ListItem
            data={JSON.stringify(data)}
            identifier={name}
            parentPath={basePath}
            isRoot={false}
            currentUrl={currentUrl}
          />
        )}
      </ul>
    );
  };

  render() {
    const { data } = this.state;
    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch (e) {
      console.error('Failed to parse navigation data in render:', e);
      return <div>Error loading navigation.</div>;
    }

    const keys = Object.keys(parsedData).filter(
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview'
    );

    return (
      <>
        {keys.map((val) => {
          const itemData = parsedData[val];
          if (!itemData) return null;

          if (itemData.url) {
            return this.child(itemData, itemData.url);
          } else if (
            typeof itemData === 'object' &&
            Object.keys(itemData).length > 0
          ) {
            return this.parent(itemData, val);
          }
          return null;
        })}
      </>
    );
  }
}

const LeftNav = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: id, order: ASC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
          id
        }
      }
      leftNavLinks {
        value
      }
    }
  `);
  slugs = data.allMarkdownRemark.nodes;

  let navDataToShow = null;
  let rootIdentifier = 'docs';
  let rootParentPath = '/docs/';

  let currentPath = '';
  if (typeof window !== 'undefined') {
    currentPath = normalizePath(window.location.pathname);
  }

  try {
    const allNavData = JSON.parse(data.leftNavLinks.value);
    const pathSegments = currentPath.split('/').filter(Boolean);

    let sectionKey = null;

    if (pathSegments.length >= 2 && allNavData[pathSegments[1]]) {
      sectionKey = pathSegments[1]; // e.g., 'test-management'
    } else if (pathSegments.length >= 1 && allNavData[pathSegments[0]]) {
      sectionKey = pathSegments[0];
    }
    // else {
    //    sectionKey = 'test-management';
    // }

    if (sectionKey && allNavData[sectionKey]) {
      navDataToShow = allNavData[sectionKey];
      rootIdentifier = sectionKey;
      rootParentPath = normalizePath(`/docs/${sectionKey}/`);
      if (sectionKey === 'docs') {
        rootParentPath = '/docs/';
      }
    } else {
      const defaultSection = 'test-management';
      if (allNavData[defaultSection]) {
        navDataToShow = allNavData[defaultSection];
        rootIdentifier = defaultSection;
        rootParentPath = normalizePath(`/docs/${defaultSection}/`);
      } else {
        console.warn(
          `LeftNav: Could not determine section from URL "${currentPath}" and default "${defaultSection}" not found.`
        );
        navDataToShow = null;
      }
    }
  } catch (e) {
    console.error('LeftNav: Failed to parse leftNavLinks.value', e);
    navDataToShow = null;
  }

  return (
    <>
      <div className='leftNav bg-gray-50 px-14 pt-5'>
        {navDataToShow ? (
          <ListItem
            data={JSON.stringify(navDataToShow)}
            isRoot
            identifier={rootIdentifier}
            parentPath={rootParentPath}
            currentUrl={currentPath}
          />
        ) : (
          <p>Navigation section not available.</p>
        )}
      </div>
    </>
  );
};

export default LeftNav;
/* eslint-enable */
