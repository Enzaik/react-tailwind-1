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
    <form className="flex mt-2 ">
      <input
        className=""
        type="number"
        placeholder={min}
        min={min}
        max={max}
        step={1 / Math.pow(10, precision)}
        value={refinement.min}
        onChange={(event) => {
          setRefinement({
            ...refinement,
            min: event.currentTarget.value,
          });
        }}
      />
      {' - '}
      <input
        className=""
        type="number"
        placeholder={max}
        min={min}
        max={max}
        step={1 / Math.pow(10, precision)}
        value={refinement.max}
        onChange={(event) =>
          setRefinement({
            ...refinement,
            max: event.currentTarget.value,
          })
        }
      />
      <button
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        onClick={handleRefinement}
      >
        OK
      </button>
    </form>
  );
};

const RangeInput = connectRange(CustomRangeInput);
export default RangeInput;
