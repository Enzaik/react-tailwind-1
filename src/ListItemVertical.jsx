import React from 'react';

function ListItem({ url }) {
  return (
    <div class="bg-white border rounded-lg overflow-hidden max-w-4xl max-h-xl mx-auto my-4 shadow-xl">
      <div class="relative pb-2/3">
        <img className="absolute h-full w-full object-cover" src={url} />
      </div>
      <div class="p-6">
        <div className="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">beds &bull; baths</div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">Casa en las afueras de la ciudad</h4>
        <div class="mt-1">
          $80
          <span class="text-gray-600 text-sm"> / wk</span>
        </div>
        <div class="mt-4">
          <span class="text-teal-600 font-semibold">4/5 stars</span>
          <span class="text-gray-600 text-sm"> (based on 78 reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
