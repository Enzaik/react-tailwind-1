import React, { lazy, Suspense, useState } from 'react';
import { connectSortBy } from 'react-instantsearch-dom';

import CustomHits from '../CustomHits/CustomHits';
import SortingButton from '../SortingButton';

const VerticalFilter = lazy(() => import('../Filters/VerticalFilter'));
const CustomCurrentRefinements = lazy(() => import('../../Refinements'));

function SearchHits({ label, category, details, config }) {
  const [isOpen, setIsOpen] = useState(false);
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
              <div className="text-2xl font-semibold">{label}</div>
              <div className="text-sm text-indigo-600">Ver más</div>
            </div>
            <CustomHits details={details} />
          </main>
        </div>
        <div className="hidden md:block">
          <main className=" pt-24 mx-auto py-6 sm:px-6 margin-filter lg:px-8">
            {/* <div className="sticky top-76 z-20 flex max-w-5xl mx-auto px-2 justify-between items-baseline"> */}
            <div className="top-76 z-20 flex max-w-5xl mx-auto px-2 justify-between">
              <div className="font-semibold text-3xl">{label}</div>
              <CustomCurrentRefinements />
              <div className="flex">
                <SortingButton
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  defaultRefinement="instant_search"
                  items={[
                    { value: 'instant_search_price_asc', label: 'Precio asc.' },
                    { value: 'instant_search_price_desc', label: 'Precio desc.' },
                  ]}
                />
              </div>
            </div>
            <CustomHits details={details} />
          </main>
        </div>
      </Suspense>
    </>
  );
}

const SortBy = ({ items, refine, createURL }) => (
  <ul>
    {items.map((item) => (
      <li key={item.value}>
        <a
          href={createURL(item.value)}
          style={{ fontWeight: item.isRefined ? 'bold' : '' }}
          onClick={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

// const ConnectedSearchHits = connectSortBy(SearchHits);
const ConnectedSearchHits = connectSortBy(SortBy);

// export default ConnectedSearchHits;
export default SearchHits;
