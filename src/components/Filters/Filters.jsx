import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';

import Transition from '../../Transition';
import CustomRefinementList from '../../CustomRefinedList';

function Filters({ items, isFromSearch, refine, searchForItems, createURL, attribute, isOpen, shouldShowBar }) {
  return (
    // <Transition
    //   show={isOpen}
    //   enter="transition ease-out duration-100 transform"
    //   enterFrom="opacity-0 scale-95"
    //   enterTo="opacity-100 scale-100"
    //   leave="transition ease-in duration-75 transform"
    //   leaveFrom="opacity-100 scale-100"
    //   leaveTo="opacity-0 scale-95"
    // >
    <div
      className={`${
        isOpen && shouldShowBar ? 'block' : 'hidden'
      } bg-gray-800 text-gray-300 w-full z-10 mx-auto px-6 pb-4 mt-0 border-t-2 border-gray-900`}
    >
      <label>
        <div>Camas</div>
        <CustomRefinementList attribute="beds" searchable />
      </label>
    </div>
    // </Transition>
  );
}

export default Filters;
