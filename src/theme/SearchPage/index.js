import React from 'react';
import Layout from '@theme/Layout';

export default function SearchPage() {
  return (
    <Layout title="Search" description="Search developer documentation">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Search Developer Documentation</h1>
            <p>
              Use the search bar input in the top navigation header (or press <kbd>⌘</kbd> <kbd>K</kbd>) to search across all architecture, tools, Manifest V3 specs, and testing guides.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
