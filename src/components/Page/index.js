import React from 'react';
import { Route } from 'react-router-dom';
/*
https://reacttraining.com/react-router/web/api/Switch
- Routes sans Switch : il peut y avoir plusieurs routes qui correspondent à l'URL
- Routes englobées dans un Switch : on s'arrête à la première route qui correspond
à l'URL (nécessaire en particulier quand on veut une page d'erreur 404)
*/

import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';
import Header from 'src/components/Page/Header';

import './page.scss';

const Page = () => (
  <div className="page">
    <Header />
    <div className="page-content">
      <Route
        path="/"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/recipe/:slug"
      >
        <Recipe />
      </Route>
    </div>
  </div>
);

export default Page;
