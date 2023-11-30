import SearchBar from "./SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  const addRandom = () => {
    const random = Math.round(Math.random() * (826 - 1) + 1);
    props.onSearch(random);
  };
  return (
    <div className={styles.navContainer}>
      <SearchBar
        characters={props.characters}
        onSearch={props.onSearch}
      ></SearchBar>
      <button onClick={addRandom}>Add Random</button>
      <NavLink to={"/about"}>
        <span>About</span>
      </NavLink>
      <NavLink to={"/home"}>
        <span>Home</span>
      </NavLink>
      <NavLink to={"/favorites"}>
        <span>Favorites</span>
      </NavLink>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};
export default Nav;
