import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";
function NavBar({ search, inputRef }) {
  return (
    <div className=" h-15 grid grid-cols-2 grid-rows-1  p-5  ">
      <div className="flex  items-center ">
        <img className="md:w-16 xxs:w-10 " src={logo} alt="logo" />
        <h1 className="md:text-3xl xxs:text-lg italic ">Weather</h1>
      </div>
      <div>
        <SearchBar search={search} inputRef={inputRef}></SearchBar>
      </div>
    </div>
  );
}

export default NavBar;
