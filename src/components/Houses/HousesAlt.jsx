import React from 'react';
import LazyLoad from 'react-lazyload';
import { Configure, Highlight, connectHits, connectHitInsights } from 'react-instantsearch-dom';

function Hit({ hit }) {
  //@TODO: refactor to make generic
  return (
    <div className="">
      <div className="relative pb-48">
        <LazyLoad>
          <img className="absolute h-48 w-full object-cover rounded-lg shadow-md" src={hit.url} />
        </LazyLoad>
      </div>

      <div className="relative px-4 -mt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
              Nueva
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {hit.beds} camas &bull; {hit.baths} baños
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
            <Highlight attribute="description" hit={hit} tagName="mark" />
          </h4>
          <div className="mt-1">
            ${hit.price}
            <span className="text-gray-600 text-sm"> / wk</span>
          </div>
          {/* <div className="mt-4">
            <span className="text-teal-600 font-semibold">{hit.stars}/5 estrellas</span>
            <span className="text-gray-600 text-sm"> (78 comentarios)</span>
          </div> */}
          <div className="mt-2 flex items-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
            <span className="ml-2 text-gray-600 text-sm">3 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
// function Hit({ hit }) {
//   return (
//     <div className="flex justify-center">
//       <div className="max-w-7xl min-w-0">
//         <div className="relative pb-5/6">
//           <LazyLoad>
//             <img src={hit.url} className="absolute h-48 w-full object-cover rounded-lg shadow-md" />
//           </LazyLoad>
//         </div>
//         <div className="relative px-4 -mt-16">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex items-baseline">
//               <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
//                 Nueva
//               </span>
//               <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
//                 {hit.beds} camas &bull; {hit.baths} baños
//               </div>
//             </div>
//             <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
//               <Highlight attribute="description" hit={hit} tagName="mark" />
//             </h4>
//             <div className="mt-1">
//               ${hit.price}
//               <span className="text-gray-600 text-sm"> / wk</span>
//             </div>
//             <div className="mt-2 flex items-center">
//               <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
//                 <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
//               </svg>
//               <span className="ml-2 text-gray-600 text-sm">3 reviews</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const HitWithInsights = connectHitInsights(window.aa)(Hit);

const Hits = ({ hits }) => (
  <div className="grid gap-2 border-gray-200 rounded-lg mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-none">
    {hits.map((hit) => (
      <HitWithInsights key={hit.objectID} hit={hit} />
    ))}
  </div>
);

const CustomHits = connectHits(Hits);
export default CustomHits;
