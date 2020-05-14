import React, { useEffect, useState } from 'react';
import { RestarauntProvider } from './RestarauntContext';

const App = (props) => {
    const [restaraunts, setRestaraunts] = useState([]);

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
        <RestarauntProvider value={restaraunts}>
            {props.children}
        </RestarauntProvider>
    );
};

export default App;
