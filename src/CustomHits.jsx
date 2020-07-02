import React from 'react';
import LazyLoad from 'react-lazyload';
import { Configure, Highlight, connectHits, connectHitInsights } from 'react-instantsearch-dom';

function Hit({ hit }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden sm:mx-2 shadow-xl hover:cursor-pointer sm:w-25">
      <div class="relative pb-48">
        <LazyLoad>
          <img className="absolute h-48 w-full object-cover" src={hit.url} />
        </LazyLoad>
      </div>
      <div class="p-4">
        <div className="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            Nueva
          </span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {hit.beds} camas &bull; {hit.baths} baños
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
          <Highlight attribute="description" hit={hit} tagName="mark" />
        </h4>
        <div class="mt-1">
          ${hit.price}
          <span class="text-gray-600 text-sm"> / wk</span>
        </div>
        <div class="mt-4">
          <span class="text-teal-600 font-semibold">{hit.stars}/5 estrellas</span>
          <span class="text-gray-600 text-sm"> (basado en 78 comentarios)</span>
        </div>
      </div>
    </div>
  );
}

const HitWithInsights = connectHitInsights(window.aa)(Hit);

const Hits = ({ hits }) => (
  <>
    {hits.map((hit) => (
      <HitWithInsights key={hit.objectID} hit={hit} />
    ))}
  </>
);

const CustomHits = connectHits(Hits);
export default CustomHits;
