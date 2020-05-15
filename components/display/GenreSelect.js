import React, { useGenre, useContext } from 'react';
import Select from 'react-select';
import { RestarauntContext } from '../data/RestarauntData';
// import GenreSelectOptions from '../../resources/GenreSelectOptions';

const GenreSelect = (props) => {
    const { genreFilters, setGenreFilters } = useContext(RestarauntContext);

    const selectedOptions = genreFilters.map((filter) => {
        return { value: filter, label: filter };
    });

    const handleChange = (selected) => {
        setGenreFilters(selected ? selected.map((s) => s.value) : []);
    };

    return (
        <Select
            instanceId="1"
            name='genre'
            placeholder='Genre'
            className='filter-bar__select'
            value={selectedOptions}
            onChange={handleChange}
            // options={}
            isMulti={true}
        />
    );
};

export default GenreSelect;
