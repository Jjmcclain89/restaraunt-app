import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import Result from './Result';

const ResultsDisplay = (props) => {
    const { restaraunts, setRestaraunts } = useContext(RestarauntContext);

    return (
        <div>
            {restaraunts.map((r) => (
                <p>{r.name}</p>
            ))}
        </div>
    );
};

export default ResultsDisplay;
