import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  ITEM: 'toy'
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Box extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className='box'>
        <img src={require('../images/Box.png')} alt='toybox'/>
      </div>
    )
  }
}

export default DropTarget(Types.ITEM, {}, collect)(Box);