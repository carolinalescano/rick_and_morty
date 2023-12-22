import SearchBar from "./SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Nav = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const addRandom = () => {
    const random = Math.round(Math.random() * (826 - 1) + 1);
    props.onSearch(random);
  };

  return (
    <div>
      {currentPath !== "/" && currentPath !== "/signup" ? (
        <div className={styles.navContainer}>
          <ul>
            <li>
              <SearchBar
                characters={props.characters}
                onSearch={props.onSearch}
              ></SearchBar>
            </li>
            <li>
              <button onClick={addRandom}>Add Random</button>
            </li>
            <div>
              <li>
                <NavLink to={"/about"}>
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/home"}>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/favorites"}>
                  <span>Favorites</span>
                </NavLink>
              </li>
            </div>

            <li>
              <button onClick={props.logout}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.navContainer}>
          <div>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
export default Nav;
