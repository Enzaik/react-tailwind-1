import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';

import Transition from '../../Transition';
import CustomRefinementList from '../../CustomRefinedList';

function Filters({ items, isFromSearch, refine, searchForItems, createURL, attribute, isOpen }) {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } bg-gray-800 text-gray-300 w-full z-10 mx-auto px-6 pb-4 mt-0  border-gray-900`}
    >
      <CustomRefinementList attribute="beds" searchable />
    </div>
  );
}

export default Filters;
