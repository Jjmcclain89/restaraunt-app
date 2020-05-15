import React, { useContext } from 'react';
import { RestarantContext, RestaurantContext } from '../data/RestaurantData';

const NoResults = (props) => {
    const { resetFilters } = useContext(RestaurantContext);
    return (
        <div className='no-results'>
            <span>There are no restaurants to display</span>
            <span className='reset' onClick={resetFilters}>
                Reset Filters?
            </span>
        </div>
    );
};

export default NoResults;
