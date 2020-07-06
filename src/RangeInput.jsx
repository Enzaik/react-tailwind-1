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
    <form className="flex flex-initial items-end mt-2 sm:ml-5 ">
      <input
        className="form-input block bg-gray-900 text-white border-none pl-10 h-1/4 mr-2 sm:text-sm"
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
      {' - '}
      <input
        className="form-input block bg-gray-900 text-white border-none pl-10 h-1/4 mr-2 sm:text-sm"
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
      <button
        className="inline-flex items-center ml-2 px-2.5 py-1.5 h-1/4 border border-transparent text-xs leading-4 font-medium rounded-lg text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
        onClick={handleRefinement}
      >
        OK
      </button>
    </form>
  );
};

const RangeInput = connectRange(CustomRangeInput);
export default RangeInput;
