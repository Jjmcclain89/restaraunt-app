import React from 'react';
import Header from './Header';
import SortBar from './SortBar';
import ResultsDisplay from './ResultsDisplay';

const RestarauntFinder = (props) => {
    return (
        <div className='app__content'>
            <Header />
            <SortBar />
            <ResultsDisplay />
        </div>
    );
};

export default RestarauntFinder;
