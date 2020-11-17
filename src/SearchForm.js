import React from "react";

const SearchForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <div className="flex-container">
      <img
        className="logo"
        src="https://www.clipartmax.com/png/full/64-647127_smiley-lol-emoticon-laughter-clip-art-laughing-emoji.png"
        alt="Laughing emoji"
      />
      <form onSubmit={onSubmit}>
        <input
          teype="text"
          placeholder="Search for a joke..."
          onChange={(event) => props.onSearchvalueChange(event.target.value)}
        />
        <div>
          <button disabled={props.isSearching}>Search</button>

          <button onClick={props.onSingleSearch} disabled={props.isSearching}>
            Im feeling funny!
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchForm;
