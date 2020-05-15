import React from 'react';

const ResultRow = (props) => {
    const { name, city, state, telephone, genre } = props.restaraunt;

    return (
        <tr className="result">
            <td>{name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{telephone}</td>
            <td>{genre.join(", ")}</td>
        </tr>
    );
};

export default ResultRow;
