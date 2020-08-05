import React from 'react';

import Transition from '../../Transition';
import { connectSortBy } from 'react-instantsearch-dom';

const SortingButton = ({ isOpen, setIsOpen, isSmall, items, refine, createURL }) => (
  <div class="relative">
    <button
      onClick={() => setIsOpen(false)}
      className={` ${isOpen ? 'fixed' : 'hidden'} top-0 left-0 bottom-0 right-0 h-full w-full`}
    ></button>
    <span class="rounded-md ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="sort-menu"
        type="button"
        class={`${
          isSmall ? '' : 'bg-indigo-100'
        } inline-flex justify-center rounded-md text-indigo-600 border-none px-4 py-2 text-sm leading-5 font-medium  hover:bg-indigo-100 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-800 transition ease-in-out duration-150`}
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg class="mr-3 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
        </svg>
        Ordenar
        <svg class="ml-2.5 -mr-1.5 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </span>
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div class="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg">
        <div class="rounded-md bg-white shadow-xs">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
            {items.map((item) => (
              <a
                onClick={(event) => {
                  event.preventDefault();
                  refine(item.value);
                  setIsOpen(false);
                }}
                href="#"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Transition>
  </div>
);

const ConnectedSortingButton = connectSortBy(SortingButton);

export default ConnectedSortingButton;
