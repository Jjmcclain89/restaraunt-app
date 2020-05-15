import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import ResultRow from './ResultRow';

const ResultsTable = (props) => {
    const { restaraunts, setRestaraunts } = useContext(RestarauntContext);

    return (
        <div className="results-table">
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Phone</th>
                <th>Genres</th>
            </tr>
            {restaraunts.map((restaraunt) => (
                <ResultRow key={restaraunt.id} restaraunt={restaraunt} />
            ))}
        </div>
    );
};

export default ResultsTable;
