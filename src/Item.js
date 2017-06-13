import React, { Component } from 'react';

class Item extends Component {
  render(){
    return (
      <div>
        <span>
          {this.props.lang.name}
          <button>Vote</button>
        </span>
      </div>
    )
  }
}

export default Item
