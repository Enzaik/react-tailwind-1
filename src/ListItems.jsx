import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch('I48K3G5GE1', '8832d7240edde67aee54ae7de5276e0d');

function ListItems() {
  return (
    <div class="bg-white  rounded-lg overflow-hidden max-w-4xl max-h-xl mx-auto my-4 shadow-xl hover:cursor-pointer">
      <InstantSearch indexName="houses" searchClient={searchClient}>
        <SearchBox className="border w-11/12" />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
}

function Hit({ hit }) {
  return (
    <div>
      <div class="relative pb-2/3">
        <img className="absolute h-full w-full object-cover" src={hit.url} />
      </div>
      <div class="p-6">
        <div className="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {hit.beds} camas &bull; {hit.baths} baños
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
          <Highlight attribute="description" hit={hit} />
        </h4>
        <div class="mt-1">
          ${hit.price}
          <span class="text-gray-600 text-sm"> / wk</span>
        </div>
        <div class="mt-4">
          <span class="text-teal-600 font-semibold">{hit.stars}/5 stars</span>
          <span class="text-gray-600 text-sm"> (basado en 78 comentarios)</span>
        </div>
      </div>
    </div>
  );
}

export default ListItems;
