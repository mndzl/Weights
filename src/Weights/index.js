import React, { useEffect } from 'react';
import Input from './Input'
import UnitSwitcher from './Switcher';
import Percentages from './Percentages';
import Plates from './Plates';
import { UnitProvider, WeightProvider } from './Context';

export default function Converter () {
    const [convertedUnit, setConvertedUnit] = React.useState(0);
    const [ unit, setUnit ] = React.useState("LB");
    const [ weight, setWeight ] = React.useState(0); 

    useEffect(() => {
        if (unit === "LB")
            setConvertedUnit(Math.round((weight / 2.202)*10)/10);
        else
            setConvertedUnit(Math.round((weight * 2.202)*10)/10);

    }, [weight, unit]);

    return (
        <>
            <UnitProvider value={{unit, setUnit}}>
                <WeightProvider value={{weight,setWeight}}>
                    <UnitSwitcher/>
                    <Input/>
                    <br/>
                    <span>{unit==="KG" ? "LB" : "KG"}: {convertedUnit}</span>
                    <br/>
                    <Plates/>
                    <Percentages/>
                </WeightProvider>
            </ UnitProvider>
        </>
    );
};
