import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chooseInclinePush } from '../actions/ChooseMovement';
import { chooseChestIsolation } from '../actions/ChooseMovement';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class MovementMenu extends Component {

    constructor() {

        super();

        this.state = {

        dropdownInclinePushValue: "Incline Medium Grip Bench Press",

        inclinePush: [
            {
                id: 1,
                name: "Incline Wide Grip Bench Press"
            },
            {
                id: 2,
                name: "Low Incline Dumbbell Press"
            },
            {
                id: 3,
                name: "Low Incline Dumbbell Press"
            },
            {
                id: 4,
                name: "Incline Dumbbell Press"
            },
            {
                id: 5,
                name: "Incline Close Grip Bench Press"
            },
            {
                id: 6,
                name: "Incline Machine Bench Press"
            }
        ],

        dropdownChestIsolationValue: "Flat Dumbbell Fly",

        chestIsolation: [
            {
                id: 1, 
                name: "Flat Dumbbell Fly"
            },
            {
                id: 2, 
                name: "Incline Dumbbell Fly"
            },
            {
                id: 3, 
                name: "Cable Fly"
            },
            {
                id: 4, 
                name: "High Cable Fly"
            },
            {
                id: 5, 
                name: "Machine Chest Fly"
            },
            {
                id: 6, 
                name: "Cable Incline Fly"
            },
            {
                id: 7, 
                name: "Pec Dec Fly"
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

            return <option key={index} ref={inclinePushName.name} value={inclinePushName.name} >{inclinePushName.name}</option>
        });

        let chestIsolationArray = this.state.chestIsolation.map((chestIsolationName, index) => {

            return <option key={index} ref={chestIsolationName.name} value={chestIsolationName.name} >{chestIsolationName.name}</option>
        });
    return (
        <>
        <Container>
            <Row className="dropDownMenu" >                     
                <form onSubmit={this.handleSubmitInclinePush}>
                    <label>
                        <select value={this.state.dropdownInclinePushValue} onChange={this.handleChange}>
                        {inclinePushArray}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <form onSubmit={this.handleSubmitChestIsolation}>
                    <label>
                        <select value={this.state.dropdownChestIsolationValue} onChange={this.handleChange}>
                        {chestIsolationArray}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>   

                <div className="d-flex justify-content-center">
                    <Link to="/RepMax" className="btn continueButton">Continue</Link>      
                </div>
            </Row>
        </Container>
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
