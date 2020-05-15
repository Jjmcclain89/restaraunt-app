import React, { useEffect, useState } from 'react';

export const RestarauntContext = React.createContext();
export const RestarauntProvider = RestarauntContext.Provider;
export const RestarauntConsumer = RestarauntContext.Consumer;

const RestarauntData = (props) => {
    const [restaraunts, setRestaraunts] = useState([]);
    
    const context = {
        restaraunts,
        sortRestaraunts
    }

    const sortRestaraunts = sortType => {
        let sortedCopy = [...restaraunts];
        switch(sortType) {
            case 'NAME_ASC':
                sortedCopy = sortedCopy.sort( (a,b)=> {
                    return a.name < b.name ? -1 : 1; 
                })
                setRestaraunts(sortedCopy);
            break;
            case 'NAME_DESC':
                sortedCopy = sortedCopy.sort( (a,b)=> {
                    return a.name > b.name ? -1 : 1; 
                })
                setRestaraunts(sortedCopy);
            break;
        }
    }

    const fetchRestaraunts = async (url) => {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        const data = await res.json();
        setRestaraunts(data);
        sortRestaraunts('NAME_DESC');
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
