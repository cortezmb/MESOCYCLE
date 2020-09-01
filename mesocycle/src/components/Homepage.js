import React, { Component } from 'react';
import'./layout/BaseLayoutStyle.css';
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <>
        <div className="homepage">
            <p>Welcome to Mesocycle.</p>

            <p> Mesocycle is an easy to use app that customizes and auto programs your workouts for an entire month.</p>

            <p>You may be asking yourself, what the heck is a mesocycle?</p>

            <p>A mesocycle is a specific block of training designed to accomplish a certain goal, typically in a 3-4 week timetable. In addition, …. blah, blah, words, words, more words.

            Let’s get to work. You got this.</p>

            <p>We’ll need a few pieces of information like which movements you prefer based on equipment availability and your 10 repetition maximum (10RM) for each movement in order to customize your training program. 

            Don’t go and start maxing out just yet big guy, just give us a conservative guestimate. You can adjust it later.</p>
        </div>
        <div className="d-flex justify-content-center">
            <Link to="/RepMax" className="btn continueButton">Continue</Link>      
        </div>
      </>
    )
  }
}

export default Homepage
