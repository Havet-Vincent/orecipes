// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getRecipeBySlug } from 'src/utils/selectors';

// == Import
import Header from 'src/components/Recipe/Header';
import Ingredients from 'src/components/Recipe/Ingredients';
import Steps from 'src/components/Recipe/Steps';

import './recipe.scss';

/* Etapes :
- intégration statique (sans props, en utilisant des données en dur)
  - découpage de l'interface en composants => tracer des rectangles
  - écriture des composants sous forme de div dans App/index.js
  - écriture de chaque composant (nouveau dossier, par exemple
    src/components/Header, avec fichiers index.js et header.scss)

- dynamisation (utilisation des données, appel à une API, ...)
*/

// == Composant
// nouvelle responsabilité de Recipe : sélectionner la bonne recette en fonction
// de l'URL et l'afficher
const Recipe = ({ recipes }) => {
  // le hook useParams permet de récupérer la partie variable de l'URL (":truc" qui
  // est dans le path de la Route)
  const { slug } = useParams();
  // console.log('slug: ' + slug);

  const recipe = getRecipeBySlug(recipes, slug);

  return (
    <div className="recipe">
      <Header
        title={recipe.title}
        author={recipe.author}
        difficulty={recipe.difficulty}
        thumbnail={recipe.thumbnail}
      />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.instructions} />
    </div>
  );
};

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
