import React from 'react';

import Navbar from './Navbar';
import Content from './Content';

import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900  antialiased">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
