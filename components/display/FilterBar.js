import React, { useState, useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import Select from './SelectInput';
import StateSelectOptions from '../../resources/StateSelectOptions';
import SearchBar from './SearchBar'

const FilterBar = (props) => {
    const {
        searchText,
        setSearchText,
        stateFilters,
        setStateFilters,
        genreFilters,
        setGenreFilters,
        allGenres,
        resetFilters,
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

    const handleSearchChange = (e) => setSearchText(e.target.value);

    const StateSelectProps = {
        size: '',
        name: 'StateSelect',
        placeholder: 'State',
        onChange: handleStateSelectChange,
        options: StateSelectOptions,
        selected: selectedStates,
        isMulti: true,
    };

    const GenreSelectProps = {
        size: 'large',
        name: 'GenreSelect',
        placeholder: 'What Type of Food Sounds Good?',
        onChange: handleGenreSelectChange,
        options: GenreSelectOptions,
        selected: selectedGenres,
        isMulti: true,
    };

    const SearchBarProps = {
        onChange: handleSearchChange,
        value: searchText,
    };

    return (
        <div className='filter-bar'>
            <SearchBar {...SearchBarProps} />
            <Select {...StateSelectProps} />
            <Select {...GenreSelectProps} />
            <button onClick={resetFilters}>Reset Filters</button>
        </div>
    );
};

export default FilterBar;
