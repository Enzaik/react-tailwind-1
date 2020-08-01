import React from 'react';

function Product() {
  return (
    <div className="relative flex max-w-5xl bg-white my-4 border-b border-gray-200 overflow-hidden rounded-lg shadow-md sm:shadow-xl mx-auto hover:cursor-pointer">
      <img className=" inline-block h-32 w-32 flex-shrink-0 object-cover" src={hit.url} />
      <div className="w-full">
        <div className="flex space-y-1 mx-4 justify-between items-baseline ">
          <div className="inline-flex items-baseline">
            <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800 right 20">
              Badge
            </div>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {hit.beds} camas &bull; {hit.baths} baños
            </div>
          </div>
          <div className="font-bold text-blue-800  right 0"> ${hit.price}</div>
        </div>
        <div className="font-semibold text-gray-900 p-4">
          <Highlight attribute="description" hit={hit} tagName="mark" />
        </div>
      </div>
    </div>
  );
}

export default Product;
