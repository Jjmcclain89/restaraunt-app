import React, { useContext } from 'react';
import { RestarantContext, RestarauntContext } from '../data/RestarauntData';

const NoResults = (props) => {
    const { resetFilters } = useContext(RestarauntContext);
    return (
        <div className='no-results'>
            <span>There are no restaraunts to display</span>
            <span className='reset' onClick={resetFilters}>
                Reset Filters?
            </span>
        </div>
    );
};

export default NoResults;
