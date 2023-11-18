import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.cardContainer}>
      <button
        onClick={() => {
          props.onClose(props.id);
        }}
      >
        X
      </button>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <h3>{props.status}</h3>
      <h3>{props.species}</h3>
      <h3>{props.gender}</h3>
      <h3>{props.name.origin}</h3>
    </div>
  );
}
