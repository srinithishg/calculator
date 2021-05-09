import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      result: "",
      regexp: /^[0-9\b]+$/,
    };
    this.add = this.add.bind(this);
  }

  handleInput1 = (e) => {
    let input = e.target.value;
    if (input === "" || this.state.regexp.test(input)) {
      this.setState({ [e.target.name]: input });
    }
  };

  handleInput2 = (e) => {
    let input = e.target.value;
    if (input === "" || this.state.regexp.test(input)) {
      this.setState({ [e.target.name]: input });
    }
  };

  add = (e) => {
    this.setState({ [e.target.name]: e.target.value }, function () {
      this.setState({
        result:
          this.state.input1 +
          " + " +
          this.state.input2 +
          " = " +
          (Number(this.state.input1) + Number(this.state.input2)),
      });
    });
  };

  subtract = (e) => {
    this.setState({ [e.target.name]: e.target.value }, function () {
      this.setState({
        result:
          this.state.input1 +
          " - " +
          this.state.input2 +
          " = " +
          (Number(this.state.input1) - Number(this.state.input2)),
      });
    });
  };

  multiply = (e) => {
    this.setState({ [e.target.name]: e.target.value }, function () {
      this.setState({
        result:
          this.state.input1 +
          " * " +
          this.state.input2 +
          " = " +
          Number(this.state.input1) * Number(this.state.input2),
      });
    });
  };

  divide = (e) => {
    this.setState({ [e.target.name]: e.target.value }, function () {
      this.setState({
        result:
          this.state.input1 +
          " / " +
          this.state.input2 +
          " = " +
          Number(this.state.input1) / Number(this.state.input2),
      });
    });
  };

  render() {
    let { input1, input2, result } = this.state;
    return (
      <div className="center">
        <h1>Calculator</h1>
        <br></br>
        Input1 :{" "}
        <input
          type="text"
          name="input1"
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
          value={this.state.input2}
          onChange={this.handleInput2}
          maxLength={9}
          placeholder="Enter number"
        />
        <br></br>
        <br></br>
        <button
          name="+"
          className="button_list"
          onClick={this.add}
          disabled={input1 === "" || input2 === ""}
        >
          +
        </button>
        <button
          name="-"
          className="button_list"
          onClick={this.subtract}
          disabled={input1 === "" || input2 === ""}
        >
          -
        </button>
        <button
          name="*"
          className="button_list"
          onClick={this.multiply}
          disabled={input1 === "" || input2 === ""}
        >
          *
        </button>
        <button
          id="divide"
          className="button_list"
          onClick={this.divide}
          disabled={input1 === "" || input2 === ""}
        >
          /
        </button>
        <br></br>
        Result : <input type="text" value={result} />
      </div>
    );
  }
}
export default Calculator;
