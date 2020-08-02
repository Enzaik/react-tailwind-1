import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';
const SearchHits = lazy(() => import('../../components/SearchHits/SearchHits'));

function SearchHitsComponent({ filter, isOpen, filterHandler, shouldShowBar, config }) {
  // const prevScrollY = useRef(0);
  // const [goingUp, setGoingUp] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (prevScrollY.current < currentScrollY && goingUp) {
  //       setGoingUp(false);
  //     }
  //     if (prevScrollY.current > currentScrollY && !goingUp) {
  //       setGoingUp(true);
  //     }

  //     prevScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [goingUp]);

  // let shouldShowBar = goingUp || window.scrollY === 0;

  return (
    <div className="h-screen">
      <div className="fixed w-full z-10">
        <Navbar filterHandler={filterHandler} shouldShowBar={shouldShowBar} />
        <div className="md:hidden">
          <SearchInput filterHandler={filterHandler} />
          <Filters isOpen={isOpen} />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHits label={config.label} category="houses" details={config.items} />
      </Suspense>
    </div>
  );
}

export default SearchHitsComponent;
