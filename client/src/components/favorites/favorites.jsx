import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./../Cards/Cards.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

export default function Favorites(props) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const showFavorites = myFavorites.map((myFavorite, index) => {
    return (
      <div key={index}>
        <Card
          id={myFavorite.id}
          name={myFavorite.name}
          status={myFavorite.status}
          species={myFavorite.species}
          gender={myFavorite.gender}
          origin={myFavorite.origin?.name}
          image={myFavorite.image}
          isFavoriteView={true}
        ></Card>
      </div>
    );
  });

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
  return (
    <div className={style.cardsContainer}>
      <select name="" id="" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="" id="" onChange={handleFilter}>
        <option value="" onFocus={true}>
          Selecionar una opción
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      {showFavorites}
    </div>
  );
}
