import React from 'react';
import LazyLoad from 'react-lazyload';
import { Configure, Highlight, connectHits, connectHitInsights } from 'react-instantsearch-dom';

function Hit({ hit }) {
  //@TODO: refactor to make generic
  return (
    <div className="bg-white rounded-lg overflow-hidden sm:mx-2 sm:my-2 shadow-xl hover:cursor-pointer sm:w-25">
      <div className="relative pb-48">
        <LazyLoad>
          <img className="absolute h-48 w-full object-cover" src={hit.url} />
        </LazyLoad>
      </div>
      <div className="p-4">
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            Nueva
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {hit.beds} camas &bull; {hit.baths} baños
          </div>
        </div>
        <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
          <Highlight attribute="description" hit={hit} tagName="mark" />
        </h4>
        <div className="mt-1">
          ${hit.price}
          <span className="text-gray-600 text-sm"> / wk</span>
        </div>
        <div className="mt-4">
          <span className="text-teal-600 font-semibold">{hit.stars}/5 estrellas</span>
          <span className="text-gray-600 text-sm"> (basado en 78 comentarios)</span>
        </div>
      </div>
    </div>
  );
}

const HitWithInsights = connectHitInsights(window.aa)(Hit);

const Hits = ({ hits }) => (
  <div className="grid gap-2 border-gray-200 rounded-lg mx-auto sm:grid-cols-2 md:grid-cols-3 lg:max-w-none">
    {hits.map((hit) => (
      <HitWithInsights key={hit.objectID} hit={hit} />
    ))}
  </div>
);

const CustomHits = connectHits(Hits);
export default CustomHits;