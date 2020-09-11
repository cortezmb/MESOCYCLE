import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkoutOfTheDay extends Component {
  render() {
    return (
      <>
      <div className="Container">
          <div className="row justify-content-center">
            <div className="mr-1">{this.props.inputWeight1} lbs</div>
            <div className="mr-1"> {this.props.inclinePushMove}</div>
            <p>3 Sets  12 - 20 Rep Range</p>
          </div>
          <div className="row justify-content-center">
            <div className="mr-1">{this.props.inputWeight2} lbs</div>
            <div className="mr-1"> {this.props.chestIsolationMove}</div>
            <p>3 Sets  12 - 20 Rep Range</p>
          </div>
      </div>
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
