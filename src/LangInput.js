import React, { Component } from 'react';

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

export default LangInput;
