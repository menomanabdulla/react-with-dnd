import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
const Types = {
  ITEM: 'utensil'
};
const itemSource = {
  beginDrag(props, monitor, component) {
    const item = { id: props.id }
    return item
  }
}
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
class Utensil extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;
    return connectDragSource(
      <div className='utensils'>
        {!isDragging && <img src={src} alt='utensil' />}
      </div>
    )
  }
}
export default DragSource(Types.ITEM, itemSource, collect)(Utensil)