import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import CustomRefinementList from '../../CustomRefinedList';

const Filters = ({ config }) => {
  return (
    <div className="fixed h-screen hidden width-left-panel md:block top-0 z-20 bg-gray-900">
      <div className="w-full h-full bg-gray-800 ">
        <div className="flex justify-center py-3 h-16 border-b border-gray-900">
          <Link to={'/'}>
            <img className="block lg:hidden h-10 w-auto" src={logo} alt="Workflow logo" />
          </Link>
        </div>
        <CustomRefinementList config={config} searchable />
      </div>
    </div>
  );
};

export default Filters;
