import React from 'react';
import UnitContext from '../Context';

export default function Plates(){
    const { 
        unit,
        weight 
    } = React.useContext(UnitContext);

    const kiloPlates = [25,20,15,10,5,2.5,1.5,1,.5];
    const poundPlates = [45,35,25,10,5,2.5];

    return (
        <h1></h1>
    );
}