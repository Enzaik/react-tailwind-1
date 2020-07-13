import React, { useState, useEffect } from 'react';
import { connectRange } from 'react-instantsearch-dom';

const CustomRangeInput = ({ currentRefinement, min, max, precision, refine }) => {
  const [refinement, setRefinement] = useState({
    min: currentRefinement.min || min,
    max: currentRefinement.max || max,
  });

  useEffect(() => {
    setRefinement({ min: currentRefinement.min, max: currentRefinement.max });
  }, []);

  useEffect(() => {
    setRefinement({ min: currentRefinement.min, max: currentRefinement.max });
  }, [min, max]);

  const handleRefinement = (e) => {
    e.preventDefault();
    const minimal = refinement.min >= min ? refinement.min : min;
    const maximal = refinement.max <= max ? refinement.max : max;
    refine({
      min: minimal,
      max: maximal,
    });
    setRefinement({
      min: minimal,
      max: maximal,
    });
  };

  return (
    <form className=" mt-2 sm:mt-0 sm:px-10 md:px-0 md:mt-0 ">
      <div className=" border-b border-gray-900 pb-6 sm:p-0 md:p-6 sm:border-b-0 md:border-b md:border-gray-900">
        <div className="text-gray-100">Precios</div>
        <div className="flex">
          <div className="w-1/2 pr-1">
            <div className="text-gray-300 text-sm">Desde</div>
            <input
              className="bg-gray-700 block border-none form-input sm:leading-5 sm:text-sm text-white w-full "
              type="number"
              placeholder={min}
              min={min}
              max={max}
              step={1 / Math.pow(10, precision)}
              // value={refinement.min}
              onChange={(event) => {
                setRefinement({
                  ...refinement,
                  min: event.currentTarget.value,
                });
              }}
            />
          </div>
          <div className="w-1/2 pl-1">
            <div className="text-gray-300  mt-0  text-sm">Hasta</div>
            <input
              className="bg-gray-700 block border-none form-input sm:leading-5 sm:text-sm text-white w-full "
              type="number"
              placeholder={max}
              min={min}
              max={max}
              step={1 / Math.pow(10, precision)}
              // value={refinement.max}
              onChange={(event) =>
                setRefinement({
                  ...refinement,
                  max: event.currentTarget.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="md:px-6 sm:mt-6">
        <button
          className="active:bg-indigo-700 bg-indigo-600 border border-transparent duration-150 ease-in-out focus:border-indigo-700 focus:outline-none focus:shadow-outline-indigo h-1/4 hover:bg-indigo-500 items-center leading-4  px-2.5 py-1.5 rounded-lg text-center text-white transition w-full"
          onClick={handleRefinement}
        >
          Actualizar
        </button>
      </div>
    </form>
  );
};

const RangeInput = connectRange(CustomRangeInput);
export default RangeInput;
