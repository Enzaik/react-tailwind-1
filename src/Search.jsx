import React, { Component } from 'react';
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
import './Search.css';

const searchClient = algoliasearch('I48K3G5GE1', '8832d7240edde67aee54ae7de5276e0d');

class Search extends Component {
  render() {
    return (
      <div className="">
        <InstantSearch indexName="houses" searchClient={searchClient}>
          <div className="">
            <ClearRefinements />
            <h2>Banos</h2>
            <RefinementList attribute="baths" />
            <h2>Camas</h2>
            <RefinementList attribute="beds" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="">
            <SearchBox className="border " />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit({ hit }) {
  return (
    <div class="relative flex max-w-5xl bg-white my-4 border-b border-gray-200 overflow-hidden rounded-lg shadow-md sm:shadow-xl mx-auto hover:cursor-pointer">
      <img className="h-32 w-32 object-cover" src={hit.url} />
      <div className="p6 mr-16">
        <div className="">
          <Highlight attribute="description" hit={hit} />
        </div>

        <div className="absolute right-0 top-0">${hit.price}</div>
      </div>
    </div>
  );
}

export default Search;
