import React from 'react';
import './App.css';

function Dinner(props)
{
    return(
        <div>
            <h1 className="fromleft">We are serving today {props.dishName}</h1>
            <h1 className="fromright">We are also serving sweet dish {props.sweetName}</h1>
        </div>
    )
}

export default Dinner