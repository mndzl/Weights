import React, { useEffect } from 'react';

export default function Percentages ({weight, unit}) {
    const [newWeight, setNewWeight] = React.useState(0);

    const calculate = (event) => {
        setNewWeight(weight * (event.target.value/100));
    }

    return (
        <>
            <h3>Calculate Percentage</h3>
            <input onChange={calculate} style={{width:"2em"}} placeholder='Enter percentage'/>%:

            <span>  {newWeight}{unit}</span>
        </>
    );
}