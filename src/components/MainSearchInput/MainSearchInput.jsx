import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connectAutoComplete, connectHitInsights } from 'react-instantsearch-dom';

import CustomHighlight from '../CustomHighlight/CustomHighlight';

function MainSearchInput({ hits, currentRefinement, refine }) {
  const [value, setValue] = useState('');
  const [areSearchResults, setAreSearchResults] = useState(false);

  const inputHandle = (e, hits) => {
    setAreSearchResults(hits.length, e.target.value.length);
    setValue(e.target.value);
    refine(e.currentTarget.value);
  };

  return (
    <div className="relative mt-11 mx-auto sm:w-2/3 ">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center h-13 pointer-events-none">
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
        id="search"
        autoComplete="off"
        onChange={(e) => inputHandle(e, hits)}
        value={currentRefinement}
        className={`block sticky top-0 form-input rounded-full shadow-md focus:shadow-lg focus:outline-none focus:border-indigo-700 h-13 text-sm min-w-full pl-10 sm:leading-5 sm:text-md bg-coldgray-200 border-none focus:bg-white`}
        placeholder="Busca casas, autos o cualquier cosa"
      />
      <table className="min-w-full mt-1 rounded-md overflow-hidden shadow-sm">
        <tbody className={`${value ? 'bg-white' : 'hidden'}`}>
          {hits.map((hit) => (
            <HitWithInsights key={hit.objectID} hit={hit} />
          ))}
        </tbody>
      </table>
      {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
        <div className="rounded-md shadow">
          <Link
            to="/houses"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 sm:text-md sm:px-2 md:px-10"
          >
            Búsqueda avanzada
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link
            to="/houses"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 sm:text-md sm:px-2 md:px-10"
          >
            Ver un demo (casas)
          </Link>
        </div>
      </div> */}
    </div>
  );
}

function Hit({ hit }) {
  return (
    <tr className="hover:bg-gray-100">
      <td key={hit.objectID} className="px-6 py-4 text-left whitespace-no-wrap text-md leading-5 text-gray-900">
        <Link to={`${hit.to}`}>
          <CustomHighlight attribute="description" hit={hit} tagName="mark" />
        </Link>
      </td>
    </tr>
  );
}

const HitWithInsights = connectHitInsights(window.aa)(Hit);

const ConnectedMainSearchInput = connectAutoComplete(MainSearchInput);

export default ConnectedMainSearchInput;
