import React, { useState, lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import MainSearchInput from '../../components/MainSearchInput/MainSearchInput';

const LandingDropdown = lazy(() => import('../../components/LandingDropdown/LandingDropdown'));
const FromTheBlog = lazy(() => import('../../components/FromTheBlog/FromTheBlog'));
const Footer = lazy(() => import('../../components/Footer/Footer'));
// import FromTheBlog from '../../components/FromTheBlog/FromTheBlog';
const CategoriesMenu = lazy(() => import('../../components/CategoriesMenu/CategoriesMenu'));

function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // show={isOpen}
  //           enter="transition ease-out duration-100 transform"
  //           enterFrom="opacity-0 scale-95"
  //           enterTo="opacity-100 scale-100"
  //           leave="transition ease-in duration-75 transform"
  //           leaveFrom="opacity-100 scale-100"
  //           leaveTo="opacity-0 scale-95"

  return (
    <div className="bg-gray-50">
      <div
        className="relative overflow-hidden h-screen"
        style={{
          background:
            'url(https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60)',
        }}
      >
        <div className="block absolute inset-y-0 h-full w-full">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)" />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)" />
            </svg>
          </div>
        </div>
        <div className="relative pt-6 pb-12 lg:pb-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <LazyLoad>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                        alt="Logo"
                      />
                    </LazyLoad>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Company
                </a>
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                  >
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>

          {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
          <Suspense
            fallback={
              <div className="flex flex-col h-screen justify-center">
                <div className="flex justify-center">Cargando...</div>
              </div>
            }
          >
            <LandingDropdown isOpen={isOpen} handleClick={handleClick} />
          </Suspense>
          <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
                La búsqueda de anuncios
                <div className="text-indigo-600">más precisa y rápida de Cuba</div>
              </h2>
              <MainSearchInput />
            </div>
          </div>
        </div>
        {/* <CategoriesMenu /> */}

        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6"></div>
        </div>
      </div>
      {/* from the blog start */}
      <Suspense
        fallback={
          <div className="flex flex-col h-screen justify-center">
            <div className="flex justify-center">Cargando...</div>
          </div>
        }
      >
        <FromTheBlog />
      </Suspense>
      {/* from the blog END */}
      <Suspense
        fallback={
          <div className="flex flex-col h-screen justify-center">
            <div className="flex justify-center">Cargando...</div>
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}

export default Landing;
