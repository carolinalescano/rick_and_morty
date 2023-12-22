import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

import axios from "axios";

const addFav = (character) => {
  // const endpoint = "http://localhost:3001/rickandmorty/fav";
  // return (dispatch) => {
  //   axios.post(endpoint, character).then(({ data }) => {
  //     return dispatch({
  //       type: ADD_FAV,
  //       payload: data,
  //     });
  //   });
  // };
  return {
    type: ADD_FAV,
    payload: character,
  };
};

const removeFav = (id) => {
  // const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     return dispatch({
  //       type: REMOVE_FAV,
  //       payload: data,
  //     });
  //   });
  // };
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (selectOrder) => {
  type: ORDER;
  payload: selectOrder;
};

export { removeFav, addFav, orderCards, filterCards };
