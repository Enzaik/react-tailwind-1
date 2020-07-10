import React from 'react';
import algoliasearch from 'algoliasearch/lite';

import {
  // BrowserRouter as Router, Switch,
  Route,
  // Link
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { InstantSearch } from 'react-instantsearch-dom';

// import ListItemHorizontal from './ListItemHorizontal';
import Houses from './pages/Houses/HousesPage';
import Search from './Search';
import Pricing from './components/Pricing/Pricing';
import Landing from './pages/Landing/LandingPage';
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
      component: 'Landing ',
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
            <Landing />
          </Route>
        );
      default:
        return (
          <Route exact={true} path="/">
            <InstantSearch indexName="houses" searchClient={searchClient}>
              <Landing />
            </InstantSearch>
          </Route>
        );
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 font-inter antialiased">
      {componentsConfig.map((componentConfig) => renderComponent(componentConfig))}
    </div>
  );
}

export default App;
