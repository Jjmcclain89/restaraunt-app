import React, { useEffect, useState } from 'react';

export const RestarauntContext = React.createContext();
export const RestarauntProvider = RestarauntContext.Provider;
export const RestarauntConsumer = RestarauntContext.Consumer;

const RestarauntData = (props) => {
    const [restaraunts, setRestaraunts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState('NAME_ASC');
    const [stateFilters, setStateFilters] = useState([]);
    const [genreFilters, setGenreFilters] = useState([]);

    const sortRestaraunts = (restaraunts, sortType) => {
        let sortedCopy = restaraunts ? [...restaraunts] : [];
        switch (sortType) {
            case 'NAME_ASC':
                sortedCopy = sortedCopy.sort((a, b) => {
                    return a.name < b.name ? -1 : 1;
                });
                break;
            case 'NAME_DESC':
                sortedCopy = sortedCopy.sort((a, b) => {
                    return a.name > b.name ? -1 : 1;
                });
                break;
            case 'CITY_ASC':
                sortedCopy = sortedCopy.sort((a, b) => {
                    return a.city < b.city ? -1 : 1;
                });
                break;
            case 'CITY_DESC':
                sortedCopy = sortedCopy.sort((a, b) => {
                    return a.city > b.city ? -1 : 1;
                });
                break;
            case 'STATE_ASC':
                sortedCopy = sortedCopy.sort((a, b) => {
                    return a.state < b.state ? -1 : 1;
                });
                break;
            case 'STATE_DESC':
                sortedCopy = sortedCopy.sort((a, b) => {
                    return a.state > b.state ? -1 : 1;
                });
                break;
        }
        return sortedCopy;
    };

    const fetchRestaraunts = async (url) => {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        const data = await res.json();
        setRestaraunts(data);
    };

    const resetFilters = () => {
        setStateFilters([]);
        setGenreFilters([]);
    };
    // const getAllGenres = 
    // const allGenres = []

    const context = {
        restaraunts,
        sortRestaraunts,
        searchText,
        setSearchText,
        sortType,
        setSortType,
        stateFilters,
        setStateFilters,
        genreFilters,
        setGenreFilters,
        resetFilters,
    };

    useEffect(() => {
        fetchRestaraunts(process.env.NEXT_PUBLIC_BACKEND_URL);
    }, []);

    return (
        <RestarauntProvider value={context}>
            {props.children}
        </RestarauntProvider>
    );
};

export default RestarauntData;
