import React, { useState, useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import Select from './SelectInput';
import StateSelectOptions from '../../resources/StateSelectOptions';

const FilterBar = (props) => {
    const {
        searchText,
        setSearchText,
        stateFilters,
        setStateFilters,
        genreFilters,
        setGenreFilters,
        allGenres,
        resetFilters
    } = useContext(RestarauntContext);

    const selectedStates = stateFilters.map((filter) => {
        return { value: filter, label: filter };
    });

    const selectedGenres = genreFilters.map((filter) => {
        return { value: filter, label: filter };
    });

    const handleGenreSelectChange = (selected) => {
        setGenreFilters(selected ? selected.map((s) => s.value) : []);
    };

    const handleStateSelectChange = (selected) => {
        setStateFilters(selected ? selected.map((s) => s.value) : []);
    };

    const GenreSelectOptions = allGenres.map((genre) => {
        return { value: genre, label: genre };
    });

    const StateSelectProps = {
        size: '',
        name: 'StateSelect',
        placeholder: 'State',
        onChange: handleStateSelectChange,
        options: StateSelectOptions,
        selectedOptions: selectedStates,
        isMulti: true,
    };

    const GenreSelectProps = {
        size: 'large',
        name: 'GenreSelect',
        placeholder: 'What Type of Food Sound Good?',
        onChange: handleGenreSelectChange,
        options: GenreSelectOptions,
        selectedOptions: selectedGenres,
        isMulti: true,
    };

    return (
        <div className='filter-bar'>
            <input
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button>&#x1F50D;</button>
            <Select {...StateSelectProps} />
            <Select {...GenreSelectProps} />
            <button onClick={resetFilters}>Reset Filters</button>
        </div>
    );
};

export default FilterBar;
