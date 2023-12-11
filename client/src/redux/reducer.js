import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  myFavoritesCopy: [],
  characters: [],
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        myFavoritesCopy: [...state.myFavoritesCopy, payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(payload)
        ),
        myFavoritesCopy: state.myFavoritesCopy.filter(
          (fav) => fav.id !== Number(payload)
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
