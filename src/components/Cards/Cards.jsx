import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  const showCharacters = characters.map((character, index) => {
    return (
      <div key={index}>
        <Card
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        ></Card>
      </div>
    );
  });
  return <div className={style.cardsContainer}>{showCharacters}</div>;
}
