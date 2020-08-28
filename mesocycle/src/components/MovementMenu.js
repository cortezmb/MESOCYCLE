import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>              
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        </Row>
    </Container>
    )
  }
}

export default MovementMenu
