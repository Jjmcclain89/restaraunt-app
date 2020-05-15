import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { RestarauntContext } from '../data/RestarauntData';
import StateSelectOptions from '../../resources/StateSelectOptions';

const StateSelect = (props) => {
    const { stateFilters, setStateFilters } = useContext(RestarauntContext);

    const selectedOptions = stateFilters.map((filter) => {
        return { value: filter, label: filter };
    });

    const handleChange = (selected) => {
        setStateFilters(selected ? selected.map((s) => s.value) : []);
    };

    return (
        <Select
            instanceId="1"
            name='state'
            placeholder='State'
            className='filter-bar__select'
            value={selectedOptions}
            onChange={handleChange}
            options={StateSelectOptions}
            isMulti={true}
        />
    );
};

export default StateSelect;
