import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';
const SearchHits = lazy(() => import('../../components/SearchHits/SearchHits'));

function SearchHitsComponent({ isOpen, filterHandler, shouldShowBar, config, indexName }) {
  useEffect(() => {
    console.log(indexName, config.category);
  });
  return (
    <div className="h-screen">
      <div className="fixed w-full z-20">
        <Navbar filterHandler={filterHandler} shouldShowBar={shouldShowBar} />
        <div className="md:hidden">
          <SearchInput filterHandler={filterHandler} />
          <Filters isOpen={isOpen} config={config} />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHits label={config.label} category={config.category} details={config.items} config={config} />
      </Suspense>
    </div>
  );
}

export default SearchHitsComponent;
