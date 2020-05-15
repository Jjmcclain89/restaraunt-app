import React, { useState, useContext } from 'react';
import { RestaurantContext } from '../data/RestaurantData';
import ResultRow from './ResultRow';
import NoResults from './NoResults';
import PageSelector from './PageSelector';

const ResultsTable = (props) => {
    const {
        restaurants,
        sortRestaurants,
        sortType,
        setSortType,
        stateFilters,
        searchText,
        genreFilters,
    } = useContext(RestaurantContext);

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

    const searchRestaurants = (restaurants, searchText) => {
        searchText = searchText.toLowerCase();
        restaurants = [...restaurants].filter((r) => {
            if (r.name.toLowerCase().includes(searchText)) return true;
            if (r.city.toLowerCase().includes(searchText)) return true;

            const { genre: genres } = r;
            for (let i = 0; i < genres.length; i++) {
                if (genres[i].toLowerCase().includes(searchText)) return true;
            }
        });
        return restaurants;
    };

    let sortedRestaurants = sortRestaurants(restaurants, sortType);
    sortedRestaurants = sortedRestaurants.filter((r) => {
        if (stateFilters.length < 1) return true;
        return stateFilters.includes(r.state);
    });

    sortedRestaurants = sortedRestaurants.filter((r) => {
        const { genre: genres } = r;
        if (genreFilters.length < 1) return true;
        for (let i = 0; i < genres.length; i++) {
            if (genreFilters.includes(genres[i])) return true;
        }
    });

    sortedRestaurants = searchRestaurants(sortedRestaurants, searchText);

    const totalPageCount = Math.ceil(sortedRestaurants.length / resultsPerPage);

    sortedRestaurants = sortedRestaurants.slice((pageNumber-1)*resultsPerPage, pageNumber*resultsPerPage);


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
                    {sortedRestaurants.map((restaurant) => (
                        <ResultRow
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    ))}
                </tbody>
            </table>
            {sortedRestaurants.length < 1 && <NoResults />}
            <PageSelector
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                resultsPerPage={resultsPerPage}
                setResultsPerPage={setResultsPerPage}
                totalPageCount={totalPageCount}
            />
        </>
    );
};

export default ResultsTable;
