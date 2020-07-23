import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import MainSearchInput from '../../components/MainSearchInput/MainSearchInput';

import logo from '../../img/logo.svg';
import Transition from '../../Transition';

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
    <div class="bg-gray-50">
      <div class="relative overflow-hidden h-screen">
        <div class="block absolute inset-y-0 h-full w-full">
          <div class="relative h-full">
            <svg
              class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
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
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)" />
            </svg>
            <svg
              class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
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
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)" />
            </svg>
          </div>
        </div>

        <div class="relative pt-6 pb-12 lg:pb-20">
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
              <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <LazyLoad>
                      <img
                        class="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                        alt="Logo"
                      />
                    </LazyLoad>
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
              <div class="hidden md:flex md:space-x-10">
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Product
                </a>
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Features
                </a>
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Marketplace
                </a>
                <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
                  Company
                </a>
              </div>
              <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span class="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
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
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div class="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md">
                <div
                  class="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <LazyLoad>
                        <img
                          class="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                          alt=""
                        />
                      </LazyLoad>
                    </div>
                    <div class="-mr-2">
                      <button
                        type="button"
                        onClick={handleClick}
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                      >
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="px-2 pt-2 pb-3">
                    <a
                      href="#"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Company
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
            <div class="text-center">
              <h2 class="text-3xl sm:text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl">
                La búsqueda de clasificados
                <div class="text-indigo-600">más rápida de Cuba</div>
              </h2>
              <MainSearchInput />
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex flex-col">
            <div class="flex-1"></div>
            <div class="flex-1 w-full bg-gray-800"></div>
          </div>
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6"></div>
        </div>
      </div>
      {/* from the blog start */}
      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              From the blog
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <LazyLoad>
                  <img
                    class="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </LazyLoad>
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" class="hover:underline">
                      Blog
                    </a>
                  </p>
                  <a href="#" class="block">
                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Boost your conversion rate</h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius,
                      ut atque fuga culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <LazyLoad>
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </LazyLoad>
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        Roel Aufderhar
                      </a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500">
                      <time datetime="2020-03-16">Mar 16, 2020</time>
                      <span class="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <LazyLoad>
                  <img
                    class="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    alt=""
                  />
                </LazyLoad>
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" class="hover:underline">
                      Video
                    </a>
                  </p>
                  <a href="#" class="block">
                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      How to use search engine optimization to drive sales
                    </h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat
                      doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo
                      laudantium.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <LazyLoad>
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </LazyLoad>
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        Brenna Goyette
                      </a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500">
                      <time datetime="2020-03-16">Mar 16, 2020</time>
                      <span class="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <LazyLoad>
                  <img
                    class="h-48 w-full object-cover"
                    src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    alt=""
                  />
                </LazyLoad>
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-indigo-600">
                    <a href="#" class="hover:underline">
                      {' '}
                      Case Study
                    </a>
                  </p>
                  <a href="#" class="block">
                    <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">Improve your customer experience</h3>
                    <p class="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo
                      recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <LazyLoad>
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </LazyLoad>
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        Daniela Metz
                      </a>
                    </p>
                    <div class="flex text-sm leading-5 text-gray-500">
                      <time datetime="2020-03-16">Mar 16, 2020</time>
                      <span class="mx-1">&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* from the blog END */}
      <div class="bg-gray-800">
        <div class="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">
          <h3 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Trusted by over 26,000 forward-thinking companies
          </h3>
          <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <LazyLoad>
                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" />
              </LazyLoad>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <LazyLoad>
                <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" />
              </LazyLoad>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <LazyLoad>
                <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" />
              </LazyLoad>
            </div>
            <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <LazyLoad>
                <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor" />
              </LazyLoad>
            </div>
            <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <LazyLoad>
                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg" alt="Workcation" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
