import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ListItemHorizontal from './ListItemHorizontal';
import ListItemVertical from './ListItemVertical';
import ListItems from './ListItems';
import Search from './Search';
import Pricing from './Pricing';
import Landing from './Landing';
import Landing2 from './Landing2';
import Header from './Header';
import Dropdown from './Dropdown';
import Popup from './Popup';
import Product from './Product';
import Test from './Test';

function Content() {
  const componentsConfig = [
    {
      component: 'Pricing',
      path: '/pricing',
      exact: true,
    },
    {
      component: 'ListItems',
      path: '/houses',
      exact: true,
    },
    {
      component: 'ListItems ',
      path: '/',
      exact: false,
    },
    {
      component: 'Search ',
      path: '/search',
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
            <ListItems />
          </Route>
        );
      case '/search':
        return (
          <Route exact={componentConfig.exact} path={componentConfig.path}>
            <Search />
          </Route>
        );
      default:
        return (
          <Route exact={true} path="/">
            <ListItems />
          </Route>
        );
    }
  };

  return (
    <div class="max-w-screen mx-auto  py-16 ">
      {componentsConfig.map((componentConfig) => renderComponent(componentConfig))}
    </div>
  );
}

export default Content;
