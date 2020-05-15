import React from 'react';
import Header from './Header';
import FilterBar from './FilterBar';
import ResultsTable from './ResultsTable';

const RestaurantFinder = (props) => {
    return (
        <div className='app__content'>
            <Header />
            <FilterBar />
            <ResultsTable />
        </div>
    );
};

export default RestaurantFinder;
