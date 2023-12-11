import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./../Cards/Cards.module.css";

export default function Favorites(props) {
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
  return <div className={style.cardsContainer}>{showFavorites}</div>;
}
