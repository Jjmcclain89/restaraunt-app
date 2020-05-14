import React from 'react';

const Result = props => {
    const {restaraunt} = props;
    
    return (
        <div className="result">
            {restaraunt.name}
        </div>
    )
}

export default Result;