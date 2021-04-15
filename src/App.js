import React, {useState} from 'react';
import './App.css';
import BabyNamesData from "./data/babyNamesData.json";
import Favorites from './Favorites';
import Names from "./Names";
import Search from "./Search";


function App() {
const [searchInput, setSearchInput] = useState("");
// const [favorite, setFavorite] = useState([]);

  return (
    <div className="App">
      <h1>Search for a Baby Name</h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Favorites />
      <Names BabyNamesData={BabyNamesData} searchInput={searchInput} />  
    </div>
  );
}

export default App;
