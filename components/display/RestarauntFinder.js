import React from 'react';
import Header from './Header';
import SortBar from './SortBar';
import ResultsDisplay from './ResultsDisplay';
import '../styles/RestarauntFinder.scss'

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
