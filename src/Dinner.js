import React from 'react';

function Dinner(props)
{
    return(
        <div>
            <h1>We are serving today {props.dishName}</h1>
            <h1>We are also serving sweet dish {props.sweetName}</h1>
        </div>
    )
}

export default Dinner