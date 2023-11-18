import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const repeatedCharacter = characters.find(
      (character) => character.id !== id
    );

    if (repeatedCharacter) {
      alert("Este personaje ya existe");
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  }

  const onClose = (id) => {
    const filtrados = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filtrados);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} characters={characters}></Nav>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
