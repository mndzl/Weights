import React from 'react';
import { UnitContext } from '../Context';

export default function UnitSwitcher(){
    const {
        unit,
        setUnit,
    } = React.useContext(UnitContext);

    return (
        <>
        <button onClick={() => {setUnit("LB"); }}>LB</button>
        <button onClick={() => {setUnit("KG"); }}>KG</button>
        <span>Unit: {unit}</span>
        </>
    );
};