import React, {useRef, useEffect} from 'react';

const Search = ({searchInput, setSearchInput}) => {
const inputRef = useRef();

useEffect(() => {
    inputRef.current.focus()
}, [])

  return (
    <div className="input-container">
      <input
        type="text"
        value={searchInput}
        placeholder="Search a Name"
        ref={inputRef}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
