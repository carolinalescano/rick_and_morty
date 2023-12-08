import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    default:
      return {
        ...state,
      };
  }
}
