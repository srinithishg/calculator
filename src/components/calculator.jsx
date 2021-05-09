import React, { Component } from "react";

class Calculator extends Component {
  state = {
    input1: "",
    input2: "",
    result: "",
    operator: "",
    regexp: /^[0-9\b]+$/,
  };

  handleInput1 = (e) => {
    let input = e.target.value;
    if (input === "" || this.state.regexp.test(input)) {
      this.setState({ [e.target.name]: input });
    }
    this.setState({ result: this.state.result });
  };

  handleInput2 = (e) => {
    let input = e.target.value;
    if (input === "" || this.state.regexp.test(input)) {
      this.setState({ [e.target.name]: input });
    }
    if (this.state.operator !== "") this.calculate();
  };

  calculate = (e) => {
    let operator = e.target.name;

    switch (operator) {
      case "+":
        this.setState({
          result:
            this.state.input1 +
            " + " +
            this.state.input2 +
            " = " +
            (Number(this.state.input1) + Number(this.state.input2)),
        });
        break;
      case "-":
        this.setState({
          result:
            this.state.input1 +
            " - " +
            this.state.input2 +
            " = " +
            (Number(this.state.input1) - Number(this.state.input2)),
        });
        break;
      case "*":
        this.setState({
          result:
            this.state.input1 +
            " * " +
            this.state.input2 +
            " = " +
            Number(this.state.input1) * Number(this.state.input2),
        });
        break;
      case "/":
        this.setState({
          result:
            this.state.input1 +
            " / " +
            this.state.input2 +
            " = " +
            (Number(this.state.input1) / Number(this.state.input2)).toFixed(2),
        });
        break;
      default:
        this.setState({
          result: "",
        });
    }
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
          className="button"
          onClick={this.calculate}
          disabled={input1 === "" || input2 === ""}
        >
          +
        </button>
        <button
          name="-"
          className="button"
          onClick={this.calculate}
          disabled={input1 === "" || input2 === ""}
        >
          -
        </button>
        <button
          name="*"
          className="button"
          onClick={this.calculate}
          disabled={input1 === "" || input2 === ""}
        >
          *
        </button>
        <button
          name="/"
          className="button"
          onClick={this.calculate}
          disabled={input1 === "" || input2 === ""}
        >
          /
        </button>
        <br></br>
        Result :{" "}
        <input
          type="text"
          value={result}
          disabled="disabled"
          onChange={this.calculate}
        />
      </div>
    );
  }
}
export default Calculator;
