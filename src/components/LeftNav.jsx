/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { Link } from 'gatsby';
import React, { useState, useEffect, useCallback } from 'react';
import './LeftNav.scss';

const { v4: uuidv4 } = require('uuid');

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
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview' && key !== 'title'
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
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview' && key !== 'title'
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
    const title = data.leftNavTitle || data.title || 'Unnamed Page';
    const { currentUrl } = this.state;

    if (!url) return null;

    return (
      <li
        data-parent={this.state.identifier}
        data-url={url}
        key={`${title}-${uuidv4()}`}
        className={`child${
          this.inUrl(url, currentUrl) ? ' currentUrl text_green' : ''
        }`}
      >
        <div className='activeIndicator' />
        <img src='https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/book.png' alt='book' />
        <Link to={normalizePath(url)}>{title}</Link>{' '}
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
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview' && key !== 'title'
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

const CaretSvg = ({ isExpanded }) => (
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
    />
  </svg>
);

const LeftNav = ({ navSubsections, activeSubSection, activeNavData }) => {
  const [loadedSections, setLoadedSections] = useState({});
  const [expandedSections, setExpandedSections] = useState([]);
  const [loadingSections, setLoadingSections] = useState({});

  const currentPath =
    typeof window !== 'undefined'
      ? normalizePath(window.location.pathname)
      : '';

  useEffect(() => {
    if (activeSubSection && !expandedSections.includes(activeSubSection)) {
      setExpandedSections((prev) =>
        prev.includes(activeSubSection) ? prev : [...prev, activeSubSection]
      );
    }
  }, [activeSubSection]);

  const loadSection = useCallback(async (key) => {
    if (loadingSections[key]) return;
    setLoadingSections((prev) => ({ ...prev, [key]: true }));
    try {
      const resp = await fetch(`/nav-data/${key}.json`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      setLoadedSections((prev) => ({ ...prev, [key]: JSON.stringify(data) }));
    } catch (err) {
      console.error(`Failed to load nav data for "${key}":`, err);
    } finally {
      setLoadingSections((prev) => ({ ...prev, [key]: false }));
    }
  }, [loadingSections]);

  const toggleSection = useCallback(
    async (key) => {
      if (expandedSections.includes(key)) {
        setExpandedSections((prev) => prev.filter((k) => k !== key));
        return;
      }

      if (key !== activeSubSection && !loadedSections[key]) {
        await loadSection(key);
      }

      setExpandedSections((prev) => [...prev, key]);
    },
    [expandedSections, activeSubSection, loadedSections, loadSection]
  );

  const getSectionData = useCallback(
    (key) => {
      if (key === activeSubSection && activeNavData) return activeNavData;
      return loadedSections[key] || null;
    },
    [activeSubSection, activeNavData, loadedSections]
  );

  if (!navSubsections || navSubsections.length === 0) {
    return (
      <div className='leftNav bg-gray-50 px-14 pt-5'>
        <p>Navigation not available.</p>
      </div>
    );
  }

  return (
    <div className='leftNav bg-gray-50 px-14 pt-5'>
      {navSubsections.map((section) => {
        const isExpanded = expandedSections.includes(section.key);
        const sectionData = getSectionData(section.key);
        const basePath = normalizePath(
          `/docs/test-management/${section.key}/`
        );
        const isActive = currentPath.startsWith(basePath);

        if (section.isLeaf) {
          return (
            <li
              key={section.key}
              className={`child${
                normalizePath(section.overviewUrl) === currentPath
                  ? ' currentUrl text_green'
                  : ''
              }`}
            >
              <div className='activeIndicator' />
              <img
                src='https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/book.png'
                alt='book'
              />
              <Link to={normalizePath(section.overviewUrl)}>
                {section.title}
              </Link>
            </li>
          );
        }

        return (
          <ul
            key={section.key}
            className={`${isExpanded ? 'active' : 'inactive'} root`}
          >
            <li
              className={`parent${isActive ? ' currentUrl text_green' : ''}`}
              identifier={section.key}
            >
              <div
                className='parent-title-container'
                onClick={() => toggleSection(section.key)}
                identifier={section.key}
              >
                <CaretSvg isExpanded={isExpanded} />
                {section.overviewUrl ? (
                  <Link
                    to={normalizePath(section.overviewUrl)}
                    onClick={(e) => e.stopPropagation()}
                    className={
                      currentPath === normalizePath(section.overviewUrl)
                        ? 'font-semibold'
                        : ''
                    }
                  >
                    {section.title}
                  </Link>
                ) : (
                  <span>{section.title}</span>
                )}
              </div>
            </li>

            {isExpanded && sectionData && (
              <ListItem
                data={sectionData}
                identifier={section.key}
                parentPath={basePath}
                isRoot={false}
                currentUrl={currentPath}
              />
            )}

            {isExpanded && !sectionData && loadingSections[section.key] && (
              <li className='child' style={{ paddingLeft: 25, opacity: 0.5 }}>
                Loading…
              </li>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default LeftNav;
/* eslint-enable */
