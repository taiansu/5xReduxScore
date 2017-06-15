import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import LangButtons from './LangButtons.js';
import ScoreList from './ScoreList.js'
import LangInput from './LangInput.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <LangButtons />
        <ScoreList />
        <LangInput />
      </div>
    );
  }
}

export default App;
