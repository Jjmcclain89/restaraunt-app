import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { RestarauntContext } from '../data/RestarauntData';

const StateSelect = (props) => {
    const { stateFilters, setStateFilters } = useContext(RestarauntContext);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = [
        { value: 'IA', label: 'IA' },
        { value: 'WI', label: 'WI' },
        { value: 'CO', label: 'CO' },
    ];

    const handleChange = (selected) => {
        setSelectedOptions(selected);
        setStateFilters(selected ? selected.map((s) => s.value) : null);
    };

    return (
        <Select
            name='state'
            placeholder='State'
            className='filter-bar__state-select'
            value={selectedOptions}
            onChange={handleChange}
            options={options}
            isMulti={true}
        />
    );
};

export default StateSelect;
