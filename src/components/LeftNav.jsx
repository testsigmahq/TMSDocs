/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import './LeftNav.scss';
import book from './images/book.png';

const { v4: uuidv4 } = require('uuid');

let slugs;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    const { data, isRoot, identifier } = this.props;
    this.state = {
      data,
      isRoot,
      identifier,
      active: [],
      currentUrl: '',
      expandedPanels: [],
    };
    this.toggleActive = this.toggleActive.bind(this);
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  componentDidMount() {
    this.setState({ currentUrl: window.location.pathname });

    if (
      this.props.identifier &&
      window.location.pathname.startsWith(`/docs/${this.props.identifier}/`)
    ) {
    }
  }

  setActive = (name) => {
    const { active, expandedPanels } = this.state;

    const panelIdentifier = name;

    if (active.indexOf(panelIdentifier) === -1) {
      this.setState((prev) => ({ active: [...prev.active, panelIdentifier] }));

      if (!expandedPanels.includes(panelIdentifier)) {
        this.setState((prev) => ({
          expandedPanels: [...prev.expandedPanels, panelIdentifier],
        }));
      }
    }
  };

  toggleExpansion(identifier) {
    const { expandedPanels } = this.state;
    if (expandedPanels.includes(identifier)) {
      const updatedExpandedPanels = expandedPanels.filter(
        (panel) => panel !== identifier
      );
      this.setState({ expandedPanels: updatedExpandedPanels });
    } else {
      this.setState((prev) => ({
        expandedPanels: [...prev.expandedPanels, identifier],
      }));
    }
  }

  toggleActive = (e) => {
    let title;

    if (e.currentTarget.attributes.identifier) {
      title = e.currentTarget.attributes.identifier.value;
    } else if (e.target.attributes.identifier) {
      title = e.target.attributes.identifier.value;
    } else if (e.target.nextSibling?.attributes.identifier) {
      title = e.target.nextSibling.attributes.identifier.value;
    }

    if (!title) return;

    this.toggleExpansion(title);

    const { active, expandedPanels } = this.state;
    const titleIndex = active.indexOf(title);

    if (titleIndex !== -1) {
      active.splice(titleIndex, 1);
      this.setState({ active });
    } else {
      this.setActive(title);
    }
  };

  isActive = (name) => {
    const { active } = this.state;
    return active.includes(name);
  };

  inUrl = (url) => {
    const { currentUrl } = this.state;

    if (!currentUrl || !url) return false;

    const currentPath = currentUrl.endsWith('/')
      ? currentUrl
      : `${currentUrl}/`;
    const targetPath = url.endsWith('/') ? url : `${url}/`;
    return currentPath === targetPath || currentPath.startsWith(targetPath);
  };

  child = (data, url) => {
    const nameEntry = slugs.find((val) => url === val.fields.slug);
    const title = nameEntry ? nameEntry.frontmatter.title : 'Unnamed Page';

    if (!url) return null;

    return (
      url.indexOf('/overview/') === -1 && (
        <li
          data-parent={this.state.identifier}
          data-url={url}
          key={`${data.leftNavTitle || title}-${uuidv4()}`}
          className={`child${this.inUrl(url) ? ' currentUrl text_green' : ''}`}
        >
          <div className='activeIndicator' />
          <img src={book} alt='book' />
          <Link to={url}>{data.leftNavTitle || title}</Link>
        </li>
      )
    );
  };

  parent = (data, name) => {
    const { isRoot, identifier: parentIdentifier } = this.state;

    const basePath = parentIdentifier
      ? `/docs/${parentIdentifier}/${name}/`
      : `/docs/${name}/`;

    if (this.inUrl(basePath) && !this.state.active.includes(name)) {
      requestAnimationFrame(() => this.setActive(name));
    }

    let overviewLink = null;

    if (data.overview && data.overview.url) {
      overviewLink = data.overview.url;
    } else {
      Object.keys(data)
        .reverse()
        .forEach((key) => {
          if (key !== 'leftNavTitle' && key !== 'old') {
            if (
              data[key] &&
              data[key].overview &&
              data[key].overview.url &&
              data[key].overview.url.includes(`/${name}/overview/`)
            ) {
              overviewLink = data[key].overview.url;
            } else if (
              !overviewLink &&
              data[key] &&
              data[key].url &&
              key === 'overview'
            ) {
              overviewLink = data[key].url;
            }
          }
        });

      // if (!overviewLink) {
      //     const firstChildKey = Object.keys(data).find(k => k !== 'leftNavTitle' && k !== 'old' && data[k].url);
      //     if (firstChildKey) overviewLink = data[firstChildKey].url;
      // }
    }

    const isExpanded = this.state.expandedPanels.includes(name);

    return (
      <ul
        key={`${name}-${uuidv4()}`}
        className={` ${isExpanded ? 'active' : 'inactive'} ${
          isRoot ? ' root' : ''
        } `}
      >
        <li
          data-parent={parentIdentifier}
          className={`parent${
            this.inUrl(basePath) ? ' currentUrl text_green' : ''
          }`}
          identifier={name}
        >
          <div
            className='parent-title-container'
            onClick={this.toggleActive}
            identifier={name}
          >
            <svg
              identifier={name}
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
                identifier={name}
              >
                {data.leftNavTitle || name.replace(/-/g, ' ')}
              </Link>
            ) : (
              <span identifier={name}>
                {data.leftNavTitle || name.replace(/-/g, ' ')}
              </span>
            )}
          </div>
        </li>

        {isExpanded && (
          <ListItem
            data={JSON.stringify(data)}
            identifier={name}
            isRoot={false}
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
      console.error('Failed to parse navigation data:', e);
      return <div>Error loading navigation.</div>;
    }

    const keys = Object.keys(parsedData).filter(
      (key) => key !== 'leftNavTitle' && key !== 'old' && key !== 'overview'
    );

    return (
      <>
        {keys.map((val) => {
          if (!parsedData[val]) return null;

          if (parsedData[val].url) {
            return this.child(parsedData[val], parsedData[val].url);
          } else if (
            typeof parsedData[val] === 'object' &&
            Object.keys(parsedData[val]).length > 0
          ) {
            return this.parent(parsedData[val], val);
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
  const targetSection = 'test-management';

  try {
    const allNavData = JSON.parse(data.leftNavLinks.value);

    if (allNavData && allNavData[targetSection]) {
      navDataToShow = allNavData[targetSection];
      rootIdentifier = targetSection;
    } else {
      console.warn(
        `LeftNav: Section "${targetSection}" not found in navigation data. Falling back to root or rendering empty.`
      );

      navDataToShow = null;
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
