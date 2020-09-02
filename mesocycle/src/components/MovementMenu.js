import React, { Component } from 'react'
import { connect } from 'react-redux'
import RepMaxInput from './RepMaxInput';
import { chooseInclinePush } from '../actions/ChooseMovement';
import { chooseChestIsolation } from '../actions/ChooseMovement';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import'./layout/BaseLayoutStyle.css';


class MovementMenu extends Component {

    constructor() {

        super();

        this.state = {

        dropdownInclinePushValue: "Incline Medium Grip Bench Press",

        inclinePush: [
            {
                id: 1,
                name: "Incline Wide Grip Bench Press",
                category: "Incline Push"
            },
            {
                id: 2,
                name: "Low Incline Dumbbell Press",
                category: "Incline Push"
            },
            {
                id: 3,
                name: "Low Incline Dumbbell Press",
                category: "Incline Push"
            },
            {
                id: 4,
                name: "Incline Dumbbell Press",
                category: "Incline Push"
            },
            {
                id: 5,
                name: "Incline Close Grip Bench Press",
                category: "Incline Push"
            },
            {
                id: 6,
                name: "Incline Machine Bench Press",
                category: "Incline Push"
            }
        ],

        dropdownChestIsolationValue: "Flat Dumbbell Flye",

        chestIsolation: [
            {
                id: 1, 
                name: "Flat Dumbbell Flye",
                category: "Chest Isolation"
            },
            {
                id: 2, 
                name: "Incline Dumbbell Flye",
                category: "Chest Isolation"
            },
            {
                id: 3, 
                name: "Cable Flye",
                category: "Chest Isolation"
            },
            {
                id: 4, 
                name: "High Cable Flye",
                category: "Chest Isolation"
            },
            {
                id: 5, 
                name: "Machine Chest Flye",
                category: "Chest Isolation"
            },
            {
                id: 6, 
                name: "Cable Incline Flye",
                category: "Chest Isolation"
            },
            {
                id: 7, 
                name: "Pec Dec Flye",
                category: "Chest Isolation"
            }
        ]
        }
    }

    handleChange = (e) => {

        console.log(e.target.value)

        this.setState(
            {
                dropdownInclinePushValue: e.target.value,
                dropdownChestIsolationValue: e.target.value

        });
    }

    handleSubmitInclinePush = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let inclinePushExercise = {

            name: this.state.dropdownInclinePushValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addInclinePush(inclinePushExercise);
    }
    handleSubmitChestIsolation = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let chestIsolationExercise = {

            name: this.state.dropdownChestIsolationValue
        }
    
        
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addchestIsolation(chestIsolationExercise)
    }

  render() {

        let inclinePushArray = this.state.inclinePush.map((inclinePushName, index) => {

        return <option className="" key={index} ref={inclinePushName.name} value={inclinePushName.name}>{inclinePushName.name}</option>
     
        });

        let chestIsolationArray = this.state.chestIsolation.map((chestIsolationName, index) => {

        return <option key={index} ref={chestIsolationName.name} value={chestIsolationName.name} >{chestIsolationName.name}</option> 
           
        });
    return (
        <>
            <div className="container">
                <div className="row mainBody dropDownMenu col-sm col-md col-lg col-xl "> 
                    <div className="col">
                        <form className="formStyle1" onSubmit={this.handleSubmitInclinePush}>                        
                                <div class="dropdown">
                                    <label className="category font">Incline Push</label>
                                    <label>
                                        <select className="select font" value={this.state.dropdownInclinePushValue} onChange={this.handleChange}>
                                        {inclinePushArray}
                                        </select>
                                    </label>
                                    <input className="submit font" type="submit" value="Submit" />                             
                                </div>
                        </form>
                        
                        <form className="formStyle2" onSubmit={this.handleSubmitChestIsolation}>
                            <div class="dropdown">
                                <label className="category font">Chest Isolation</label>
                                <label>
                                    <select className="select font" value={this.state.dropdownChestIsolationValue} onChange={this.handleChange}>
                                    {chestIsolationArray}
                                    </select>
                                </label>
                                <input className="submit font" type="submit" value="Submit" />
                            </div>
                        </form> 
                    </div>
                    <div className="col">
                        <RepMaxInput />
                    </div>
                </div>
                {/* <div className="font m-3 d-flex justify-content-center">
                    <Link to="/RepMax" className="continueButton">Continue</Link>      
                </div> */}
            </div> 
        </>
        )
    }
}

//this function is going to take in a dipatch parameter
//dispatch is a function that sends a message to the store
const mapDispatchToProps = (dispatch) => {

    return {
      //the onIncrement function is returning a function named dispatch. 
      //dispatch function needs to be wrapped in a function so it doesn't automatically execute
      addInclinePush: (inclinePushExercise) => dispatch(chooseInclinePush(inclinePushExercise)),
      addchestIsolation: (chestIsolationExercise) => dispatch(chooseChestIsolation(chestIsolationExercise))
    }
  }
  
  export default connect(null, mapDispatchToProps)(MovementMenu)//connects App component to the provider  
