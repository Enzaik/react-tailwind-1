import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import RangeInput from './RangeInput';

import './App.css';

const RefinementList = ({ items, isFromSearch, refine, searchForItems, createURL, attribute }) => {
  console.log(items);

  return (
    <div className="p-4">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.label} className="flex items-center w-32">
              <div class="absolute flex items-center">
                <input
                  onClick={(event) => {
                    refine(item.value);
                  }}
                  id={item.label}
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
              </div>
              <label for={item.label} class={`${item.isRefined ? 'font-bold' : 'font-medium'} text-gray-600 ml-5`}>
                {isFromSearch ? <Highlight attribute="label" hit={item} /> : item.label} {attribute}
                <span
                  class={`${
                    item.isRefined ? 'font-bold' : 'font-semibold'
                  } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs leading-4 bg-teal-100 text-teal-800`}
                >
                  {item.count}
                </span>
                {/* change  */}
              </label>
            </li>
          );
        })}
      </ul>
      <RangeInput attribute="price" />
    </div>
  );
};

const CustomRefinementList = connectRefinementList(RefinementList);
export default CustomRefinementList;
