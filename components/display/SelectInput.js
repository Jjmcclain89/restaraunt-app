import React, { useState, useContext } from 'react';
import ReactSelect from 'react-select';

const SelectInput = (props) => {
    const {size, name, placeholder, onChange, options, selectedOptions, isMulti} = props;
    
    return (
        <ReactSelect
            instanceId='1'
            name={name}
            placeholder={placeholder}
            className={`select${size && `__${size}`}`}
            value={selectedOptions}
            onChange={onChange}
            options={options}
            isMulti={isMulti}
        />
    );
};

export default SelectInput;
