import React, { useEffect } from 'react';
import { UnitContext } from '../Context';
import { WeightContext } from '../Context';

export default function Percentages () {
    const [newWeight, setNewWeight] = React.useState(0);

    const {unit} = React.useContext(UnitContext);
    const {weight} = React.useContext(WeightContext);

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