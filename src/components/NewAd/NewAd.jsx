import React from 'react';
import NavBar from '../Navbar/Navbar';

function NewAd({ shouldShowBar }) {
  const truth = (
    <>
      <div className="fixed w-full z-30">
        <NavBar shouldShowBar={shouldShowBar} />
      </div>
      <div class="pt-24 py-10">
        <header>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <select name="category" />
            </form>

            <form method="post">
              <input type="hidden" name="form-name" value="ad" />
              <div>
                <div>
                  <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                    <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                      This information will be displayed publicly so be careful what you share.
                    </p>
                  </div>

                  <div class="mt-6 sm:mt-5">
                    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label for="category" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                        Categoría
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <select
                            name="category"
                            id="category"
                            class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                          >
                            <option>Autos</option>
                            <option selected>Casas</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label for="price" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                        Precio
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            required
                            type="number"
                            id="price"
                            name="price"
                            class="flex-1 form-input block w-full min-w-0  rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label for="province" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                        Provincia
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <select
                            id="province"
                            name="province"
                            class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                          >
                            <option selected>La Habana</option>
                            <option>Matanzas</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label for="beds" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                        No. de camas
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <select
                            id="beds"
                            name="beds"
                            class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                          >
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label for="baths" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                        No. de baños
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <select
                            id="baths"
                            name="baths"
                            class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                          >
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        for="description"
                        class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Descripción
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <textarea
                            name="description"
                            id="description"
                            rows="3"
                            class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          ></textarea>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
                      </div>
                    </div>

                    <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                      <label for="photo" class="block text-sm leading-5 font-medium text-gray-700">
                        Photo
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            id="photo"
                            name="photo"
                            class="flex-1 form-input block w-full min-w-0  rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>
                      <div class="mt-2 sm:mt-0 sm:col-span-2">
                        <div class="flex items-center">
                          <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <span class="ml-5 rounded-md shadow-sm">
                            <button
                              type="submit"
                              class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            >
                              Change
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        for="cover_photo"
                        class="block text-sm leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Cover photo
                      </label>
                      <div class="mt-2 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="text-center">
                            <svg
                              class="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <p class="mt-1 text-sm text-gray-600">
                              <button
                                type="button"
                                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                              >
                                Upload a file
                              </button>
                              or drag and drop
                            </p>
                            <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 border-t border-gray-200 pt-5">
                <div class="flex justify-end">
                  <span class="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    >
                      Cancel
                    </button>
                  </span>
                  <span class="ml-3 inline-flex rounded-md shadow-sm">
                    <button
                      // onClick={(e) => {
                      //   e.preventDefault();

                      //   housesIndex
                      //     .saveObject({
                      //       name: 'fuuuuuck',
                      //       description: 'ligula pellentesque ultrices',
                      //       price: 5663,
                      //       beds: 3,
                      //       baths: 1,
                      //       stars: 1,
                      //       url:
                      //         'https://images.unsplash.com/photo-1509592149237-bc44977d96d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                      //       province: 'La Habana',
                      //     })
                      //     .then(({ objectID }) => {
                      //       console.log(objectID);
                      //     });
                      // }}
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Save
                    </button>
                  </span>
                </div>
              </div>
            </form>

            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </>
  );

  const wrong = (
    <>
      <form method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
  return truth;
}

export default NewAd;
