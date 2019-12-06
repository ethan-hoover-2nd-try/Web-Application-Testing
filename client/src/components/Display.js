import React from 'react';

const Display= ({ balls, strikes}) => {
    return(
        <div data-testid='display-id' className='display-wrapper'>
            <div>
                <h3>Balls:</h3>
                <p>{balls}</p>
            </div>
            <div>
                <h3>Strikes:</h3>
                <p>{strikes}</p>
            </div>
        </div>
    );
};

export default Display;