import React from 'react';
import FavoriteNameList from "./FavoriteNameList";


const Favorites = ({ favorite, setFavorite, BabyNamesData }) => {
  const favoriteNames = BabyNamesData.filter((item) =>
    favorite.includes(item.id)
  );

  function removeFromFavorite(id) {
    setFavorite(favorite.filter((i) => i !== id));
  }

  const hasNames = favoriteNames.length > 0;

  return (
    <div className="container">
      <h3>
        {hasNames ? "Favourites:" : "Click on a name to add to favourites"}
      </h3>
      {hasNames && (
        <>
          <FavoriteNameList
            favoriteNameList={favoriteNames}
            onItemClick={removeFromFavorite}
          />
          <hr />
        </>
      )}
    </div>
  );
};

export default Favorites;
