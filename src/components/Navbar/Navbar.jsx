import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';

import Dropdown from '../Dropdown/Dropdown';
import RangeInput from '../../RangeInput';
import SearchInputLargeScreen from '../../components/SearchInput/SearchInputLargeScreen';

const linksConfig = [
  { to: '/houses', label: 'Casas' },
  { to: '/cars', label: 'Autos' },
  { to: '/newad', label: 'Nuevo anuncio' },
  { to: '/newad-car', label: 'Nuevo anuncio' },
];

function Navbar({ filterHandler = null, shouldShowBar }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window.location.pathname);
  });
  let counterLarge = 0;
  let counterMobile = 0;
  let orderClass = '';

  return (
    <nav className="bg-gray-900 shadow z-20 top-0 md:bg-white md:ml-64">
      <div className="mx-auto px-2 sm:px-6 md:px-8 lg:px-10">
        <div className="relative flex justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:bg-gray-600 focus:text-gray-300 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {/* <!-- Icon when menu is closed. -->
          <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className={`${!isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:justify-end">
            <div className="flex-shrink-0 flex items-center md:hidden">
              <Link to={'/'}>
                <img className="block lg:hidden h-8 w-auto" src={logo} alt="Workflow logo" />
              </Link>
            </div>

            {filterHandler && shouldShowBar && (
              <SearchInputLargeScreen filterHandler={filterHandler} shouldShowBar={shouldShowBar} />
            )}

            <div className="hidden sm:ml-6 sm:flex">
              {linksConfig.map(({ to, label }) => {
                orderClass = counterLarge > 1 ? 'ml-5' : '';
                counterLarge++;
                return (
                  <Link
                    to={to}
                    key={to}
                    className={`${orderClass} ${
                      to === activeLink ? 'border-b-2 border-indigo-500' : ''
                    } inline-flex items-center px-1 pt-1 text-white md:text-gray-900 text-sm font-medium leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-300 focus:outline-none focus:text-gray-300 focus:bg-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button> */}

            {/* <!-- Profile dropdown --> */}
            <Dropdown />
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className={` ${isMobileMenuOpen ? 'fixed' : 'hidden'} fixed top-0 left-0 bottom-0 right-0 h-full w-full `}
      ></button>
      <div className={`${isMobileMenuOpen ? 'absolute' : 'hidden'} absolute w-full bg-white sm:hidden z-20`}>
        <div className="pt-2 pb-4 ">
          {linksConfig.map(({ to, label }) => {
            orderClass = counterMobile > 1 ? 'mt-1' : '';
            counterMobile++;
            return (
              <Link
                to={to}
                key={to}
                className={`block pl-3 pr-4 py-2 ${
                  to === activeLink ? 'border-l-4 border-indigo-500' : ''
                } text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
