import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import RangeInput from '../../RangeInput';

const RefinementList = ({ items, isFromSearch, refine, searchForItems, createURL, attribute }) => {
  console.log(items);

  return (
    <div className=" hidden md:block">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.label}>
              <div className="flex justify-between w-32">
                <div className=" flex items-center">
                  <input
                    onClick={(event) => {
                      refine(item.value);
                    }}
                    id={item.label}
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </div>
                <label for={item.label} className={`${item.isRefined ? 'font-bold' : 'font-medium'} text-gray-600`}>
                  {isFromSearch ? <Highlight attribute="label" hit={item} /> : item.label} {attribute}
                </label>
                <span
                  className={`${
                    item.isRefined ? 'font-bold' : 'font-semibold'
                  } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs leading-4 bg-teal-200 text-teal-700`}
                >
                  {item.count}
                </span>
                {/* change  */}
              </div>
            </li>
          );
        })}
      </ul>
      <RangeInput attribute="price" />
    </div>
  );
};

const VerticalFilter = connectRefinementList(RefinementList);
export default VerticalFilter;
