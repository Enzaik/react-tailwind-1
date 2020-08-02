import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';

function GenericInput({ items, refine, attribute, label, isFromSearch }) {
  return (
    <div className="px-0 p-6 border-b border-gray-900 sm:p-0 sm:px-2 sm:border-b-0 md:border-b md:border-gray-900 md:p-6 ">
      <label className="text-gray-500 font-semibold">{label}</label>
      <ul className="text-sm h-full justify-evenly ">
        {items.map((item) => {
          return (
            <li className="mt-1" key={item.label}>
              <div className="flex justify-between">
                <div className=" flex items-center">
                  <input
                    onClick={() => {
                      refine(item.value);
                    }}
                    id={item.label}
                    type="checkbox"
                    className="form-checkbox bg-gray-900 border-none h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={item.isRefined}
                  />
                  <label
                    for={item.label}
                    className={`${item.isRefined ? 'font-bold text-gray-100' : 'font-semibold text-gray-400'}  ml-2`}
                  >
                    {isFromSearch ? <Highlight attribute="label" hit={item} /> : item.label}{' '}
                    <span className="lowercase">{label}</span>
                  </label>
                </div>
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
    </div>
  );
}

const ConnectedGenericInput = connectRefinementList(GenericInput);
export default ConnectedGenericInput;
