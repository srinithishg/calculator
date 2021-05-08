import React, { Component } from "react";
import button from "./button";

class Calculator extends Component {
  state = {
    input1: null,
    input2: null,
    result: "",
    regexp: /^[0-9\b]+$/,
    backgroundColor: true,
  };

  handleInput1 = (e) => {
    let input1 = e.target.value;

    if (input1 === "" || this.state.regexp.test(input1)) {
      this.setState({ [e.target.name]: input1 });
    }
  };

  handleInput2 = (e) => {
    let input2 = e.target.value;
    if (input2 === "" || this.state.regexp.test(input2)) {
      this.setState({ [e.target.name]: input2 });
    }
    if (this.props.input1 !== null && this.props.input2 !== null) 
    this.setState({
      backgroundColor: false,
  })
}

  render() {
    return (
      <div className="center">
        <h1>Calculator</h1>
        <br></br>
        Input1 :{" "}
        <input
          type="text"
          name="input1"
          id="input1"
          value={this.state.input1}
          onChange={this.handleInput1}
          maxLength={9}
          placeholder="Enter number"
        />
        <br></br>
        <br></br>
        Input2 :{" "}
        <input
          type="text"
          name="input2"
          id="input2"
          value={this.state.input2}
          onChange={this.handleInput2}
          maxLength={9}
          placeholder="Enter number"
        />
        <br></br>
        <br></br>
        <button
          id="add"
          class="button_list"
          disabled={this.state.backgroundColor}
          value="+"
        >
          +
        </button>
        <button
          id="subtract"
          class="button_list"
          disabled={this.state.backgroundColor}
          value="-"
        >
          -
        </button>
        <button
          id="multiply"
          class="button_list"
          disabled={this.state.backgroundColor}
          value="*"
        >
          *
        </button>
        <button
          id="divide"
          class="button_list"
          disabled={this.state.backgroundColor}
          value="/"
        >
          /
        </button>
        <br></br>
        Result : <input id="result" onChange={this.handleResult} />
      </div>
    );
  }
}
export default Calculator;
