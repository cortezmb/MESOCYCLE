import React, { Component } from 'react'
import { connect } from "react-redux";
import counterActions from "./actions/counterActions";

class Counter extends Component {
  render() {
    return (
      <>
      <button onClick={this.props.onIncrement}>Plus One</button>
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
const mapDispatchToProps = (dispatch) =>{

  return {
    //the onIncrement function is returning a function named dispatch. 
    //dispatch function needs to be wrapped in a function so it doesn't automatically execute
    onIncrement: () => dispatch({type: 'INCREMENT_COUNTER'}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)//connects App component to the provider
