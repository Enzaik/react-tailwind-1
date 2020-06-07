import React from 'react';
import { connectRange } from 'react-instantsearch-dom';

const CustomRangeInput = ({ currentRefinement, min, max, precision, refine }) => (
  <form>
    <input
      type="number"
      min={min}
      max={max}
      step={1 / Math.pow(10, precision)}
      value={currentRefinement.min || ''}
      onChange={(event) =>
        refine({
          ...currentRefinement,
          min: event.currentTarget.value,
        })
      }
    />
    {' - '}
    <input
      type="number"
      min={min}
      max={max}
      step={1 / Math.pow(10, precision)}
      value={currentRefinement.max || ''}
      onChange={(event) =>
        refine({
          ...currentRefinement,
          max: event.currentTarget.value,
        })
      }
    />
  </form>
);

const RangeInput = connectRange(CustomRangeInput);
export default RangeInput;
