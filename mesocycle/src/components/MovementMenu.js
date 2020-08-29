import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import chooseMovement from '../actions/ChooseMovement';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'

class MovementMenu extends Component {

    handleSubmit = (e) => {

        e.preventDefault();

        //collect the data from the form 
        //this uploads data to the global store
        this.props.onIncrease({

            // id: 
            exercise: this.refs.name.value
        })
    }

  render() {
    return (
        <Container fluid>
        <Row>
        <form onSubmit={this.handleSubmit}>
            <label>
                <select value={this.props.movement} onchange={this.handleChange}>
                <option id="incline_push_1" ref="name" value="incline medium grip bench press">Incline Medium Grip Bench Press</option>
                <option id="incline_push_2" ref="name" value="incline wide grip bench press">Incline Wide Grip Bench Press</option>
                <option id="incline_push_3" ref="name" value="low incline dumbbell press">Low Incline Dumbbell Press</option>
                <option id="incline_push_4" ref="name" value="incline dumbbell press">Incline Dumbbell Press</option>              
                <option id="incline_push_5" ref="name" value="incline close grip bench press">Incline Close Grip Bench Press</option>              
                <option id="incline_push_6" ref="name" value="incline machine bench press">Incline Machine Bench Press</option>              
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        </Row>
    </Container>
    )
  }
}

// id="incline_push_1"

//this function is going to take in a dipatch parameter
//dispatch is a function that sends a message to the store
const mapDispatchToProps = (dispatch) => {

    return {
      //the onIncrement function is returning a function named dispatch. 
      //dispatch function needs to be wrapped in a function so it doesn't automatically execute
      onIncrease: (exercise) => dispatch(chooseMovement(exercise)),
    }
  }
  
  export default connect(null, mapDispatchToProps)(MovementMenu)//connects App component to the provider  
