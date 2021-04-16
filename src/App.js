import React, {useState} from 'react';
import './App.css';
import BabyNamesData from "./data/babyNamesData.json";
import Favorites from './Favorites';
import Names from "./Names";
import Search from "./Search";
import ResetSearch from "./ResetSearch";


function App() {
const [searchInput, setSearchInput] = useState("");
const [favorite, setFavorite] = useState([]);

return (
  <div className="App">
    <h1>Search for a Baby Name</h1>
    <Search searchInput={searchInput} setSearchInput={setSearchInput} />
    <Favorites
      BabyNamesData={BabyNamesData}
      favorite={favorite}
      setFavorite={setFavorite}
    />
    <Names
      BabyNamesData={BabyNamesData}
      searchInput={searchInput}
      favorite={favorite}
      setFavorite={setFavorite}
    />
    <ResetSearch searchInput={searchInput} setSearchInput={setSearchInput} />
  </div>
);
}

export default App;
