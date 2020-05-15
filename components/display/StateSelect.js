import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { RestarauntContext } from '../data/RestarauntData';
import StateSelectOptions from '../../resources/StateSelectOptions';

const StateSelect = (props) => {
    const { stateFilters, setStateFilters } = useContext(RestarauntContext);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        setSelectedOptions(selected);
        setStateFilters(selected ? selected.map((s) => s.value) : []);
    };

    return (
        <Select
            name='state'
            placeholder='State'
            className='filter-bar__state-select'
            value={selectedOptions}
            onChange={handleChange}
            options={StateSelectOptions}
            isMulti={true}
        />
    );
};

export default StateSelect;
