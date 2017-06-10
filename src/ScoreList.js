import React, { Component } from 'react';

class ScoreList extends Component {
  showScores() {
    return this.props.score.map(i=> {
      return <li>{i.name}: {i.score}</li>
    })
  }
  render() {
    return <ul>{this.showScores()}</ul>
  }
}

export default ScoreList