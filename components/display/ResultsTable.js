import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import ResultRow from './ResultRow';

const ResultsTable = (props) => {
    const { restaraunts, setRestaraunts } = useContext(RestarauntContext);
    return (
        <table className="results-table">
            <tr>
                <th><span>Name</span></th>
                <th><span>City</span></th>
                <th><span>State</span></th>
                <th><span>Phone</span></th>
                <th><span>Genres</span></th>
            </tr>
            {restaraunts.map((restaraunt) => (
                <ResultRow key={restaraunt.id} restaraunt={restaraunt} />
            ))}
        </table>
    );
};

export default ResultsTable;
