import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import RangeInput from '../../RangeInput';
import CustomRefinementList from '../../CustomRefinedList';

const Filters = ({ items, isFromSearch, refine, searchForItems, createURL, attribute }) => {
  return (
    <div className="fixed h-screen hidden width-left-panel md:block pt-panel top-0 z-20 bg-gray-900">
      <div className="w-full h-full bg-gray-800">
        <CustomRefinementList attribute="beds" searchable />
      </div>
    </div>
  );
};

const VerticalFilter = connectRefinementList(Filters);
export default VerticalFilter;
