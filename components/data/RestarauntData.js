import React, { useEffect, useState } from 'react';
import { processRestarauntData, sortRestaraunts, getAllGenres } from '../../resources/utils';

export const RestarauntContext = React.createContext();
export const RestarauntProvider = RestarauntContext.Provider;
export const RestarauntConsumer = RestarauntContext.Consumer;

const RestarauntData = (props) => {
    const [restaraunts, setRestaraunts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState('NAME_ASC');
    const [stateFilters, setStateFilters] = useState([]);
    const [genreFilters, setGenreFilters] = useState([]);

    const fetchRestaraunts = async (url) => {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        const data = await res.json();
        // console.log(data);
        setRestaraunts(processRestarauntData(data));
    };

    const resetFilters = () => {
        setStateFilters([]);
        setGenreFilters([]);
        setSearchText('');
    };

    const allGenres = getAllGenres(restaraunts);

    const context = {
        restaraunts,
        sortRestaraunts,
        searchText,
        setSearchText,
        sortType,
        setSortType,
        stateFilters,
        setStateFilters,
        allGenres,
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
