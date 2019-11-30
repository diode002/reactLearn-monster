import React from "react";
import "./searchBox.styles.css";
const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeHolder}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
