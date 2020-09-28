// la fonction createStore qui crée le store ne peut recevoir qu'un seul reducer
// en argument, donc si on a plusieurs reducers on doit les combiner, et fournir
// le reducer combiné au store
import { combineReducers } from 'redux';

// on importe les reducers à combiner
import recipesReducer from './recipes';
import userReducer from './user';

const rootReducer = combineReducers({
  // étiquette (nom du "tiroir" dans le state) : nomDuReducer
  recipes: recipesReducer,
  user: userReducer,
});

// pour accéder au state défini dans le reducer 'recipesReducer', il faudra que
// je descende dans le tiroir 'recipes' => state.recipes.xxxxx

export default rootReducer;
