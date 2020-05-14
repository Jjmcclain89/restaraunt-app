import React, { useEffect, useState } from 'react';

export const RestarauntContext = React.createContext();
export const RestarauntProvider = RestarauntContext.Provider;
export const RestarauntConsumer = RestarauntContext.Consumer;

const RestarauntData = (props) => {
    const [restaraunts, setRestaraunts] = useState([]);
    
    const context = {
        restaraunts,
        setRestaraunts
    }

    const fetchRestaraunts = async (url) => {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
        });

        const data = await res.json();
        setRestaraunts(data);
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
