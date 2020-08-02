import React from 'react';

import { connectCurrentRefinements } from 'react-instantsearch-dom';

const CurrentRefinements = ({ items, refine, createURL }) => {
  const newItems = [];

  const labels = [];
  for (let index = 0; index < items.length; index++) {
    if (!labels.find((label) => label === items[index].label)) {
      labels.push(items[index].label);
      newItems.push(items[index]);
    }
  }

  let counter = 0;
  let filterCounter = 0;
  return (
    <div className="flex">
      {newItems.map((item) => {
        filterCounter++;
        return (
          <>
            {`${filterCounter < 2 ? '' : '•'} `}
            <div className="mx-1" key={item.label}>
              {item.items ? (
                <>
                  {item.label}
                  {item.items.map((nested) => {
                    counter++;
                    return (
                      <a
                        href={createURL(nested.value)}
                        onClick={(event) => {
                          event.preventDefault();
                          refine(nested.value);
                        }}
                      >
                        {`${counter < 2 ? '' : ', '}${nested.label}`}
                      </a>
                    );
                  })}{' '}
                </>
              ) : (
                <a
                  href={createURL(item.value)}
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                >
                  {`${item.label} `}
                </a>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);
export default CustomCurrentRefinements;
