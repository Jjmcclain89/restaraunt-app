import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';

const ResultsDisplay = (props) => {
    const restaraunts = useContext(RestarauntContext);

    return (
        <div>
            {restaraunts.map((r) => (
                <p>{r.name}</p>
            ))}
        </div>
    );
};

export default ResultsDisplay;
