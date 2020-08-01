import React, { lazy, Suspense } from 'react';
import algoliasearch from 'algoliasearch/lite';

import {
  // BrowserRouter as Router, Switch,
  Route,
  // Link
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { InstantSearch } from 'react-instantsearch-dom';

// import ListItemHorizontal from './ListItemHorizontal';
const Houses = lazy(() => import('./pages/Houses/HousesPage'));
const Search = lazy(() => import('./Search'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const Landing = lazy(() => import('./pages/Landing/LandingPage'));
const CustomBreadcrumb = lazy(() => import('./BreadCrumbs'));
// import Header from './Header';
// import Dropdown from './components/Dropdown/Dropdown';
// import Popup from './Popup';
// import Product from './Product';
// import Test from './Test';

function App() {
  const searchClient = algoliasearch('I48K3G5GE1', '8832d7240edde67aee54ae7de5276e0d');
  const componentsConfig = [
    {
      component: 'Pricing',
      path: '/pricing',
      exact: true,
    },
    {
      component: 'Houses',
      path: '/houses',
      exact: true,
    },
    {
      component: 'Houses ',
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
            <InstantSearch indexName="houses" searchClient={searchClient}>
              <Houses />
            </InstantSearch>
          </Route>
        );
      case '/search':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <Navbar />
            <InstantSearch indexName="houses" searchClient={searchClient}>
              <Search />
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-coldgray-100 text-gray-900 font-inter antialiased">
        {componentsConfig.map((componentConfig) => renderComponent(componentConfig))}
      </div>
    </Suspense>
  );
}

export default App;
