import React from 'react';

import CustomRefinementList from '../../CustomRefinedList';

function Filters({ config, isOpen }) {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } bg-gray-800 text-gray-300 w-full z-10 mx-auto px-6 pb-4 mt-0  border-gray-900`}
    >
      <CustomRefinementList config={config} searchable />
    </div>
  );
}

export default Filters;
