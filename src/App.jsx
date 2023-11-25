import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import Form from "./components/Form/Form";
import Favorites from "./components/favorites/favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const EMAIL = "careules@gmail.com";
  const PASSWORD = "Password2023";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  function onSearch(id) {
    const repeatedCharacter = characters.find(
      (character) => character.id === parseInt(id)
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
    navigate("/home");
  }

  const onClose = (id) => {
    const filtrados = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filtrados);
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} characters={characters} logout={logout}></Nav>
      ) : null}

      <Routes>
        {/* <Route
          exact
          path="/"
          element={<Cards characters={characters} onClose={onClose}></Cards>}
        ></Route> */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose}></Cards>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route
          path="/favorites"
          element={<Favorites onClose={onClose} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Form login={login}></Form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
