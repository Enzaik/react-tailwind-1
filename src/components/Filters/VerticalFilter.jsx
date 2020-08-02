import React from 'react';
import CustomRefinementList from '../../CustomRefinedList';

const Filters = ({ config }) => {
  return (
    <div className="fixed h-screen hidden width-left-panel md:block pt-panel top-0 z-20 bg-gray-900">
      <div className="w-full h-full bg-gray-800">
        <CustomRefinementList config={config} searchable />
      </div>
    </div>
  );
};

export default Filters;
