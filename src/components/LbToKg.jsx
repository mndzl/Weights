import React, { Component } from 'react';


class LbToKg extends Component {
    state = {
        weightInLb:0,
        weightInKg:0,
        plates:[0],
    }

    handleChange = (event) => {
        const weights = [45, 35, 25, 10, 5, 2.5];
        let weightsToAdd = [];
        const pounds = event.target.value;
        let poundsSide = (pounds-45)/2;

        if (poundsSide>=weights[weights.length-1]) {

            for (let i=0; i<weights.length; i++){
                while(poundsSide-weights[i]>=0){
                    weightsToAdd.push(weights[i]);
                    poundsSide-=weights[i];
                }
                if(poundsSide<1) break;
            }
        }

        this.setState({
            weightInLb: pounds===""? 0 : pounds,
            weightInKg: Math.floor((pounds / 2.205)*10) / 10,
            plates: (weightsToAdd.length===0)? [0] : weightsToAdd,
        });
    }

    getPlates = () => {
        console.log(this.state.plates);
        if(this.state.plates[0] === 0) return <span>None</span>

        let response = "";

        for(let i=0; i<this.state.plates.length; i++){
            if (i!==0) response += ", ";
            response += this.state.plates[i];
        }

        return response;
    }

    render() { 
        return (
            <div className="weight-container">
                <form onSubmit={this.handleSubmit}>
                    <label className="m-2">Enter weight in lbs: </label>
                    <input type="text" onChange={this.handleChange}/>
                    <br />
                    <div className="weights m-2">
                        <span>Lb: {this.state.weightInLb}</span>
                        <br />
                        <span>Kg: {this.state.weightInKg}</span>
                        <br />
                        <br />
                        <div className="plates">
                            <span>Plates per side: </span>
                            <span>
                                {this.getPlates()}
                            </span>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}
 
export default LbToKg;