import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import chooseMovement from '../actions/ChooseMovement';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { v1 as uuidv1 } from 'uuid';
import { Link } from "react-router-dom";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'

class MovementMenu extends Component {

    constructor() {

        super();

        this.state = {

        dropdownValue: "Incline Medium Grip Bench Press",

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
        ]
        }
    }

    handleChange = (e) => {

        console.log(e.target.value)

        this.setState(
            {
                dropdownValue: e.target.value
        });
    }

    handleSubmit = (e) => {

        e.preventDefault();

        // console.log(e.target.value)

        let exercise = {

            // name: this.refs.name.value
            name: this.state.dropdownValue
        }
        console.log(this.state.dropdownValue)
        //collect the data from the form 
        //this uploads data to the global store
        this.props.addMovement(exercise)
    }

  render() {

        // let exerciseArray = this.state.inclinePush.map(exerciseName => {

        //     return <option ref={exerciseName.name} value={exerciseName.name} >{exerciseName.name}</option>
        // })
    return (
        <Container fluid>
        <Row>
            <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.state.dropdownValue} onChange={this.handleChange}>
                        {/* {exerciseArray} */}
                        <option ref="name" value="incline wide grip bench press">Incline Wide Grip Bench Press</option>
                        <option ref="low incline dumbbell press" value="low incline dumbbell press">Low Incline Dumbbell Press</option>
                        <option ref="incline dumbbell press" value="incline dumbbell press">Incline Dumbbell Press</option>              
                        <option ref="incline close grip bench press" value="incline close grip bench press">Incline Close Grip Bench Press</option>              
                        <option ref="incline machine bench press" value="incline machine bench press">Incline Machine Bench Press</option>              
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <Link to="/RepMax" className="btn btn-primary">Continue</Link>
                </div>

            {/* <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.props.movement} onchange={this.handleChange}>
                    <option ref="name" value="incline medium grip bench press">Incline Medium Grip Bench Press</option>
                    <option ref="name" value="incline wide grip bench press">Incline Wide Grip Bench Press</option>
                    <option ref="name" value="low incline dumbbell press">Low Incline Dumbbell Press</option>
                    <option ref="name" value="incline dumbbell press">Incline Dumbbell Press</option>              
                    <option ref="name" value="incline close grip bench press">Incline Close Grip Bench Press</option>              
                    <option ref="name" value="incline machine bench press">Incline Machine Bench Press</option>              
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <Link to="/RepMax" className="btn btn-primary">Continue</Link>
            </div> */}
        </Row>
    </Container>
    )
  }
}

//this function is going to take in a dipatch parameter
//dispatch is a function that sends a message to the store
const mapDispatchToProps = (dispatch) => {

    return {
      //the onIncrement function is returning a function named dispatch. 
      //dispatch function needs to be wrapped in a function so it doesn't automatically execute
      addMovement: (exercise) => dispatch(chooseMovement(exercise)),
    }
  }
  
  export default connect(null, mapDispatchToProps)(MovementMenu)//connects App component to the provider  
