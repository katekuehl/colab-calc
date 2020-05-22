import React, { Component } from "react";
import CalcButton from "./Button.js";
import Button from "react-bootstrap/Button";
import "./Calculator.scss";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    if (value === "C") {
      this.setState({ text: "" });
    } else {
      this.setState({ text: this.state.text + value });
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleEnter = () => {
    this.props.onEnter(this.state.text);
    this.setState({ text: "" });
  };

  keyPressed = (event) => {
    if (event.key === "Enter") {
      this.handleEnter();
    }
  };

  render() {
    return (
      <div id="calculator">
        <h1>Collaborative Calculator</h1>
        <input
          id="input"
          placeholder="Type Here..."
          onKeyPress={(e) => {
            this.keyPressed(e);
          }}
          value={this.state.text}
          onChange={(e) => {
            this.handleChange(e);
          }}
        ></input>
        <table id="calctable">
          <tbody>
            <tr>
              <CalcButton value="7" handleClick={this.handleClick} />
              <CalcButton value="8" handleClick={this.handleClick} />
              <CalcButton value="9" handleClick={this.handleClick} />
              <CalcButton value="/" handleClick={this.handleClick} />
            </tr>
            <tr>
              <CalcButton value="4" handleClick={this.handleClick} />
              <CalcButton value="5" handleClick={this.handleClick} />
              <CalcButton value="6" handleClick={this.handleClick} />
              <CalcButton value="*" handleClick={this.handleClick} />
            </tr>
            <tr>
              <CalcButton value="1" handleClick={this.handleClick} />
              <CalcButton value="2" handleClick={this.handleClick} />
              <CalcButton value="3" handleClick={this.handleClick} />
              <CalcButton value="-" handleClick={this.handleClick} />
            </tr>
            <tr>
              <CalcButton value="C" handleClick={this.handleClick} />
              <CalcButton value="0" handleClick={this.handleClick} />
              <CalcButton value="." handleClick={this.handleClick} />
              <CalcButton value="+" handleClick={this.handleClick} />
            </tr>
          </tbody>
        </table>
        <Button id="enter" onClick={this.handleEnter}>
          Enter
        </Button>
      </div>
    );
  }
}
export default Calculator;
