import React, { useState, useContext } from 'react';
import ReactSelect from 'react-select';

const SelectInput = (props) => {
    const {size, name, placeholder, onChange, options, selected, isMulti} = props;
    
    return (
        <ReactSelect
            instanceId='1'
            name={name}
            placeholder={placeholder}
            className={`select${size && `__${size}`}`}
            value={selected}
            onChange={onChange}
            options={options}
            isMulti={isMulti}
        />
    );
};

export default SelectInput;
