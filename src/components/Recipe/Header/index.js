// == imports npm
import React from 'react';
// librairie pour valider le type de chaque prop
import PropTypes from 'prop-types';

// == imports locaux
import './header.scss';

// == composant
// fléchée non raccourcie
// const Header = () => {
//   return (
//     <div>
//       Le header
//     </div>
//   );
// };

// on peut simplifier la fléchée
const Header = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="header">
    <img
      className="header-image"
      alt=""
      src={thumbnail}
    />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-info">{author} - {difficulty}</p>
    </div>
  </header>
);

// je déclare le type de chaque prop pour pouvoir valider => un warning sera affiché
// dans la console si la valeur de la prop n'a pas le type indiqué
// https://fr.reactjs.org/docs/typechecking-with-proptypes.html
Header.propTypes = {
  // nom de la prop: type attendu
  // isRequired indique que la prop est obligatoire
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

/*
objet props :
{
  title: "LE TITRE",
  author: "John"
}
Pour utiliser la valeur de la prop title (destructuring)
=> const Header = ({ title }) => (
<h1 className="header-title">{title}</h1>
*/


// export du composant
export default Header;
