import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAV:
      const filteredCharacters = state.myFavorites.filter(
        (favorite) => favorite.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    default:
      return {
        ...state,
      };
  }
}
