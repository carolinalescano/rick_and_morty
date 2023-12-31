import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancer = compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);
export default store;
