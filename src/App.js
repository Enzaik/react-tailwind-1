import React, { lazy, Suspense, useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InstantSearch, browseObjects } from 'react-instantsearch-dom';

const ResultsPage = lazy(() => import('./pages/Results/ResultsPage'));
const Search = lazy(() => import('./Search'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const Landing = lazy(() => import('./pages/Landing/LandingPage'));
const CustomBreadcrumb = lazy(() => import('./BreadCrumbs'));
const NewAd = lazy(() => import('./components/NewAd/NewAdHouse'));
const NewAdCar = lazy(() => import('./components/NewAd/NewAdCar'));

function App() {
  const searchClient = algoliasearch('I48K3G5GE1', '8832d7240edde67aee54ae7de5276e0d');
  const housesIndex = searchClient.initIndex('houses');
  const carsIndex = searchClient.initIndex('cars');

  const [isOpen, setIsOpen] = useState(false);

  const filterHandler = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // const onHeartClick = (hit) => {
  //   console.log(hit);
  // };

  const componentsConfig = [
    {
      component: 'Pricing',
      path: '/pricing',
      exact: true,
    },
    {
      component: 'ResultsPage',
      path: '/houses',
      config: {
        items: [
          { id: 'beds', label: 'Camas', filtrable: true, showLabel: true },
          { id: 'baths', label: 'Baños', filtrable: true, showLabel: true },
        ],
        label: 'Casas',
        category: 'houses',
        index: housesIndex,
        defaultSearch: 'instant_search',
        indexesConfig: [
          { value: 'instant_search_price_asc', label: 'Precio asc.' },
          { value: 'instant_search_price_desc', label: 'Precio desc.' },
        ],
      },
      exact: true,
    },
    {
      component: 'ResultsPage',
      path: '/cars',
      config: {
        items: [{ id: 'year', label: 'Año', filtrable: true, showLabel: false }],
        label: 'Autos',
        category: 'cars',
        index: carsIndex,
        defaultSearch: 'instant_search_cars',
        indexesConfig: [
          { value: 'instant_search_cars_price_asc', label: 'Precio asc.' },
          { value: 'instant_search_cars_price_desc', label: 'Precio desc.' },
        ],
      },
      exact: true,
    },
    {
      component: 'ResultsPage ',
      path: '/',
      exact: false,
    },
    {
      component: 'Search ',
      path: '/search',
      exact: false,
    },
    {
      component: 'CustomBreadcrumb ',
      path: '/landing',
      exact: false,
    },
    {
      component: 'NewAd ',
      path: '/newad',
      exact: false,
    },
    {
      component: 'NewAdCar ',
      path: '/newad-car',
      exact: false,
    },
  ];

  const renderComponent = (componentConfig) => {
    switch (componentConfig.path) {
      case '/pricing':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <Pricing />
          </Route>
        );
      case '/houses':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <InstantSearch indexName={componentConfig.config.category} searchClient={searchClient}>
              <ResultsPage
                indexName={componentConfig.config.category}
                isOpen={isOpen}
                filterHandler={filterHandler}
                shouldShowBar={true}
                config={componentConfig.config}
              />
            </InstantSearch>
          </Route>
        );
      case '/cars':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <InstantSearch indexName={componentConfig.config.category} searchClient={searchClient}>
              <ResultsPage
                indexName={componentConfig.config.category}
                isOpen={isOpen}
                filterHandler={filterHandler}
                shouldShowBar={true}
                config={componentConfig.config}
              />
            </InstantSearch>
          </Route>
        );
      case '/search':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <InstantSearch indexName="houses" searchClient={searchClient}>
              <Search />
            </InstantSearch>
          </Route>
        );
      case '/newad':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <InstantSearch indexName="houses" searchClient={searchClient}>
              <NewAd shouldShowBar={false} housesIndex={housesIndex} />
            </InstantSearch>
          </Route>
        );
      case '/newad-car':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <InstantSearch indexName="cars" searchClient={searchClient}>
              <NewAdCar shouldShowBar={false} carsIndex={carsIndex} />
            </InstantSearch>
          </Route>
        );
      case '/landing':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <InstantSearch indexName="houses" searchClient={searchClient}>
              <CustomBreadcrumb
                attributes={['categories.lvl0', 'categories.lvl1', 'categories.lvl2', 'categories.lvl3']}
              />
            </InstantSearch>
          </Route>
        );
      default:
        return (
          <Route exact={true} path="/">
            <InstantSearch indexName="searches" searchClient={searchClient}>
              <Landing />
            </InstantSearch>
          </Route>
        );
    }
  };

  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex flex-col h-screen justify-center">
            <div className="flex justify-center">Cargando...</div>
          </div>
        }
      >
        <div className="bg-coldgray-100 text-gray-900 font-inter antialiased">
          {componentsConfig.map((componentConfig) => renderComponent(componentConfig))}
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
