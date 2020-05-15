import React, { useState, useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import StateSelect from './StateSelect';
import GenreSelect from './GenreSelect';

const FilterBar = (props) => {
    const { searchText, setSearchText } = useContext(RestarauntContext);
    
    return (
        <div className='filter-bar'>
            <input
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button>&#x1F50D;</button>
            
            <StateSelect />
            <GenreSelect />
        </div>
    );
};

export default FilterBar;
