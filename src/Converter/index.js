import React, { useEffect } from 'react';
import Input from './Input'
import UnitSwitcher from './Switcher';
import Percentages from './Percentages';

export default function Converter () {
    const [weight, setWeight] = React.useState(0);
    const [convertedUnit, setConvertedUnit] = React.useState(0);
    const [unit, setUnit] = React.useState("LB");

    useEffect(() => {
        if (unit === "LB")
            setConvertedUnit(Math.round((weight / 2.202)*10)/10);
        else
            setConvertedUnit(Math.round((weight * 2.202)*10)/10);

    }, [weight, unit]);

    return (
        <>
            <UnitSwitcher unit={unit} setUnit={setUnit}/>
            <Input weight={weight} setWeight={setWeight}/>
            <br/>
            <span>{unit==="KG" ? "LB" : "KG"}: {convertedUnit}</span>
            <br/>
            <Percentages weight={weight} unit={unit} />
        </>
    );
};
