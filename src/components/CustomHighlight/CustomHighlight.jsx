import React from 'react';
import {
  //  connectAutoComplete, connectHitInsights, Highlight,
  connectHighlight,
} from 'react-instantsearch-dom';

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
          <strong className="font-extrabold" key={index}>
            {part.value}
          </strong>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </span>
  );
};

const CustomHighlight = connectHighlight(MyHighlight);

export default CustomHighlight;
