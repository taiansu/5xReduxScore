import React, { Component } from 'react';
import {connect} from 'react-redux';
import {tally} from './AppActions';

class Item extends Component {
  handleClick(){
    this.props.dispatch(tally(this.props.lang.name))
  }
  render(){
    return (
      <div>
        <span>
          {this.props.lang.name}
          <button onClick={this.handleClick.bind(this)}>Vote</button>
        </span>
      </div>
    )
  }
}

Item = connect()(Item)

export default Item
