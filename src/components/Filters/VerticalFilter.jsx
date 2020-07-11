import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import RangeInput from '../../RangeInput';

const RefinementList = ({ items, isFromSearch, refine, searchForItems, createURL, attribute }) => {
  console.log(items);

  return (
    <div className="fixed h-screen hidden md:block pt-1/12 top-0 z-20 bg-gray-800">
      <div className="text-gray-100 px-10">Camas</div>
      <ul className="border-b-2 border-gray-900 mt-2 pb-2 px-10">
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
      {/* </div> */}
    </div>
  );
};

const VerticalFilter = connectRefinementList(RefinementList);
export default VerticalFilter;
