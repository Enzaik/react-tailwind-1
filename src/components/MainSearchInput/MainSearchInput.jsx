import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connectAutoComplete, connectHitInsights } from 'react-instantsearch-dom';

import CustomHighlight from '../CustomHighlight/CustomHighlight';

function MainSearchInput({ hits, currentRefinement, refine }) {
  const [value, setValue] = useState('');
  const inputHandle = (e) => {
    setValue(e.target.value);
    refine(e.currentTarget.value);
  };

  return (
    <div className="relative mt-11 mx-auto sm:w-2/3">
      <input
        id="email"
        autocomplete="off"
        onChange={inputHandle}
        value={currentRefinement}
        className="block form-input h-13 text-sm  pl-3.5 min-w-full sm:pl-10 sm:leading-5 sm:text-md md:text-xl  bg-coldgray-200 border-none"
        placeholder="Busca casas, autos o cualquier cosa"
      />
      <table className="absolute min-w-full">
        <tbody className={`${value ? 'bg-white' : 'hidden'}`}>
          {hits.map((hit) => (
            <HitWithInsights key={hit.objectID} hit={hit} />
          ))}
        </tbody>
      </table>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
        <div className="rounded-md shadow">
          <Link
            to="/houses"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Búsqueda avanzada
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link
            to="/houses"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Ver un demo (casas)
          </Link>
        </div>
      </div>
    </div>
  );
}

function Hit({ hit }) {
  return (
    <tr>
      <td
        key={hit.objectID}
        className="px-6 py-4 whitespace-no-wrap text-sm sm:text-lg leading-5 font-medium text-gray-900"
      >
        <CustomHighlight attribute="description" hit={hit} tagName="mark" />
      </td>
    </tr>
  );
}

const HitWithInsights = connectHitInsights(window.aa)(Hit);

const ConnectedMainSearchInput = connectAutoComplete(MainSearchInput);

export default ConnectedMainSearchInput;
