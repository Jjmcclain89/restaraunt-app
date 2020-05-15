import React from 'react';
import Header from './Header';
import SortBar from './FilterBar';
import ResultsTable from './ResultsTable';

const RestarauntFinder = (props) => {
    return (
        <div className='app__content'>
            <Header />
            <SortBar />
            <ResultsTable />
        </div>
    );
};

export default RestarauntFinder;
