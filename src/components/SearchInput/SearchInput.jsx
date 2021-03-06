import React, { useState, useEffect, useRef } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import Transition from '../../Transition';

const SearchBox = ({ currentRefinement, isSearchStalled, refine, filterHandler }) => {
  return (
    <Transition
      show={true}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className=" bg-gray-800 w-full z-10 mx-auto px-2 pb-4 mt-0 sm:px-1/4">
        <div className="relative flex justify-between h-14">
          <div className="absolute w-full inset-y-0 left-0 flex">
            <form noValidate action="" role="search" className="relative mt-5 w-full mx-auto">
              <div className="flex">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 01-2.122 2.122l-3-3a1.497 1.497 0 01-.437-1.145l-1.096-1.096a8 8 0 111.414-1.414zM8 14A6 6 0 108 2a6 6 0 000 12z"
                      fill="#A0AEC0"
                    />
                  </svg>
                </div>
                <input
                  className="form-input rounded-full block bg-gray-900 text-white border-none pl-10 w-full mr-2 sm:text-sm"
                  placeholder="Buscar casas..."
                  type="search"
                  value={currentRefinement}
                  onChange={(event) => {
                    refine(event.currentTarget.value);
                  }}
                />
                <button
                  onClick={filterHandler}
                  className="inline-flex items-center rounded-full px-2.5 bg-gray-700 text-gray-100 rounded-md hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-gray-600 transition ease-in-out duration-150"
                >
                  <svg
                    className="text-gray-500 mr-1 "
                    width="18"
                    height="14"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm3 6a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zm4 5a1 1 0 100 2h4a1 1 0 100-2H7z"
                      fill="currentColor"
                    />
                  </svg>
                  Filtros
                </button>
              </div>

              {isSearchStalled ? <div className="px-2">Buscando...</div> : ''}
            </form>
          </div>
        </div>
      </div>
    </Transition>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
