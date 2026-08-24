import React, {useEffect, useMemo, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {useHistory} from '@docusaurus/router';
import searchIndexData from './search-index.json';

const tokensFor = (query) => query.toLowerCase().trim().split(/\s+/).filter(Boolean);

function SearchButton({onClick, buttonRef}) {
  return (
    <button className="developer-search-button" type="button" onClick={onClick} ref={buttonRef} aria-label="Search docs">
      <span className="developer-search-button__icon" aria-hidden="true" />
      <span className="developer-search-button__text">Search docs</span>
      <kbd>⌘</kbd><kbd>K</kbd>
    </button>
  );
}

function HighlightedSnippet({text, query}) {
  const tokens = tokensFor(query);
  if (!tokens.length) return text;
  const escaped = tokens.map((token) => token.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const matcher = new RegExp(`(${escaped.join('|')})`, 'gi');
  const firstMatch = text.toLowerCase().indexOf(tokens[0]);
  const start = Math.max(0, firstMatch - 60);
  const snippet = text.slice(start, start + 240);
  return <>{start > 0 && '...'}{snippet.split(matcher).map((part, index) =>
    matcher.test(part) ? <mark key={index}>{part}</mark> : part,
  )}{text.length > start + 240 && '...'}</>;
}

export default function SearchBar() {
  const history = useHistory();
  const searchButtonRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const results = useMemo(() => {
    const tokens = tokensFor(query);
    if (!tokens.length) return [];
    return searchIndexData.filter((record) => {
      const haystack = `${record.title} ${record.heading} ${record.content}`.toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    }).slice(0, 10);
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery('');
    searchButtonRef.current?.focus();
  };
  const open = () => setIsOpen(true);
  const navigate = (result) => {
    if (!result) return;
    close();
    history.push(result.path);
  };

  useEffect(() => setActiveIndex(0), [results]);
  useEffect(() => {
    const onGlobalKeyDown = (event) => {
      const editable = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
      if ((event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) || (event.key === '/' && !editable)) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener('keydown', onGlobalKeyDown);
    return () => window.removeEventListener('keydown', onGlobalKeyDown);
  }, []);
  useEffect(() => {
    if (!isOpen) return undefined;
    inputRef.current?.focus();
    const onModalKeyDown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowDown' && results.length) {
        event.preventDefault();
        setActiveIndex((value) => (value + 1) % results.length);
      }
      if (event.key === 'ArrowUp' && results.length) {
        event.preventDefault();
        setActiveIndex((value) => (value - 1 + results.length) % results.length);
      }
      if (event.key === 'Enter' && results.length) {
        event.preventDefault();
        navigate(results[activeIndex]);
      }
    };
    window.addEventListener('keydown', onModalKeyDown);
    return () => window.removeEventListener('keydown', onModalKeyDown);
  }, [isOpen, results, activeIndex]);

  return <>
    <SearchButton onClick={open} buttonRef={searchButtonRef} />
    {isOpen && createPortal(
      <div className="developer-search-modal-overlay" role="presentation" onMouseDown={close}>
        <section className="developer-search-modal" role="dialog" aria-modal="true" aria-label="Search documentation" onMouseDown={(event) => event.stopPropagation()}>
          <header className="developer-search-modal__header">
            <span className="developer-search-modal__search-icon" aria-hidden="true" />
            <input ref={inputRef} type="search" placeholder="Search user & developer docs..." value={query} onChange={(event) => setQuery(event.target.value)} />
            <button className="developer-search-modal__close" type="button" onClick={close} aria-label="Close search">×</button>
          </header>
          <div className="developer-search-modal__body">
            {!query ? <p className="developer-search-modal__no-results">Type a query to search all user and developer documentation.</p>
              : !results.length ? <p className="developer-search-modal__no-results">No results found.</p>
              : <ul className="developer-search-modal__results">{results.map((result, index) =>
                <li key={`${result.path}-${result.heading}`} className={`developer-search-modal__result-item ${index === activeIndex ? 'active' : ''}`} onMouseEnter={() => setActiveIndex(index)}>
                  <button type="button" onClick={() => navigate(result)}>
                    <span className="developer-search-modal__result-title"><strong>{result.title}</strong>{result.heading && <> <span>›</span> {result.heading}</>}</span>
                    <span className="developer-search-modal__result-snippet"><HighlightedSnippet text={result.content} query={query} /></span>
                  </button>
                </li>,
              )}</ul>}
          </div>
          <footer className="developer-search-modal__footer">Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select, <kbd>Esc</kbd> to close.</footer>
        </section>
      </div>, document.body,
    )}
  </>;
}
