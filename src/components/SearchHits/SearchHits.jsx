import React, { lazy, Suspense } from 'react';

import CustomHits from '../CustomHits/CustomHits';
const VerticalFilter = lazy(() => import('../Filters/VerticalFilter'));
const CustomCurrentRefinements = lazy(() => import('../../Refinements'));

function SearchHits({ label, category, details, config }) {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex flex-col h-screen justify-center">
            <div className="flex justify-center">Cargando...</div>
          </div>
        }
      >
        <VerticalFilter attribute="beds" config={config} searchable />
        <div className="block md:hidden">
          <main className="max-w-7xl pt-content mx-auto px-4 py-6 sm:px-6 md:ml-1/5 lg:px-8 ">
            <div className="flex px-2 justify-between items-baseline ">
              <div className="font-semibold">{label}</div>
              <div className="text-sm text-indigo-600">Ver más1</div>
            </div>
            <CustomHits details={details} />
          </main>
        </div>
        <div className="hidden md:block">
          <main className=" pt-24 mx-auto py-6 sm:px-6 margin-filter lg:px-8">
            <div className="sticky top-76 z-20 flex max-w-5xl mx-auto px-2 justify-between items-baseline">
              <div className="font-semibold text-3xl">{label}</div>
              <CustomCurrentRefinements />

              <div className="text-sm text-indigo-600">Ver más2</div>
            </div>
            <CustomHits details={details} />
          </main>
        </div>
      </Suspense>
    </>
  );
}

export default SearchHits;
