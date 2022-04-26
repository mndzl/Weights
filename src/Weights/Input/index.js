import React from 'react';
import { WeightContext } from '../Context';

export default function Input () {
    const {
        setWeight,
    } = React.useContext(WeightContext);

    const change = (event) => {
        const value = event.target.value;
        value!=0 ? setWeight(value): setWeight(0);
    };

    return(
        <>
        <h2>Enter weight: </h2>
        <input onChange={change} placeholder="Enter a weight"/>
        <br/>
        </>
    );
}