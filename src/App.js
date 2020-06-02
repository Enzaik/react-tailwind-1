import React from 'react';

import Navbar from './Navbar';
import Pricing from './Pricing';
import ListItem from './ListItem';
import Landing from './Landing';
import Landing2 from './Landing2';
import Header from './Header';
import Dropdown from './Dropdown';
import Popup from './Popup';
import Product from './Product';
import Test from './Test';

import './App.css';

function App() {
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
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },

    {
      url:
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      url:
        'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=',
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
      <Navbar />
      <div class="container max-w-8xl mx-auto my-2 sm:px-6 lg:px-8">
        {/* <ProgressBar /> */}
        {/* <Header /> */}
        {/* <Dropdown /> */}
        {/* <Product /> */}
        {/* <Pricing /> */}
        {/* <Landing2 /> */}
        {/* <Test /> */}
        {list.map(({ url }) => (
          <ListItem url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
