import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';
const Houses = lazy(() => import('../../components/Houses/Houses'));

function HousesComponent({ filter, isOpen, filterHandler, shouldShowBar }) {
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
        {/* <Navbar filterHandler={filterHandler} shouldShowBar={shouldShowBar} /> */}
        <Navbar filterHandler={filterHandler} shouldShowBar={shouldShowBar} />
        <div className="md:hidden">
          <SearchInput filterHandler={filterHandler} />
          <Filters isOpen={isOpen} />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Houses />
      </Suspense>
    </div>
  );
}

export default HousesComponent;
