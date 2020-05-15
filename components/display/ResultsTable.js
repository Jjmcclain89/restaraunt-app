import React, { useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import ResultRow from './ResultRow';

const ResultsTable = (props) => {
    const { restaraunts, sortRestaraunts, sortType, setSortType } = useContext(
        RestarauntContext
    );

    let sortedRestaraunts = sortRestaraunts(restaraunts, sortType);
    console.log(sortedRestaraunts);

    const handleNameClick = e => {
        if(sortType == 'NAME_ASC') {
            setSortType('NAME_DESC');
        } else {
            setSortType('NAME_ASC')
        }
    }
    const handleCityClick = e => {
        if(sortType == 'CITY_ASC') {
            setSortType('CITY_DESC');
        } else {
            setSortType('CITY_ASC')
        }
    }
    const handleStateClick = e => {
        if(sortType == 'STATE_ASC') {
            setSortType('STATE_DESC');
        } else {
            setSortType('STATE_ASC')
        }
    }

    return (
        <table className='results-table'>
            <tbody>
                <tr>
                    <th onClick={handleNameClick}>
                        <span>Name {sortType == 'NAME_ASC' && '🔼'}{sortType == 'NAME_DESC' && '🔽' }</span>
                    </th>
                    <th onClick={handleCityClick}>
                        <span>City {sortType == 'CITY_ASC' && '🔼'}{sortType == 'CITY_DESC' && '🔽' }</span>
                    </th>
                    <th className="results-table__state" onClick={handleStateClick}>
                        <span>State {sortType == 'STATE_ASC' && '🔼'}{sortType == 'STATE_DESC' && '🔽' }</span>
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
