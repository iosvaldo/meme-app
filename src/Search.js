import React from "react";
// import Button from 'react-bootstrap/Button'

function Search({handleSearch}) {

  return (
    <div className="home-container d-grid gap-2" variant="light">
      {/* <label variant="light" htmlFor="search">
        Search Memes:
      </label> */}
      <input
        variant="light"
        className="search-input"
        type="text"
        id="search"
        placeholder="Search Memes"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
