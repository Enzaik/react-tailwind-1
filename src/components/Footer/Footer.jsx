import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">
        <h3 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
          Trusted by over 26,000 forward-thinking companies
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <LazyLoadImage className="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <LazyLoadImage className="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <LazyLoadImage className="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <LazyLoadImage
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <LazyLoadImage
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
