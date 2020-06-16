import React, { useState, useEffect, useRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';

import CustomSearchBox from '../../CustomSearchBox';
import CustomRefinementList from '../../CustomRefinedList';
import CustomRangeSlider from '../../RangeInput';
import CustomAutocomplete from '../../Autocomplete';
import Navbar from '../Navbar/Navbar';
import Filters from '../Filters/Filters';
import CustomHits from '../../CustomHits';
import MainContent from '../../MainContent';

import Transition from '../../Transition';

function Houses() {
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
      <MainContent />
    </div>
  );
}

export default Houses;
