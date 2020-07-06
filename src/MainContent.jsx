import React, { useState, useEffect, useRef } from 'react';

import CustomHits from './CustomHits';

function MainContent() {
  return (
    <main className="max-w-7xl pt-content mx-auto  py-6 sm:px-6 lg:px-8">
      {/* <!-- Replace with your content --> */}
      <div className="border-gray-200 rounded-lg ">
        <div className="grid gap-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:max-w-none">
          <CustomHits />
        </div>
      </div>
      {/* <!-- /End replace --> */}
    </main>
  );
}

export default MainContent;
