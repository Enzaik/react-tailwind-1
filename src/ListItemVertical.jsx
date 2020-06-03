import React from 'react';

function ListItem({ url, price, beds, baths, stars, description }) {
  return (
    <div class="bg-white  rounded-lg overflow-hidden max-w-4xl max-h-xl mx-auto my-4 shadow-xl hover:cursor-pointer">
      <div class="relative pb-2/3">
        <img className="absolute h-full w-full object-cover" src={url} />
      </div>
      <div class="p-6">
        <div className="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
            New
          </span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {beds} camas &bull; {baths} baños
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{description}</h4>
        <div class="mt-1">
          ${price}
          <span class="text-gray-600 text-sm"> / wk</span>
        </div>
        <div class="mt-4">
          <span class="text-teal-600 font-semibold">{stars}/5 stars</span>
          <span class="text-gray-600 text-sm"> (basado en 78 comentarios)</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
