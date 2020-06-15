import React, { useState, useEffect, useRef } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import Transition from './Transition';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
  const [value, setValue] = useState('');
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  let shouldShowBar = goingUp || window.scrollY === 0;

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
      <div className="fixed w-full z-10 mx-auto px-2 mt-0 top-14 sm:px-1/4">
        <div className="relative flex justify-between h-14">
          <div className="absolute w-full inset-y-0 left-0 flex items-center ">
            <form noValidate action="" role="search" className="relative mt-5 w-full mx-auto">
              <div class="mt-1 relative rounded-md">
                <div className="flex">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                    className="form-input block bg-gray-900 border-none pl-10 w-full mr-2 sm:text-sm"
                    placeholder="Buscar casas..."
                    type="search"
                    value={currentRefinement}
                    onChange={(event) => {
                      setValue(event.currentTarget.value);
                      refine(event.currentTarget.value);
                    }}
                  />
                  <button className="inline-flex items-center px-2.5 bg-gray-700 text-gray-100 rounded-md">
                    Filters
                  </button>
                </div>
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
