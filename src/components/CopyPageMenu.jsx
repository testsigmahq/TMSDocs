import React, { useState } from 'react';
import OnClickOut from 'react-onclickout';
import './CopyPageMenu.scss';

const IconCopy = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M5.5 2.5h6a1.5 1.5 0 0 1 1.5 1.5v8M3.5 5.5h6A1.5 1.5 0 0 1 11 7v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 2 13V7a1.5 1.5 0 0 1 1.5-1.5Z'
    />
  </svg>
);

const IconDocument = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 1.5H4A1.5 1.5 0 0 0 2.5 3v10A1.5 1.5 0 0 0 4 14.5h8a1.5 1.5 0 0 0 1.5-1.5V6L9 1.5Zm0 0V6h4.5M5 9h6M5 11.5h6'
    />
  </svg>
);

const IconChatBubble = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14 8.5a5 5 0 0 1-5 5H6.5L3 15.5v-3.2A5 5 0 0 1 2 8.5a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5Z'
    />
  </svg>
);

const IconSparkle = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
    <path
      fill='currentColor'
      d='M8 1.2 9.5 5.5 14 7l-4.5 1.5L8 13l-1.5-4.5L2 7l4.5-1.5L8 1.2Z'
    />
  </svg>
);

const IconSearch = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' aria-hidden='true'>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm3.6-1.4 3 3'
    />
  </svg>
);

const IconExternal = () => (
  <svg
    className='external-arrow'
    width='10'
    height='10'
    viewBox='0 0 10 10'
    aria-hidden='true'
  >
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='1.4'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 1h6v6M9 1 1 9'
    />
  </svg>
);

const CopyPageMenu = ({ slug }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const mdUrl = `https://testsigma.com${slug.replace(/\/$/, '')}.md`;
  const prompt = `Read ${mdUrl} and help me with: `;
  const close = () => setOpen(false);

  const copyMarkdown = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(mdUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('CopyPageMenu: failed to copy markdown', err);
    }
  };

  const openExternal = (url) => (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
    close();
  };

  const chatgptUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
  const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
  const perplexityUrl = `https://www.perplexity.ai/?q=${encodeURIComponent(
    prompt
  )}`;

  return (
    <OnClickOut onClickOut={close}>
      <div className='copy-page-menu'>
        <button
          type='button'
          className='copy-page-menu-trigger'
          aria-haspopup='menu'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className='copy-icon'>
            <IconCopy />
          </span>
          <span className='trigger-label'>
            {copied ? 'Copied!' : 'Copy page'}
          </span>
          <span className='caret-down' aria-hidden='true'>
            <svg width='10' height='10' viewBox='0 0 10 10'>
              <path
                fill='none'
                stroke='currentColor'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m2 4 3 3 3-3'
              />
            </svg>
          </span>
        </button>
        {open && (
          <ul className='copy-page-menu-list' role='menu'>
            <li role='none'>
              <a href={mdUrl} role='menuitem' onClick={copyMarkdown}>
                <span className='menu-icon'>
                  <IconCopy />
                </span>
                <span className='item-text'>
                  <span className='item-label'>Copy page</span>
                  <span className='item-sub'>Copy page as Markdown for LLMs</span>
                </span>
              </a>
            </li>
            <li role='none'>
              <a
                href={mdUrl}
                role='menuitem'
                target='_blank'
                rel='noopener noreferrer'
                onClick={close}
              >
                <span className='menu-icon'>
                  <IconDocument />
                </span>
                <span className='item-text'>
                  <span className='item-label'>View as Markdown</span>
                  <span className='item-sub'>View this page as plain text</span>
                </span>
                <span className='external-icon'>
                  <IconExternal />
                </span>
              </a>
            </li>
            <li role='none'>
              <a
                href={chatgptUrl}
                role='menuitem'
                onClick={openExternal(chatgptUrl)}
              >
                <span className='menu-icon'>
                  <IconChatBubble />
                </span>
                <span className='item-text'>
                  <span className='item-label'>Open in ChatGPT</span>
                  <span className='item-sub'>Ask questions about this page</span>
                </span>
                <span className='external-icon'>
                  <IconExternal />
                </span>
              </a>
            </li>
            <li role='none'>
              <a
                href={claudeUrl}
                role='menuitem'
                onClick={openExternal(claudeUrl)}
              >
                <span className='menu-icon'>
                  <IconSparkle />
                </span>
                <span className='item-text'>
                  <span className='item-label'>Open in Claude</span>
                  <span className='item-sub'>Ask questions about this page</span>
                </span>
                <span className='external-icon'>
                  <IconExternal />
                </span>
              </a>
            </li>
            <li role='none'>
              <a
                href={perplexityUrl}
                role='menuitem'
                onClick={openExternal(perplexityUrl)}
              >
                <span className='menu-icon'>
                  <IconSearch />
                </span>
                <span className='item-text'>
                  <span className='item-label'>Open in Perplexity</span>
                  <span className='item-sub'>Ask questions about this page</span>
                </span>
                <span className='external-icon'>
                  <IconExternal />
                </span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </OnClickOut>
  );
};

export default CopyPageMenu;
