import React from 'react';
import FavoriteNameList from "./FavoriteNameList";


const Favorites = ({ favorite, setFavorite, BabyNamesData }) => {
  const favoriteNames = BabyNamesData.filter((item) =>
    favorite.includes(item.id)
  );

  function removeFromFavorite(id) {
    setFavorite(favorite.filter((i) => i !== id));
  }

  return (
    <div>
      <FavoriteNameList
        favoriteNameList={favoriteNames}
        onItemClick={removeFromFavorite}
      />
    </div>
  );
};

export default Favorites;
