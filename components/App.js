import React, { useEffect } from 'react';

const fetchData = async (url) => {
    const res = await fetch(url, {
        headers: {
            Authorization: `Api-Key q3MNxtfep8Gt`,
        },
    });

    const data = await res.json();

    console.log(data);
};

const App = (props) => {
    useEffect(() => {
        fetchData(process.env.NEXT_PUBLIC_BACKEND_URL);
    });

    return <div>Hello</div>;
};

export default App;
