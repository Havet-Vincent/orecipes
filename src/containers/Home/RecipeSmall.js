import { connect } from 'react-redux';

import RecipeSmall from 'src/components/Home/RecipeSmall';

// deuxième paramètre facultatif ownProps : si on veut accéder aux props du container
// qui sont fournies par son parent
const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  // ici le composant container reçoit une prop id, il va l'utiliser pour construire
  // la valeur à injecter dans la prop isFavorite

  return ({
    // nom de la prop à remplir: donnée à récupérer dans le state
    // ownProps.id => est-ce que c'est dans state.user.userData.favorites ?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    isFavorite: state.user.isLogged && state.user.userData.favorites.includes(ownProps.id),
  });
};

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeSmall);
