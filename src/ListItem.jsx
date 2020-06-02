import React from 'react';

function ListItem({ url }) {
  return (
    <div class="flex bg-white my-4 border-b border-gray-200 overflow-hidden sm:rounded-lg shadow-sm sm:shadow-xl">
      <img className="inline-block h-24 w-24" src={url} />
      <div className="flex space-y-1 mx-2 justify-between items-baseline w-full">
        <div className="font-semibold ">Casa en las afueras de la ciudad</div>
        <div className="font-bold text-blue-600">$80</div>
      </div>
    </div>
  );
}

export default ListItem;
