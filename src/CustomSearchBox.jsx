import React, { useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const [value, setValue] = useState('');

  return (
    <div className="fixed w-full z-10 mx-auto px-1/4 ">
      <div className="relative flex justify-between h-14">
        <div className="absolute w-full inset-y-0 left-0 flex items-center ">
          <form noValidate action="" role="search" className="relative mt-5 w-full mx-auto">
            <input
              className="form-input block bg-gray-200 border-none  w-full sm:text-sm"
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
        </div>
      </div>
    </div>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
