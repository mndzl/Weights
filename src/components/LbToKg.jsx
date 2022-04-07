import React, { Component } from 'react';


class LbToKg extends Component {
    state = {
        weightInLb:0,
        weightInKg:0,
        plates:[0],
        platesCount: [0,0,0,0,0,0],
        weights: [45, 35, 25, 10, 5, 2.5],
    }

    handleChange = (event) => {
        
        let weightsToAdd = [];
        const weightsCount = [0,0,0,0,0,0];
        const pounds = event.target.value;
        let poundsSide = (pounds-45)/2;


        if (poundsSide>=this.state.weights[this.state.weights.length-1]) {
            for (let i=0; i<this.state.weights.length; i++){
                while(poundsSide-this.state.weights[i]>=0){
                    weightsToAdd.push(this.state.weights[i]);
                    weightsCount[i]++;
                    poundsSide-=this.state.weights[i];
                }
                if(poundsSide<1) break;
            }
        }

        this.setState({
            weightInLb: pounds===""? 0 : pounds,
            weightInKg: Math.floor((pounds / 2.205)*10) / 10,
            plates: (weightsToAdd.length===0)? [0] : weightsToAdd,
            platesCount: weightsCount,
        });
    }

    getPlates = () => {
        if(this.state.plates[0] === 0) return <span>None</span>
        let response = "";
        let first = true;

        for(let i=0; i<this.state.platesCount.length; i++){
            if(this.state.platesCount[i]!==0){
                if (!first) response += ", ";
                first=false;
                response += " " + this.state.weights[i] + "lbs";
                if (this.state.platesCount[i]>=2){
                    response += " x " + this.state.platesCount[i];
                }
            }

        }

        /*
        for(let i=0; i<this.state.plates.length; i++){
            if (i!==0) response += ", ";
            response += this.state.plates[i];
            if(this.state.platesCount[i]>=2){
                response += " x " + this.state.platesCount[i];
                i+=this.state.platesCount[i]-1;
            }
        }
        */

        return response;
    }

    render() { 
        return (
            <div className="weight-container">
                <form onSubmit={this.handleSubmit}>
                    <label className="m-2">Enter weight in lbs: </label>
                    <input type="text" className='ml-2 mb-2' onChange={this.handleChange}/>
                    <br />
                    <div className="weights m-2">
                        <span>Lb: {this.state.weightInLb}</span>
                        <br />
                        <span>Kg: {this.state.weightInKg}</span>
                        <br />
                        <br />
                        <div className="plates">
                            <span>Plates per side: </span>
                            <br />
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