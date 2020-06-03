import React from 'react';

import ListItemHorizontal from './ListItemHorizontal';
import ListItemVertical from './ListItemVertical';
import ListItems from './ListItems';
import Pricing from './Pricing';
import Landing from './Landing';
import Landing2 from './Landing2';
import Header from './Header';
import Dropdown from './Dropdown';
import Popup from './Popup';
import Product from './Product';
import Test from './Test';

function Content() {
  const list = [
    {
      url:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=',
    },
    {
      url:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      url:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      url:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=',
    },

    {
      url:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      url:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  ];
  return (
    <div class="max-w-screen mx-auto px-4 py-16 ">
      {/* <ProgressBar /> */}
      {/* <Header /> */}
      {/* <Dropdown /> */}
      {/* <Product /> */}
      {/* <Pricing /> */}
      {/* <Landing2 /> */}
      {/* <Test /> */}
      <ListItems list={list} />
    </div>
  );
}

export default Content;
