import React from 'react';


const FavoriteNameList = ({favoriteNameList, onItemClick}) => {
    
    
    return (
      <ul className="list-container">
        {favoriteNameList.map((item) => (
          <li key={item.id} className="names">
            <button onClick={() => onItemClick(item.id)} className={item.sex}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    );
}

export default FavoriteNameList;
