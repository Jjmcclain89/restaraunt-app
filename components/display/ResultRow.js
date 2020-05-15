import React from 'react';

const ResultRow = props => {
    const { name, city, state, phone, genres} = props.restaraunt
    
    return (
        <tr>
            <td>{name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{phone}</td>
            <td>{genres}</td>
        </tr>
    )
}

export default ResultRow;