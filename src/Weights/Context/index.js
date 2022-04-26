import React from 'react';

// Units
export const UnitContext = React.createContext({
    unit:"LB",
    setUnit: () => {console.log("Setted")},
});
export const UnitProvider = UnitContext.Provider;

// Weights
export const WeightContext = React.createContext({
    weight:0,
    setWeight: () => {},
});

export const WeightProvider = WeightContext.Provider;

