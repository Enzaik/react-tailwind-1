import React, { useState, useEffect, useRef } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import logo from '../../img/logo.svg';

import Transition from '../../Transition';

const SearchBox = ({ currentRefinement, isSearchStalled, refine, filterHandler, shouldShowBar }) => {
  return (
    <Transition
      show={shouldShowBar}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="hidden md:block bg-white w-full z-10 mx-auto px-2 mt-0 sm:px-1/4">
        <img className="hidden xl:block h-8 w-auto" src={logo} alt="Workflow logo" />
        <div className="relative flex justify-between h-full">
          <div className="absolute w-full inset-y-0 left-0 flex">
            <form noValidate action="" role="search" className="relative my-auto w-full mx-auto">
              <div className="flex">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    // className="animate-spin"
                    width="20"
                    height="20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.32 12.906l1.096 1.096c.412-.023.83.123 1.145.437l3 3a1.5 1.5 0 01-2.122 2.122l-3-3a1.497 1.497 0 01-.437-1.145l-1.096-1.096a8 8 0 111.414-1.414zM8 14A6 6 0 108 2a6 6 0 000 12z"
                      fill="#A0AEC0"
                    />
                  </svg>
                </div>
                <input
                  className="form-input rounded-full block bg-coldgray-100 text-coldgray-800 border-none pl-10 w-full mr-2 sm:text-sm"
                  placeholder="Buscar casas..."
                  type="search"
                  value={currentRefinement}
                  onChange={(event) => {
                    refine(event.currentTarget.value);
                  }}
                />
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
