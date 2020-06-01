import React from 'react';
import './App.css';

function Pricing() {
  return (
    <div className="font-hindsiliguri relative bg-gray-800">
      <div className="lg:absolute lg:inset-y-0 lg:right-0">
        <img
          className="h-64 w-full object-cover"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
      {/* Dark layer */}
      <div className="absolute inset-0 opacity-50 bg-black h-64 w-full object-cover"></div>
      {/* Search block */}
      <div className="absolute inset-0 h-64 w-full object-cover flex justify-center py-16">
        <div className="block md:flex ">
          <div className="text-white">Search</div>
          <div class=" relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span class="text-gray-500 sm:text-sm sm:leading-5">$</span>
            </div>
            <input id="price" class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5" placeholder="0.00" />
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
            <div class="sm:mt-0 sm:col-span-2">
              <div class="max-w-xs rounded-md shadow-sm">
                <select
                  id="country"
                  class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
