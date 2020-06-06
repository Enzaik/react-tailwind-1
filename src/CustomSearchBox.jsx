import React, { useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const [value, setValue] = useState('');

  return (
    <form noValidate action="" role="search" className="relative mt-5 max-w-xl mx-auto">
      <input
        className="form-input  block w-full sm:text-sm sm:leading-5"
        placeholder="Buscar casas..."
        type="search"
        value={currentRefinement}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          refine(event.currentTarget.value);
        }}
      />
      <div class="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
        {value && (
          <button
            className="inline-flex items-center  px-2 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
            onClick={(e) => {
              e.preventDefault();
              refine('');
            }}
          >
            X
          </button>
        )}
      </div>

      {isSearchStalled ? <div className="px-2">Buscando...</div> : ''}
    </form>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
