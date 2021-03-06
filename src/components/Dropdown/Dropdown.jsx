import React, { useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Transition from '../../Transition';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(false)}
        className={` ${isOpen ? 'fixed' : 'hidden'} top-0 left-0 bottom-0 right-0 h-full w-full`}
      ></button>
      <span className="rounded-md shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
          id="user-menu"
          aria-label="User menu"
          aria-haspopup="true"
        >
          <LazyLoadImage
            className="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1590626448634-7a9f6e56bb39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=60"
            alt=""
          />
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
        <div className="z-20 origin-top-right ml-22 absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className=" z-20 rounded-md bg-white shadow-xs">
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Account settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                License
              </a>
              <form method="POST" action="#">
                <button
                  type="submit"
                  className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Dropdown;
