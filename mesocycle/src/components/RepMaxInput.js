import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import { increaseMaxInclinePush} from '../actions/IncreaseMax';
import { increaseMaxChestIsolation} from '../actions/IncreaseMax';
import { Link } from "react-router-dom";
import'./layout/BaseLayoutStyle.css';


class RepMaxInput extends Component {

  handleSubmitInclinePush = (e) => {

    e.preventDefault();

    //collect the data from form 

    //this uploads data to the global store
    this.props.addInclinePush({
      
      // id: 1, 
      // movementName: "dumbbell fly",
      pounds: this.refs.amount.value
    });
  }

  handleSubmitChestIsolation = (e) => {

    e.preventDefault();

    //collect the data from form 

    //this uploads data to the global store
    this.props.addChestIsolation({
      
      // id: 1, 
      // movementName: "dumbbell fly",
      pounds: this.refs.weight.value
    });
  }

  render() {
    return (
      <>
        <div className="container-fluid h-100 p-0 w-100">
          <div className="row position-relative d-flex w-100 flex-row justify-content-center flex-wrap mx-0">
              <div className=" mainBody inputForm col-sm col-md col-lg col-xl flex-column align-items-center justify-contents-center w-100">
                <form onSubmit={this.handleSubmitInclinePush}>
                  <input ref="amount" type="text" placeholder="10RM" />
                  <button type="submit">Submit</button>
                </form>

                <form onSubmit={this.handleSubmitChestIsolation}>
                  <input ref="weight" type="text" placeholder="10RM" />
                  <button type="submit">Submit</button>
                </form>
                <div>
                    <Link to="/RepCount" className="btn continueButton">Continue</Link>
                </div>
              </div>
          </div>
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
    addInclinePush: (pounds) => dispatch(increaseMaxInclinePush(pounds)),
    addChestIsolation: (pounds) => dispatch(increaseMaxChestIsolation(pounds))
  }
}

export default connect(null, mapDispatchToProps)(RepMaxInput)//connects App component to the provider
