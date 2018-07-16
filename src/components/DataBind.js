import React, { Component } from "react";

class DataBind extends Component {
  constructor() {
    super();
    this.state = {
      texto: 'Texto Inicial'
    }
  }

  handleChange(event) {
    this.setState({
      texto: event.target.value
    });
  }
  
  render() {
    return (
      <div className="AddProject">
        <br />
        <h3>2 way data binding</h3>
        <input type="text" value={this.state.texto} onChange={(event) => this.handleChange(event)}/>
        <h1>{this.state.texto}</h1>
        <br />
      </div>
    );
  }
}

export default DataBind;
