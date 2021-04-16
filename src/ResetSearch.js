import React from 'react';

const ResetSearch = ({searchInput, setSearchInput}) => {
    if (!searchInput){
        return null;
    }
        return <button className="reset-search" onClick={() => setSearchInput("")}>Reset Search</button>
    
}

export default ResetSearch;
