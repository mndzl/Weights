import React, { useEffect } from 'react';
import { UnitContext, WeightContext} from '../Context';

export default function Plates(props){
    const {unit} = React.useContext(UnitContext);
    const {weight} = React.useContext(WeightContext);

    const kiloPlates = [25,20,15,10,5,2.5,1.5,1,.5];
    const poundPlates = [45,35,25,10,5,2.5];

    const [ platesUsed, setPlatesUsed ] = React.useState([{}]);

    let coloringKG = {
        25: 'red',
        20: 'blue',
        15: '#99ad00',
        10: 'green',
        5 : 'gray',
        2.5: 'gray',
        1.5: 'gray',
        1: 'gray',
        .5: 'gray', 
    };

    let coloringLB = {
        45: 'red',
        35: 'blue',
        25: '#99ad00',
        10: 'gray',
        5 : 'black',
        2.5: 'gray',
    };

    useEffect(() => {
        calculate(weight, unit, setPlatesUsed, poundPlates, kiloPlates);
        if(props.calculated){
            calculate(props.calculated, unit, setPlatesUsed, poundPlates, kiloPlates)
        }
    }, [weight, unit, props])


    return (
        <span>Plates:
            { platesUsed.length != 0 ? 
                // If full...
                platesUsed.map((plate, index) => 
                    <span key={index} style={{ color: unit=="LB" ? coloringLB[plate.weight] : coloringKG[plate.weight] }}>
                        {index>0 && ","}
                        {" " + plate.weight}
                        {plate.quantity>1 && "("+plate.quantity+")"}
                    
                    </span>
                
                )
            :
                // If empty...
                <span key={"empty"}> None</span>
        }

        </span>
    )
}

function calculate(weight, unit, setPlatesUsed, poundPlates, kiloPlates){
    setPlatesUsed([]);
    let plates = [];

    if (unit=="LB"){
        let platesWeightSide = (weight-45)/2;
        for(let i=0; i<poundPlates.length; i++){
            while(platesWeightSide-poundPlates[i]>=0){
                platesWeightSide-=poundPlates[i];
                if(plates[i]) plates[i].quantity++;
                else
                    plates[i] = {
                        "weight": poundPlates[i],
                        "quantity": 1,
                    };
            }
        }
    }else if(unit=="KG"){
        let platesWeightSide = (weight-20)/2;
        for(let i=0; i<kiloPlates.length; i++){
            while(platesWeightSide-kiloPlates[i]>=0){
                platesWeightSide-=kiloPlates[i];
                if(plates[i]) plates[i].quantity++;
                else
                    plates[i] = {
                        "weight": kiloPlates[i],
                        "quantity": 1,
                    };
            }
        }
    }

    setPlatesUsed(plates.flat());
    
}