import React from 'react';
import SelectInput from './SelectInput';

const PageSelector = (props) => {
    const {
        pageNumber,
        setPageNumber,
        totalPageCount,
        setResultsPerPage,
        resultsPerPage,
    } = props;

    const handleNumberClick = (e) => {
        setPageNumber(e.target.textContent);
    };

    const handleLeftClick = (e) => {
        if (!(pageNumber == 1)) setPageNumber(pageNumber - 1);
    };

    const handleRightClick = (e) => {
        if (!(pageNumber == totalPageCount)) setPageNumber(pageNumber + 1);
    };

    const buildPageSelections = () => {
        const elements = [];
        for (let i = 1; i <= totalPageCount; i++) {
            elements.push(
                <span
                    className={pageNumber == i ? 'selected' : ''}
                    onClick={handleNumberClick}
                >
                    {i}
                </span>
            );
        }
        return elements;
    };
    const options = [
        { value: 5, label: 5 },
        { value: 10, label: 10 },
        { value: 20, label: 20 },
        { value: 50, label: 50 },
    ];

    const handleRPPChange = (selected) => {
        setResultsPerPage(selected.value);
    };

    const selectProps = {
        size: 'small',
        name: 'resultsPerPage',
        placeholder: resultsPerPage,
        onChange: handleRPPChange,
        options,
        selected: resultsPerPage,
        isMulti: false,
    };

    return (
        <div className='page-selector'>
            <div className='rpp-adjust'>
                <label>Results/Page: </label>
                <SelectInput {...selectProps} />
            </div>
            <span className='arrow' onClick={handleLeftClick}>
                ⬅
            </span>
            {buildPageSelections()}
            <span className='arrow' onClick={handleRightClick}>
                ➡
            </span>
        </div>
    );
};

export default PageSelector;
