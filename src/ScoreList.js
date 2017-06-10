import React, { Component } from 'react';
import {connect} from 'react-redux';

class ScoreList extends Component {
  showScores() {
    return this.props.score.map(i=> {
      return <li key={i.id}>{i.name}: {i.score}</li>
    })
  }
  render() {
    return <ul>{this.showScores()}</ul>
  }
}


const mapStateToProps = (state) => {
  return {score: state.score}
}

ScoreList = connect(mapStateToProps)(ScoreList)

export default ScoreList
