import React from 'react';

const ResultRow = props => {
    const { name, city, state, telephone, genre} = props.restaraunt
    
    return (
        <tr>
            <td>{name}</td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{telephone}</td>
            <td>{genre}</td>
        </tr>
    )
}

export default ResultRow;