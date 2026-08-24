import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero-section" style={{
      padding: '5rem 1.5rem 4rem',
      textAlign: 'center',
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.22), transparent 70%), var(--ifm-background-color)',
      borderBottom: '1px solid var(--hckr-border, #1e293b)'
    }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          background: 'rgba(6, 182, 212, 0.12)',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          color: '#22d3ee',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          ⚡ Chrome Extension & Developer Toolkit
        </div>
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '1.25rem',
          background: 'linear-gradient(135deg, #ffffff 30%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Developer Utilities Right in Your Browser Side Panel
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
          color: '#94a3b8',
          maxWidth: '720px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          100% offline, privacy-first developer utilities. Format JSON, decode JWTs, convert timestamps, diff files, and test regex without ever leaving your workflow or leaking sensitive data.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Link
            to="/docs/"
            className="button button--primary button--lg"
            style={{
              padding: '0.8rem 1.8rem',
              fontWeight: 600,
              borderRadius: '8px',
              backgroundColor: '#06b6d4',
              borderColor: '#06b6d4',
              color: '#0f172a'
            }}
          >
            📖 Explore User Docs
          </Link>
          <Link
            to="/devdocs/"
            className="button button--secondary button--lg"
            style={{
              padding: '0.8rem 1.8rem',
              fontWeight: 600,
              borderRadius: '8px',
              borderColor: '#334155'
            }}
          >
            ⚙️ Developer Architecture
          </Link>
          <Link
            href="https://github.com/hckr-tools/hckr-tools-browser-extension"
            className="button button--outline button--lg"
            style={{
              padding: '0.8rem 1.8rem',
              fontWeight: 600,
              borderRadius: '8px'
            }}
          >
            ⭐ View Extension on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: '🔒 100% Offline & Private',
    description:
      'Zero remote servers, zero analytics, zero external API calls. All computations happen in-memory inside your local browser process.',
    link: '/docs/privacy-policy/'
  },
  {
    title: '⚡ Native Side Panel Integration',
    description:
      'Docked neatly next to your code editor, Postman, terminal, or browser tab. Instant toggle with Cmd+Shift+H.',
    link: '/docs/keyboard-shortcuts/'
  },
  {
    title: '🧠 Smart Selection Detector',
    description:
      'Highlight tokens, Epoch timestamps, base64 strings, or JSON blobs on any web page to inspect or decode them instantly.',
    link: '/devdocs/architecture/content-scripts/'
  },
  {
    title: '🚀 12+ Built-in Utilities',
    description:
      'JSON Formatter & Filter, JWT Decoder, Regex Tester, Diff Viewer, Hash Generator, UUIDs, Timestamp Matrix, and more.',
    link: '/docs/tools/overview/'
  },
];

function Features() {
  return (
    <section style={{ padding: '4.5rem 1.5rem', background: 'var(--ifm-background-color)' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Built for Modern Software Engineering
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Everything you need for daily debugging, decoding, and data inspection in one lightning-fast toolkit.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.75rem'
        }}>
          {FeatureList.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(30, 41, 59, 0.45)',
                border: '1px solid rgba(148, 163, 184, 0.12)',
                borderRadius: '12px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, border-color 0.2s'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.85rem' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
              </div>
              <Link to={item.link} style={{ color: '#22d3ee', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', display: 'inline-block' }}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ToolBadges = [
  { name: 'JSON Formatter', icon: '{ }', path: '/docs/tools/json-formatter/' },
  { name: 'JWT Decoder', icon: '🔑', path: '/docs/tools/jwt-decoder/' },
  { name: 'Base64 Tool', icon: '64', path: '/docs/tools/base64/' },
  { name: 'URL Encoder', icon: '%', path: '/docs/tools/url-encoder/' },
  { name: 'Hash Generator', icon: '#', path: '/docs/tools/hash-generator/' },
  { name: 'UUID Generator', icon: '🆔', path: '/docs/tools/uuid-generator/' },
  { name: 'Timestamp Converter', icon: '⏱️', path: '/docs/tools/timestamp-converter/' },
  { name: 'Diff Checker', icon: '±', path: '/docs/tools/diff-checker/' },
  { name: 'Regex Tester', icon: '.*', path: '/docs/tools/regex-tester/' },
  { name: 'Dummy Data', icon: '🎲', path: '/docs/tools/dummy-data/' },
  { name: 'Markdown Preview', icon: 'M↓', path: '/docs/tools/markdown-preview/' },
];

function ToolsGrid() {
  return (
    <section style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--hckr-border, #1e293b)' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Instant Access to All Developer Utilities
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Explore user manuals and developer documentation for every included tool.
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1rem'
        }}>
          {ToolBadges.map((tool, idx) => (
            <Link
              key={idx}
              to={tool.path}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '8px',
                padding: '1.25rem 1rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ fontSize: '1.6rem', fontFamily: 'monospace', color: '#22d3ee' }}>{tool.icon}</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{tool.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="hckr-tools — Developer Utility Toolkit"
      description="Offline-first Chrome extension delivering developer utilities in your browser side panel."
    >
      <HeroBanner />
      <main>
        <Features />
        <ToolsGrid />
      </main>
    </Layout>
  );
}
