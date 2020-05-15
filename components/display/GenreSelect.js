import React, { useGenre, useContext } from 'react';
import Select from 'react-select';
import { RestarauntContext } from '../data/RestarauntData';

const GenreSelect = (props) => {
    const { selectType } = props;
    
    const { genreFilters, setGenreFilters, allGenres } = useContext(
        RestarauntContext
    );

    const selectedOptions = genreFilters.map((filter) => {
        return { value: filter, label: filter };
    });

    const handleChange = (selected) => {
        setGenreFilters(selected ? selected.map((s) => s.value) : []);
    };

    const GenreSelectOptions = allGenres.map((genre) => {
        return { value: genre, label: genre };
    });

    return (
        <Select
            instanceId='1'
            name='genre'
            placeholder='Genre'
            className={`filter-bar__select__${selectType}`}
            value={selectedOptions}
            onChange={handleChange}
            options={GenreSelectOptions}
            isMulti={true}
        />
    );
};

export default GenreSelect;
