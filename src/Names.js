import React from 'react';
import BabyNamesData from "./data/babyNamesData.json";


const Names = () => {
// const [namesData, setNamesData] = useState(BabyNamesData);

 {BabyNamesData.sort((a, b) => a.name > b.name ? 1 : -1)}
               
    return (
        <div className="container">
           <ul className="list-container">
              
                {BabyNamesData.map((item, index)=> (
                    <li key={index} className="names"><button className={item.sex}>{item.name}</button></li>
                )              
                )}
        
            </ul>   
        </div>
    )
}

export default Names;
