import React from 'react';
import PropTypes from 'prop-types';
/* Link permet d'avoir un lien tout simple, NavLink est une version plus évoluée
de Link qui permet d'avoir une mise en forme spéciale (CSS) sur le lien qui
correspond à l'URL dans la barre d'adresse */
import { Link } from 'react-router-dom';
import { Star } from 'react-feather';
import classNames from 'classnames';

import { slugifyTitle } from '../../utils/selectors';

const RecipeSmall = ({
  thumbnail,
  title,
  difficulty,
  isFavorite,
}) => {
  const slug = slugifyTitle(title);

  const className = classNames('recipe-small', {
    'recipe-small--is-favorite' : isFavorite,
  });

  return (
    <article className={className}>
      {isFavorite && (
        <div className="icon">
          <Star className="icon--star" />
        </div>
      )}
      <img
        alt=""
        src={thumbnail}
      />
      <div className="recipe-small-content">
        <h3>{title}</h3>
        <p>Difficulté: {difficulty}</p>
        <Link
          to={`/recipe/${slug}`}
        >
          Voir la recette
        </Link>
      </div>
    </article>
  );
};

RecipeSmall.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
};

RecipeSmall.defaultProps = {
  isFavorite: true,
};

export default RecipeSmall;
