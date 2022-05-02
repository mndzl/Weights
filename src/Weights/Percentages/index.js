import React, { useEffect } from 'react';
import { UnitContext } from '../Context';
import { WeightContext } from '../Context';
import Plates from '../Plates';

export default function Percentages () {
    const [newWeight, setNewWeight] = React.useState(0);

    const {unit} = React.useContext(UnitContext);
    const {weight} = React.useContext(WeightContext);
    const [value, setValue] = React.useState(0);

    const calculate = (event) => {
        setValue(event.target.value);
        setNewWeight(weight * (event.target.value/100));
    }
    useEffect(() => {
        setNewWeight(weight * (value/100));
    }, [weight, unit])

    return (
        <>
            <h3>Calculate Percentage</h3> 
            <input onChange={calculate} style={{width:"2em"}} placeholder='Enter percentage'/>%:

            <span>  {newWeight}{unit} ({newWeight>0 ? <Plates calculated={newWeight}/> : "empty bar"})</span>
            
        </>
    );
}