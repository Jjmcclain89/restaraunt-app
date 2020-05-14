import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import Result from './Result';

const ResultsDisplay = (props) => {
    const { restaraunts, setRestaraunts } = useContext(RestarauntContext);

    return (
        <div>
            {restaraunts.map((restaraunt) => (
                <Result restaraunt={restaraunt} />
            ))}
        </div>
    );
};

export default ResultsDisplay;
