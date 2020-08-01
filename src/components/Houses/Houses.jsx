import React from 'react';

import CustomHits from '../CustomHits/CustomHits';
import VerticalFilter from '../Filters/VerticalFilter';
import CustomCurrentRefinements from '../../Refinements';

function Houses() {
  return (
    <>
      <VerticalFilter attribute="beds" searchable />
      <div className="block md:hidden">
        <main className="max-w-7xl pt-content mx-auto px-4 py-6 sm:px-6 md:ml-1/5 lg:px-8 ">
          <div className="flex px-2 justify-between items-baseline ">
            <div className="font-semibold">Casas</div>
            <div className="text-sm text-indigo-600">Ver más</div>
          </div>
          <CustomHits />
        </main>
      </div>
      <div className="hidden md:block">
        <main className=" pt-24 mx-auto py-6 sm:px-6 margin-filter lg:px-8">
          <div className="flex max-w-5xl mx-auto px-2 justify-between items-baseline">
            <div className="font-semibold">Casas</div>
            <CustomCurrentRefinements />
            <div className="text-sm text-indigo-600">Ver más</div>
          </div>
          <CustomHits />
        </main>
      </div>
    </>
  );
}

export default Houses;
