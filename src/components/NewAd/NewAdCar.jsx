import React from 'react';
import NavBar from '../Navbar/Navbar';

function NewAd({ shouldShowBar }) {
  return (
    <>
      <div className="fixed w-full z-30">
        <NavBar shouldShowBar={shouldShowBar} />
      </div>
      <div className="pt-24 py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Crear anuncio</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            <form method="post" action="/">
              <div className="mt-2 shadow-md sm:rounded-md sm:overflow-hidden ">
                <input type="hidden" name="form-name" value="cars" />
                <div className="px-4 py-5 bg-white sm:p-6">
                  {/*  <div>
                     <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                          This information will be displayed publicly so be careful what you share.
                        </p>
                    </div> */}

                  {/* <div className="mt-6 sm:mt-5"> */}
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start ">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Categoría
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <select
                          name="category"
                          id="category"
                          className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        >
                          <option selected>Autos</option>
                          <option>Casas</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Precio
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <input
                          required
                          type="number"
                          id="price"
                          name="price"
                          className="flex-1 form-input block w-full min-w-0  rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="province"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Provincia
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <select
                          id="province"
                          name="province"
                          className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                        >
                          <option selected>La Habana</option>
                          <option>Matanzas</option>
                          <option>Pinar del Río</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="year" className="block text-sm leading-5 font-medium text-gray-700">
                      Año
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <input
                          id="year"
                          name="year"
                          className="flex-1 form-input block w-full min-w-0  rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="flex items-center">
                        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <span className="ml-5 rounded-md shadow-sm">
                          <button
                            type="submit"
                            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                          >
                            Change
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Descripción
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <textarea
                          name="description"
                          id="description"
                          rows="3"
                          className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Evita iconos y caracteres especiales para que tu anuncio se publique
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                    <label htmlFor="photo" className="block text-sm leading-5 font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <input
                          id="photo"
                          name="photo"
                          className="flex-1 form-input block w-full min-w-0  rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                      <div className="flex items-center">
                        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <span className="ml-5 rounded-md shadow-sm">
                          <button
                            type="submit"
                            className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                          >
                            Change
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="cover_photo"
                            className="block text-sm leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Cover photo
                          </label>
                          <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="text-center">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <p className="mt-1 text-sm text-gray-600">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                                  >
                                    Upload a file
                                  </button>
                                  or drag and drop
                                </p>
                                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                              </div>
                            </div>
                          </div>
                        </div> */}
                  {/* </div> */}
                </div>

                <div className="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="py-2 px-4 rounded-md text-sm leading-5 font-medium text-indigo-700 hover:text-indigo-500 bg-indigo-200 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-indigo-600  transition duration-150 ease-in-out"
                    >
                      Cancelar
                    </button>
                  </span>
                  <span className="ml-3 inline-flex rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Guardar
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
}

export default NewAd;
