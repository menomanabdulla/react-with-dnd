import React, { Component } from 'react'
import { DragSource } from 'react-dnd';

const Types = {
  ITEM: 'toy'
};

const itemSource = {
  beginDrag(props) {
    const item = { src: props.src, id: props.id }
    return item
  },
  endDrag(props, monitor, component) {
    return props.handleDrop(props.src)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Toy extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;
    return connectDragSource(
      <div className='toys'>
        {!isDragging && <img src={src} alt='toy' />}
      </div>
    )
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(Toy)