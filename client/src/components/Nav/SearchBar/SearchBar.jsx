import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleRepeat = (id) => {
    const repeatedCharacters = props.characters.map(
      (character) => character.id === id
    );

    console.log(repeatedCharacters);
    console.log(props.characters);
    // if (!repeatedCharacters) {
    //   props.onSearch(id);
    //   setId("");
    // }
  };

  return (
    <div className={styles.searchBarContainer}>
      <input onChange={handleChange} type="search" value={id} />
      <button
        onClick={() => {
          props.onSearch(id);
          setId("");
        }}
        // onClick={() => {
        //   handleRepeat(id);
        // }}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
