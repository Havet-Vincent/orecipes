import axios from 'axios';
import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveUser,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      // console.log(store.getState());
      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
          // j'ouvre le tiroir 'user' du state (utilisation de combineReducers)
          email: store.getState().user.email,
          password: store.getState().user.password,

          // je pourrais écrire aussi :
          // const { email, password } = store.getState().user;
        },
        // j'autorise la gestion des cookies
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(saveUser(response.data.logged, response.data.info));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    /*
    authentification persistante :
    - la première fois qu'on se connecte au serveur avec des identifiants valides,
    il nous fournit un cookie qui contient un identifiant de session ("tu es
    l'utilisateur numéro 124")
    - si on demande au serveur si on est déjà authentifié, on lui envoie le cookie
    (withCredentials avec Axios), il regarde s'il a une session numéro 124, si oui
    on est authentifié
    - si on utilise "logout", on envoie aussi le cookie : le serveur détruit la
    session numéro 124
    - après ça, si on demande au serveur si on est déjà authentifié en envoyant le
    cookie, il va dire que non (il n'a pas de session numéro 124)
    */

    case CHECK_LOGGED:
      axios({
        method: 'post',
        url: 'http://localhost:3001/isLogged',
        // j'autorise la gestion des cookies
        withCredentials: true,
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUser(response.data.logged, response.data.info));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    case LOG_OUT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/logout',
        // j'autorise la gestion des cookies
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.logged, response.data.info));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      // on passe l'action à son voisin (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
