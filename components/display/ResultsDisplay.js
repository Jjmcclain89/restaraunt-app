import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import Result from './Result';

const ResultsDisplay = (props) => {
    const { restaraunts, setRestaraunts } = useContext(RestarauntContext);

    return (
        <div className="results-display">
            {restaraunts.map((restaraunt) => (
                <Result key={restaraunt.id} restaraunt={restaraunt} />
            ))}
        </div>
    );
};

export default ResultsDisplay;
