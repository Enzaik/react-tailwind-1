import React from 'react';

function ListItem({ url }) {
  return (
    <div class="bg-white border rounded-lg overflow-hidden max-w-md max-h-md mx-auto my-4 shadow-xl">
      <img className="h-56 w-full object-cover" src={url} />
      <div class="p-6">
        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800">
          New
        </span>
        <div class="text-gray-600 text-xs uppercase font-semibold tracking-wide">beds &bull; baths</div>
        <h4 class="font-semibold text-lg leading-tight truncate">Nommal</h4>
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
