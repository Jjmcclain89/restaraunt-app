import React, { useState, useContext } from 'react';
import { RestarauntContext } from '../data/RestarauntData';
import ResultRow from './ResultRow';
import NoResults from './NoResults';
import PageSelector from './PageSelector';

const ResultsTable = (props) => {
    const {
        restaraunts,
        sortRestaraunts,
        sortType,
        setSortType,
        stateFilters,
        searchText,
        genreFilters,
    } = useContext(RestarauntContext);

    const [pageNumber, setPageNumber] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(10);

    const handleNameClick = (e) => {
        if (sortType == 'NAME_ASC') {
            setSortType('NAME_DESC');
        } else {
            setSortType('NAME_ASC');
        }
    };
    const handleCityClick = (e) => {
        if (sortType == 'CITY_ASC') {
            setSortType('CITY_DESC');
        } else {
            setSortType('CITY_ASC');
        }
    };
    const handleStateClick = (e) => {
        if (sortType == 'STATE_ASC') {
            setSortType('STATE_DESC');
        } else {
            setSortType('STATE_ASC');
        }
    };

    const searchRestaraunts = (restaraunts, searchText) => {
        searchText = searchText.toLowerCase();
        restaraunts = [...restaraunts].filter((r) => {
            if (r.name.toLowerCase().includes(searchText)) return true;
            if (r.city.toLowerCase().includes(searchText)) return true;

            const { genre: genres } = r;
            for (let i = 0; i < genres.length; i++) {
                if (genres[i].toLowerCase().includes(searchText)) return true;
            }
        });
        return restaraunts;
    };

    let sortedRestaraunts = sortRestaraunts(restaraunts, sortType);
    sortedRestaraunts = sortedRestaraunts.filter((r) => {
        if (stateFilters.length < 1) return true;
        return stateFilters.includes(r.state);
    });

    sortedRestaraunts = sortedRestaraunts.filter((r) => {
        const { genre: genres } = r;
        if (genreFilters.length < 1) return true;
        for (let i = 0; i < genres.length; i++) {
            if (genreFilters.includes(genres[i])) return true;
        }
    });

    sortedRestaraunts = searchRestaraunts(sortedRestaraunts, searchText);

    const totalPageCount = Math.ceil(sortedRestaraunts.length / resultsPerPage);

    sortedRestaraunts = sortedRestaraunts.slice((pageNumber-1)*10, pageNumber*10);


    return (
        <>
            <table className='results-table'>
                <tbody>
                    <tr>
                        <th onClick={handleNameClick}>
                            <span>
                                Name {sortType == 'NAME_ASC' && '🔼'}
                                {sortType == 'NAME_DESC' && '🔽'}
                            </span>
                        </th>
                        <th onClick={handleCityClick}>
                            <span>
                                City {sortType == 'CITY_ASC' && '🔼'}
                                {sortType == 'CITY_DESC' && '🔽'}
                            </span>
                        </th>
                        <th
                            className='results-table__state'
                            onClick={handleStateClick}
                        >
                            <span>
                                State {sortType == 'STATE_ASC' && '🔼'}
                                {sortType == 'STATE_DESC' && '🔽'}
                            </span>
                        </th>
                        <th>
                            <span>Phone</span>
                        </th>
                        <th>
                            <span>Genres</span>
                        </th>
                    </tr>
                    {sortedRestaraunts.map((restaraunt) => (
                        <ResultRow
                            key={restaraunt.id}
                            restaraunt={restaraunt}
                        />
                    ))}
                </tbody>
            </table>
            {sortedRestaraunts.length < 1 && <NoResults />}
            <PageSelector
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                setResultsPerPage={setResultsPerPage}
                totalPageCount={totalPageCount}
            />
        </>
    );
};

export default ResultsTable;
