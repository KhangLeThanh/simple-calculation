import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 0,
      previousNumber: 0,
      currentNumber: 0,
      operator: "",
      temp: 0
    };
  }

  addToInput = val => {
    if (this.state.input === 0 || this.state.input === this.state.temp) {
      this.setState({
        input: val
      })
    }
    else {
      if (this.state.input.length < 30) {
        this.setState({
          input: this.state.input + val,
        })
      }
    }

  };


  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: 0 });
  };

  backspace = () => {
    if (this.state.input.length > 0) {
      this.setState({
        input: this.state.input.slice(0, -1)
      })

    }
    if (this.state.input.length === 1) {
      this.setState({
        input: 0
      })
    }

  };

  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "plus"
    })
  };

  subtract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "subtract"
    })
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "multiply"

    })
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "divide"
    })
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input: (parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)).toFixed(2),
        temp: (parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)).toFixed(2)
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          (parseFloat(this.state.previousNumber) -
            parseFloat(this.state.currentNumber)).toFixed(2),
        temp: (parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)).toFixed(2)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          (parseFloat(this.state.previousNumber) *
            parseFloat(this.state.currentNumber)).toFixed(2),
        temp: (parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)).toFixed(2)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          (parseFloat(this.state.previousNumber) /
            parseFloat(this.state.currentNumber)).toFixed(2),
        temp: (parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)).toFixed(2)
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="container mt-3">
          <div className="d-flex justify-content-start bg-secondary">
            <Input>{this.state.input === "" ? this.state.previousNumber : this.state.input}</Input>
          </div>
          <div className="d-flex justify-content-start bg-secondary">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.backspace}><i className="fas fa-backspace"></i></Button>
          </div>
          <div className="d-flex justify-content-start bg-secondary">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="d-flex justify-content-start bg-secondary">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="d-flex justify-content-start bg-secondary">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="d-flex justify-content-start bg-secondary last_row">
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
        </div>

      </div >
    );
  }
}

export default App;