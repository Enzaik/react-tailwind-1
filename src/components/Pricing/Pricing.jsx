import React from 'react';

import Navbar from '../Navbar/Navbar';

function Pricing() {
  return (
    <div className=" bg-gray-900">
      <div className="fixed w-full z-30">
        <Navbar />
      </div>
      <div class="font-hindsiliguri max-w-7xl pt-content mx-auto  py-6 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider"></h2>
          <p class="font-montserrat font-semibold text-3xl leading-9  text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
            CuBuySell
          </p>
          <p class="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
            Escoge el paquete que más se ajuste a tus deseos.
          </p>
        </div>
      </div>

      <div class=" font-hindsiligurimt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div class="relative z-20">
          <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative lg:grid lg:grid-cols-7">
              <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div class="flex-1 flex flex-col">
                    <div class="bg-white px-6 py-10">
                      <div>
                        <h2 class="text-center text-2xl leading-8 font-medium text-gray-900">Hobby</h2>
                        <div class="mt-4 flex items-center justify-center">
                          <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                            <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span class="font-extrabold">79</span>
                          </span>
                          <span class="text-xl leading-7 font-medium text-gray-400">/mes</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">Pariatur quod similique</p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">Sapiente libero doloribus</p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">Vel ipsa esse repudiandae</p>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <div class="rounded-lg shadow-md">
                          <a
                            href="#"
                            class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          >
                            Empezar tu modo de prueba
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div class="relative z-20 rounded-lg shadow-xl">
                  <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"></div>
                  <div class="absolute inset-x-0 top-0 transform translate-y-px">
                    <div class="flex justify-center transform -translate-y-1/2">
                      <span class="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                        Más popular
                      </span>
                    </div>
                  </div>
                  <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h2 class="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6">Crecimiento</h2>
                      <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                          <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span class="font-extrabold">149</span>
                        </span>
                        <span class="text-2xl leading-8 font-medium text-gray-400">/mes</span>
                      </div>
                    </div>
                  </div>
                  <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Quia rem est sed impedit magnam
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Dolorem vero ratione voluptates
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Qui sed ab doloribus voluptatem dolore
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Laborum commodi molestiae id et fugiat
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Nam ut ipsa nesciunt culpa modi dolor
                        </p>
                      </li>
                    </ul>
                    <div class="mt-10">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="#"
                          class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150"
                        >
                          Empezar tu modo de prueba
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div class="flex-1 flex flex-col">
                    <div class="bg-white px-6 py-10">
                      <div>
                        <h2 class="text-center text-2xl leading-8 font-medium text-gray-900">Escala</h2>
                        <div class="mt-4 flex items-center justify-center">
                          <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                            <span class="mt-2 mr-2 text-4xl font-medium">$</span>
                            <span class="font-extrabold">349</span>
                          </span>
                          <span class="text-xl leading-7 font-medium text-gray-400">/mes</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul>
                        <li class="flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">Pariatur quod similique</p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">Sapiente libero doloribus</p>
                        </li>
                        <li class="mt-4 flex items-start">
                          <div class="flex-shrink-0">
                            <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-base leading-6 font-medium text-gray-500">Vel ipsa esse repudiandae</p>
                        </li>
                      </ul>
                      <div class="mt-8">
                        <div class="rounded-lg shadow-md">
                          <a
                            href="#"
                            class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                          >
                            Empezar tu modo de prueba
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
