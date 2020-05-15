import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import ResultRow from './ResultRow';

const ResultsTable = (props) => {
    const { restaraunts, sortRestaraunts, sortType, setSortType } = useContext(RestarauntContext);

    let sortedRestaraunts = sortRestaraunts(restaraunts, sortType);
    console.log(sortedRestaraunts);

    return (
        <table className='results-table'>
            <tbody>
                <tr>
                    <th>
                        <span>Name</span>
                    </th>
                    <th>
                        <span>City</span>
                    </th>
                    <th>
                        <span>State</span>
                    </th>
                    <th>
                        <span>Phone</span>
                    </th>
                    <th>
                        <span>Genres</span>
                    </th>
                </tr>
                {sortedRestaraunts.map((restaraunt) => (
                    <ResultRow key={restaraunt.id} restaraunt={restaraunt} />
                ))}
            </tbody>
        </table>
    );
};

export default ResultsTable;
