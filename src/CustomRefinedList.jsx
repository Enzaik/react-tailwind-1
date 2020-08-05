import React from 'react';
import GenericInput from './components/GenericInput/GenericInput';
import RangeInput from './RangeInput';
import ProvinceInput from './ProvinceInput';

import './App.css';

const RefinementList = ({ config }) => {
  return (
    <div className="sm:flex md:block">
      {config.items.map((item) => {
        return item.filtrable ? (
          <GenericInput key={item.id} attribute={item.id} label={item.label} showLabel={item.showLabel} />
        ) : null;
      })}
      <RangeInput attribute="price" />
      <ProvinceInput attribute="province" searchable />
    </div>
  );
};

export default RefinementList;
