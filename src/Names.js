import React from 'react';
import FavoriteNameList from "./FavoriteNameList";


const Names = ({BabyNamesData, searchInput, favorite, setFavorite}) => {

  BabyNamesData.sort((a, b) => (a.name > b.name ? 1 : -1));

  const filteredNames = BabyNamesData.filter((item) => {
    if (searchInput === "") {
      return item;
    } else if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return item;
    }
  }).filter((item) => !favorite.includes(item.id));

  function addToFavorite(id) {
    setFavorite([...favorite, id]);
  }

  return (
    <div className="container">
      <FavoriteNameList
        favoriteNameList={filteredNames}
        onItemClick={addToFavorite}
      />
    </div>
  );
}

export default Names;
