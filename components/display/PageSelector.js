import React from 'react';

const PageSelector = (props) => {
    const {
        pageNumber,
        setPageNumber,
        totalPageCount,
        setResultsPerPage,
    } = props;

    const handleClick = (e) => {
        console.log(e.target.textContent);
        setPageNumber(e.target.textContent);
    };

    const buildPageSelections = () => {
        const elements = [];
        for (let i = 1; i <= totalPageCount; i++) {
            elements.push(
                <span
                    className={pageNumber == i ? 'selected' : ''}
                    onClick={handleClick}
                >
                    {i}
                </span>
            );
        }
        return elements;
    };

    return <div className='page-selector'>{buildPageSelections()}</div>;
};

export default PageSelector;
