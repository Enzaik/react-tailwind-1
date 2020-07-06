import React from 'react';

function ListItem({ url }) {
  return (
    <div className="relative flex max-w-5xl bg-white my-4 border-b border-gray-200 overflow-hidden rounded-lg shadow-md sm:shadow-xl mx-auto hover:cursor-pointer">
      <img className=" inline-block h-32 w-32 flex-shrink-0" src={url} />
      <div className="flex space-y-1 mx-4 justify-between items-baseline w-full">
        <div className="font-semibold text-gray-900 truncate">
          Casa en las afueras de la ciudad Casa en las afueras de la ciudad Casa en las afueras de la ciudad
        </div>
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-teal-100 text-teal-800 absolute right 20">
          Badge
        </span>
        <div className="font-bold text-blue-800 absolute right 0">$80</div>
      </div>
    </div>
  );
}

export default ListItem;
