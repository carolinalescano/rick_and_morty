import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  myFavoritesCopy: [],
  characters: [],
  allCharacters: [],
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        // myFavorites
        allCharacters: [...state.allCharacters, payload],
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
    case FILTER:
      let allCharacters = [...state.allCharacters];
      const filteredCards = allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredCards,
      };
    case ORDER:
      allCharacters = [...state.allCharacters];
      if (payload === "A") {
        allCharacters.sort((a, b) => a.id.localeCompare(b.id));
      } else if (payload === "D") {
        allCharacters.sort((a, b) => b.id.localeCompare(a.id));
      }

      return {
        ...state,
        myFavorites: [allCharacters],
      };
    default:
      return {
        ...state,
      };
  }
}
