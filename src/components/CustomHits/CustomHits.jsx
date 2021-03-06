import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Configure, Highlight, connectHits, connectHitInsights } from 'react-instantsearch-dom';

import CustomCurrentRefinements from '../../Refinements';

function Hit({ hit }) {
  // @TODO: refactor to make generic
  return (
    <div className="bg-white rounded-lg overflow-hidden sm:mx-2 sm:my-2 shadow-lg hover:cursor-pointer sm:w-25">
      <div className="relative pb-48">
        <LazyLoadImage
          className="absolute h-48 w-full object-cover transition duration-200 ease-in-out opacity-100 hover:opacity-50"
          src={hit.url}
        />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <span className="inline-block bg-cyanvivid-200 text-cyanvivid-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            Nueva
          </span>
          <span className="inline-block  text-coldgray-400 text-xs px-2 font-semibold tracking-wide">
            {hit.province}
          </span>
        </div>
        <div className="text-gray-600 text-xs mt-1 uppercase font-semibold tracking-wide">
          {hit.beds} camas &bull; {hit.baths} baños
        </div>
        <div className="mt-1 font-semibold text-lg leading-tight truncate">
          <Highlight attribute="description" hit={hit} tagName="mark" />
        </div>

        <div className="flex mt-4 items-baseline justify-between">
          <div className="">
            <span className="text-teal-600 font-semibold">{hit.stars}/5 estrellas</span>
            <span className="text-gray-600 text-sm"> (78)</span>
          </div>
          <div className="mt-1 ">
            <span className="text-indigo-600 font-bold"> ${hit.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const HitWithInsights = connectHitInsights(window.aa)(Hit);

const Hits = ({ hits }) => (
  <>
    {/* <CustomCurrentRefinements /> */}
    <div className="grid gap-5 border-gray-200 rounded-lg mx-auto sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl xl:grid-cols-4 ">
      {hits.map((hit) => (
        <HitWithInsights key={hit.objectID} hit={hit} />
      ))}
    </div>
  </>
);

const CustomHits = connectHits(Hits);
export default CustomHits;
