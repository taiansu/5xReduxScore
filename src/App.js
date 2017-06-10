import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import LangButtons from './LangButtons.js';
import ScoreList from './ScoreList.js'
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <LangButtons />
        <ScoreList score={this.props.score}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {score: state.score}
}

App = connect(mapStateToProps)(App)

export default App;
