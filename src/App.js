import React from 'react';

import Navbar from './Navbar';
import Pricing from './Pricing';
import Landing from './Landing';
import Landing2 from './Landing2';
import Header from './Header';
import Dropdown from './Dropdown';
import Popup from './Popup';
import Product from './Product';
import Test from './Test';

import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
      <Navbar />
      {/* <ProgressBar /> */}
      {/* <Header /> */}
      {/* <Dropdown /> */}
      <Product />
      {/* <Pricing /> */}
      {/* <Landing2 /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
