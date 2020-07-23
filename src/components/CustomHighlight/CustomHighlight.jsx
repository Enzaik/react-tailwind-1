import React from 'react';
import { connectAutoComplete, connectHitInsights, Highlight, connectHighlight } from 'react-instantsearch-dom';

const MyHighlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark className="font-extrabold bg-white" key={index}>
            {part.value}
          </mark>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </span>
  );
};

const CustomHighlight = connectHighlight(MyHighlight);

export default CustomHighlight;
