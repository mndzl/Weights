import React from 'react';

export default function UnitSwitcher({unit, setUnit}){

    return (
        <>
        <button onClick={() => setUnit("LB")}>LB</button>
        <button onClick={() => setUnit("KG")}>KG</button>
        <span>Unit: {unit}</span>
        </>
    );
};