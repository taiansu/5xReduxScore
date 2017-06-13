import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item'

class LangButtons extends Component {
  langButtons() {
    return this.props.score.map(lang => {
      return <Item key={lang.id} lang={lang} />
    })
  }

  render() {
    return <div>{this.langButtons()}</div>
  }
}

const mapStateToProps = (state) => {
  return {score: state.score}
}

LangButtons = connect(mapStateToProps)(LangButtons)

export default LangButtons;
