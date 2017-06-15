import React, { Component } from 'react';

class LangInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "",
    }
  }
  render() {
    return <div>
      <input value={this.state.lang} />
      <button>Submit</button>
    </div>
  }
}

export default LangInput;
