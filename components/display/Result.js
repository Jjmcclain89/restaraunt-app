import React from 'react';
import '../styles/result.scss';

const Result = props => {
    const {restaraunt} = props;
    
    return (
        <div className="result">
            {restaraunt.name}
        </div>
    )
}

export default Result;