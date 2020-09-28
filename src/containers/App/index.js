import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchRecipes } from 'src/actions/recipes';
import { checkLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  // on a combiné plusieurs reducers : on doit ouvrir le tiroir 'recipes' pour
  // pouvoir accéder à loading
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchRecipes: () => {
    // console.log('chargement des recettes');
    dispatch(fetchRecipes());
  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
