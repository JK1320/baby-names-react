import React, {useRef, useEffect} from 'react';

const Search = ({searchInput, setSearchInput, gender, setGender}) => {
const inputRef = useRef();

function clickHandler(item){
  setGender(item)
}

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
       <button onClick={() => clickHandler("f")} className="gender-f-btn">G<i className='fas fa-baby girl' /></button>
       <button onClick={() => clickHandler("m")} className="gender-m-btn">B<i className='fas fa-baby boy' /></button>
       <button onClick={() => clickHandler("")} className="reset-search">Mixed</button>
    </div>
  );
};

export default Search;
