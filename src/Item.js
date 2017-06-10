import React, { Component } from 'react';

class Item extends Component {
  // static propTypes = {
  //   lang: PropTypes.string.isRequired,
  // }
  static defaultProps = {
    age: 100,
  }
  render(){
    return (
      <button key={this.props.lang.id}
          onClick={() => {
            this.props.clickCallback(this.props.lang.name);
          }}>
        {this.props.lang.name}
      </button>
    )
  }
}

export default Item