import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {
  const { id, name, image, status, species, gender, origin } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, image, status, species, gender, origin }));
    }
  };

  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={style.cardContainer}>
      <div>
        <button
          onClick={() => {
            props.onClose(id);
          }}
        >
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          X
        </button>
      </div>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h3>{status}</h3>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <h3>{origin.name}</h3>
      </Link>
    </div>
  );
}
