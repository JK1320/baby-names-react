import React, {useState} from 'react';
import './App.css';
//data
import BabyNamesData from "./data/babyNamesData.json";
//components
import Favorites from './Favorites';
import Names from "./Names";
import Search from "./Search";
import ResetSearch from "./ResetSearch";



function App() {
const [searchInput, setSearchInput] = useState("");
const [favorite, setFavorite] = useState([]);
const [gender, setGender] = useState("")

return (
  <div className="App">
    <h1>Search for a Baby Name</h1>
    <div>
      <Search gender={gender} setGender={setGender} searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
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
      gender={gender}
    />
    <ResetSearch searchInput={searchInput} setSearchInput={setSearchInput} />
  </div>
);
}

export default App;
