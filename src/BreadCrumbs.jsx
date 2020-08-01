import React from 'react';
import { connectBreadcrumb } from 'react-instantsearch-dom';

const Breadcrumb = ({ items, refine, createURL }) =>
  Boolean(items.length) && (
    <ul>
      <li>
        <a
          href={createURL()}
          onClick={(event) => {
            event.preventDefault();
            refine();
          }}
        >
          Home
        </a>
      </li>
      {items.map((item) => (
        <li key={item.value}>
          <a
            href={createURL(item.value)}
            onClick={(event) => {
              event.preventDefault();
              refine(item.value);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

const CustomBreadcrumb = connectBreadcrumb(Breadcrumb);

export default CustomBreadcrumb;
