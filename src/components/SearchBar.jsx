

function SearchBar({ search, inputRef }) {
  return (
    <div className="SearchBar flex md:h-12 items-center justify-center gap-1 w-full md:w-auto">
      {/* search section */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="placeholder:pl-2 text-gray-600 md:h-full rounded-3xl border border-gray-300 md:px-10 xxs:px-4 w-full md:w-auto"
      />
      {/* search button */}
      <img
      //retrieves the current text from the input field because inputRef is pointing to that field to update the state.
        onClick={() => search(inputRef.current.value)}
        src="./src/assets/search__icon.png"
        alt="SearchIcon"
        className="md:h-12 md:w-12 cursor-pointer bg-white rounded-full hover:scale-105 xxs:h-8 xxs:w-8"
      />
    </div>
  );
}

export default SearchBar;
