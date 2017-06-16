import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addLang} from './AppActions';

class LangInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "",
    }
  }
  handleChange(event){
    this.setState({lang: event.target.value})
  }
  render() {
    return <div>
      <input value={this.state.lang} onChange={this.handleChange.bind(this)}/>
      <button>Submit</button>
    </div>
  }
}

var mapDispatchToProps = dispatch => {
  return {
    addLangCb(lang){
      dispatch(addLang(lang))
    }
  }
}

LangInput = connect(null, mapDispatchToProps)(LangInput);

export default LangInput;
