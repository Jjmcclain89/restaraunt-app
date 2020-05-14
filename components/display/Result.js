import React from 'react';

const Result = props => {
    const {restaraunt} = props;
    
    return (
        <div>
            {restaraunt.name}
        </div>
    )
}

export default Result;