import SearchBar from "./SearchBar/SearchBar";

const Nav = (props) => {
  return (
    <div>
      <SearchBar
        characters={props.characters}
        onSearch={props.onSearch}
      ></SearchBar>
    </div>
  );
};
export default Nav;
