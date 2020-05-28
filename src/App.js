import React from 'react';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Dropdown from './Dropdown';
import Popup from './Popup';
import Product from './Product';

import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
      <Navbar />
      {/* <Dropdown /> */}
      <Product />
      {/* <Pricing /> */}
    </div>
  );
}

export default App;
