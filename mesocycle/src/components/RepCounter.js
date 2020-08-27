import React, { Component } from 'react'
import { connect } from 'react-redux'
import increaseAction from '../actions/IncreaseAction';
import decreaseAction from '../actions/DecreaseAction';

class RepCounter extends Component {
  render() {
    return (
      <>
        
        
        <button onClick={this.props.onIncrease} > Increase</button>
        <button onClick={this.props.onDecrease} > Decrease</button>
        <h1>{this.props.ctr}</h1>
      </>
    )
  }
}//end of class

//purpose is to map redux global state to a prop we can use inside react
const mapStateToProps = (state) => {

  //mapped react prop count to state.counter
  return {
    ctr: state.counter
  }
}
//this function is going to take in a dipatch parameter
//dispatch is a function that sends a message to the store
const mapDispatchToProps = (dispatch) => {

  return {
    //the onIncrement function is returning a function named dispatch. 
    //dispatch function needs to be wrapped in a function so it doesn't automatically execute
    onIncrease: () => dispatch(increaseAction()),
    onDecrease: () => dispatch(decreaseAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepCounter)//connects App component to the provider
