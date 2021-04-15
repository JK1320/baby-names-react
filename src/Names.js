import React from 'react';



const Names = ({BabyNamesData, searchInput}) => {

  BabyNamesData.sort((a, b) => (a.name > b.name ? 1 : -1));

  //  const filteredNames = BabyNamesData.filter((item) => {
  //   item.name.toLowerCase().includes(searchInput.toLowerCase());
  // });

  return (
    <div className="container">
      <ul className="list-container">
        {BabyNamesData.filter((item) => {
          if (searchInput === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => (
          <li key={item.id} className="names">
            <button className={item.sex}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Names;
