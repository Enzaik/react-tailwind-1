import React from 'react';
import algoliasearch from 'algoliasearch/lite';

import Navbar from './Navbar';
import Content from './Content';
import { InstantSearch } from 'react-instantsearch-dom';

import './App.css';

function App() {
  const searchClient = algoliasearch('I48K3G5GE1', '8832d7240edde67aee54ae7de5276e0d');

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900  antialiased">
      <InstantSearch indexName="houses" searchClient={searchClient}>
        <Navbar />
        <Content />
      </InstantSearch>
    </div>
  );
}

export default App;
