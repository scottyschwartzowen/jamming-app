import React, { useState, useCallback, useEffect } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(
    (props) => {
      props.onSearch(term);
    },
    [props.onSearch, term]
  );

  return (
    <div className="SearchBar">
      <input placeholder="search song titles..." onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
