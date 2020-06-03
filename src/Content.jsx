import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: 80,
      beds: 3,
      baths: 2,
      stars: 4,
      description: 'Casa en las afueras de la ciudad',
    },
    {
      url:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: 70,
      beds: 3,
      baths: 2,
      stars: 4,
      description: 'Casa en el centro de la ciudad',
    },
    {
      url:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: 90,
      beds: 3,
      baths: 2,
      stars: 4,
      description: 'Casa con piscina',
    },
    {
      url:
        'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: 80,
      beds: 3,
      baths: 2,
      stars: 4,
      description: 'Pequeña casa confortable',
    },

    {
      url:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: 60,
      beds: 3,
      baths: 2,
      stars: 4,
      description: 'Casa en las afueras de la ciudad',
    },
    {
      url:
        'https://images.unsplash.com/photo-1560026301-88340cf16be7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      price: 70,
      beds: 3,
      baths: 2,
      stars: 4,
      description: 'Casa en las afueras de la ciudad',
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
      {/* <Router> */}

      <Route exact path="/">
        <ListItems list={list} />
      </Route>
      <Route exact path="/houses">
        <ListItems list={list} />
      </Route>
      <Route exact path="/pricing">
        <Pricing />
      </Route>

      {/* </Router> */}
    </div>
  );
}

export default Content;
