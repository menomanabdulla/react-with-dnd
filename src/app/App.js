import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Toy from './Components/Toy'
import Utensil from './Components/Utensil'
import Box from './Components/Box'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toys: [
      require('./images/Kite.png'), require('./images/Robot.png'),
      require('./images/Soccer.png'), require('./images/Trex.png'),
      ],
      utensils: [
        require('./images/Fish.png'), require('./images/Spoon.png'),
        require('./images/Knife.png'),
      ]
    }
  }
  deleteToy = (src) => {
    const currentState = this.state.toys
    const newState = currentState.filter((img) => {
      return img !== src
    })
    this.setState({
      toys: newState
    })
  }
  

  render() {
    const toys = this.state.toys.map((img, index) => {
      return <Toy src={img} id={index} key={index} handleDrop={(src) => this.deleteToy(src)}/>
    })
    const utensils = this.state.utensils.map((img, index) => {
      return <Utensil src={img} id={index} key={index} />
    })
    return (
      <div>
        {toys}
        {utensils}
        <Box />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);