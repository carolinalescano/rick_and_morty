import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Card(props) {
  const { id, name, image, status, species, gender, origin } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {};
  return (
    <div className={style.cardContainer}>
      <div>
        <button
          onClick={() => {
            props.onClose(id);
          }}
        >
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
