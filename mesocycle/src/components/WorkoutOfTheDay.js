import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkoutOfTheDay extends Component {
  render() {
    return (
      <>
        <div>{this.props.inputWeight1}</div>
        <div>{this.props.inputWeight2}</div>
        <div>{this.props.inclinePushMove}</div>
        <div>{this.props.chestIsolationMove}</div>
      </>
    )
  }
}

const mapStateToProps = (state) => {

    return {

        inputWeight1: state.weight1,
        inputWeight2: state.weight2,
        inclinePushMove: state.inclinePushMovement.name,
        chestIsolationMove: state.chestIsolationMovement.name
    }
}

export default connect(mapStateToProps, null)(WorkoutOfTheDay) //connects App component to the provider
