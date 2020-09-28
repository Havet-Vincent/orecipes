// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';

import './app.scss';

// == Composant
const App = ({ fetchRecipes, checkLogged, loading }) => {
  useEffect(() => {
    fetchRecipes();
    checkLogged();
  }, []);

  console.log(loading);

  return (
    <div className="app">
      {!loading && (
        <>
          <Nav />
          <Page />
        </>
      )}
      {loading && <div className="loader">Chargement en cours...</div>}
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  checkLogged: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
