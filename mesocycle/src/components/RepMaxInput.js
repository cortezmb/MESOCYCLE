import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import increaseMax from '../actions/IncreaseMax';
import { Link } from "react-router-dom";

class RepMaxInput extends Component {

  handleSubmit = (e) => {

    e.preventDefault();

    //collect the data from form 

    //this uploads data to the global store
    this.props.onIncrease({
      
      // id: 1, 
      // movementName: "dumbbell fly",
      pounds: this.refs.amount.value
    })

}


  render() {
    return (
      <>
      <Container fluid>
          <Row>
            <form onSubmit={this.handleSubmit}>
              <input ref="amount" type="text" placeholder="10RM" />
              <button type="submit">Submit</button>
            </form>
            <div>
                <Link to="/RepCount" className="btn btn-primary">Continue</Link>
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
    onIncrease: (pounds) => dispatch(increaseMax(pounds)),
  }
}

export default connect(null, mapDispatchToProps)(RepMaxInput)//connects App component to the provider
