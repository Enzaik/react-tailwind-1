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
    <div>
      <div className="fixed w-full z-10">
        <Navbar />
        <CustomSearchBox />
      </div>
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
