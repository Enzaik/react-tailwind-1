import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

import CustomSearchBox from '../../components/CustomSearchBox/CustomSearchBox';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';
const Houses = lazy(() => import('../../components/Houses/Houses'));

function HousesComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);

  const filterHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  let shouldShowBar = goingUp || window.scrollY === 0;

  return (
    <div>
      <div className="fixed w-full z-10">
        <Navbar />
        <CustomSearchBox filterHandler={filterHandler} shouldShowBar={shouldShowBar} />
        <Filters isOpen={isOpen} shouldShowBar={shouldShowBar} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Houses />
      </Suspense>
    </div>
  );
}

export default HousesComponent;
