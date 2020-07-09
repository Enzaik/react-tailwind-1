import React, { useState, useEffect, useRef } from 'react';

import CustomHits from '../CustomHits/CustomHits';
import VerticalFilter from '../VerticalFilter/VerticalFilter';

function Houses() {
  return (
    <main className="max-w-7xl pt-content mx-auto  py-6 sm:px-6 lg:px-8">
      <VerticalFilter attribute="beds" searchable />
      <CustomHits />
    </main>
  );
}

export default Houses;
