import { CHANGE_FIELD, SAVE_USER } from 'src/actions/user';

const initialState = {
  /** contenu du champ pour saisir l'e-mail */
  email: '',
  /** contenu du champ pour saisir le mot de passe */
  password: '',
  /** informations de l'utilisateur */
  userData: null,
  /** indique si l'utilisateur est loggué */
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const target = action.identifier;
      return {
        ...state,
        // // soit, si action.identifier vaut email
        // email: action.newValue,
        // // soit, si action.identifier vaut password
        // password: action.newValue,

        // en une seule ligne => on récupère la valeur de target
        // http://eloquentcode.com/computed-property-names-in-javascript
        [target]: action.newValue,

        // on peut faire sans variable intermédiaire
        // [action.identifier]: action.newValue,
      };
    }

    case SAVE_USER:
      return {
        ...state,
        userData: action.data,
        isLogged: action.isLogged,
        email: '',
        password: '',
      };

    default: return state;
  }
};

export default user;
