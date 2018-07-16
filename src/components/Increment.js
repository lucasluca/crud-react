import React, { Component } from "react";

class Increment extends Component {
  constructor() {
    super();
    this.state = { 
      value: 10,
      texto: ''
    };
  }
  mais() {
    this.setState({ value: this.state.value + 1 });
  }
  menos() {
    this.setState({ value: this.state.value - 1 });
  }
  render() {
    return (
      <div className="AddProject">
        <br />
        <h3>Incremento</h3>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.mais()}>Mais</button>
        <button onClick={() => this.menos()}>Menos</button>
        <br/>
      </div>
    );
  }
}

export default Increment;
