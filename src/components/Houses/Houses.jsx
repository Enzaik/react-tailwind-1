import React from 'react';
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

import CustomHits from '../../CustomHits';

const searchClient = algoliasearch('I48K3G5GE1', '8832d7240edde67aee54ae7de5276e0d');

function Houses() {
  return (
    // <div className="relative">
    //   <CustomSearchBox />
    //   <div className="pt-14 mx-auto max-w-screen-xl sm:px-10 mx-auto my-4">
    //     <header>
    //       <h1 class="text-md sm:text-xl font-semibold text-gray-600 leading-tight">Casas</h1>
    //     </header>
    //     <div className="flex mt-2">
    //       <div className="absolute fit-content bg-white -mt-60 w-full sm:sticky sm:top-28 sm:mt-0 sm:w-64 rounded-lg shadow-xl">
    //         <div className="flex">
    //           <CustomRefinementList attribute="beds" searchable />
    //         </div>
    //       </div>
    //       <CustomHits className="" hitComponent={House} />
    //     </div>
    //   </div>
    // </div>
    <div>
      <Navbar />
      <header class="bg-gray-800 shadow-sm mt-16 pb-2">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 class="text-lg leading-6 font-semibold text-gray-900">Casas</h1>
        </div>
        <CustomSearchBox />
      </header>
      <main>
        <div class="max-w-7xl h-screen mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div class="px-4 py-4 sm:px-0">
            <div class="border-gray-200 rounded-lg ">
              <div class="grid gap-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:max-w-none">
                <CustomHits />
              </div>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default Houses;
