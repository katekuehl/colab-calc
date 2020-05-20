import React, { Component } from 'react';
import CalcButton from './Button.js';
import Button from 'react-bootstrap/Button';
import './TextEdit.scss';

class TextEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
          text: "",
          log: []
        };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick = (value) => {
        this.setState({text: this.state.text + value});
      }

    handleChange = (e) => {
        this.setState({text: e.target.value});
      }


  render() {
    return (
      <div id="calculator">
        <h1>
          Collaborative Calculator
        </h1>
        <input
          placeholder="Type Here..."
          value={this.state.text}
          onChange={(e) => {this.handleChange(e)}}
          >
        </input>
        <table id="calctable">
            <tbody>
                <tr>
                    <CalcButton value="7" handleClick={this.handleClick}/>
                    <CalcButton value="8" handleClick={this.handleClick}/>
                    <CalcButton value="9" handleClick={this.handleClick}/>
                    <CalcButton value="/" handleClick={this.handleClick}/>
                </tr>
                <tr>
                    <CalcButton value="4" handleClick={this.handleClick}/>
                    <CalcButton value="5" handleClick={this.handleClick}/>
                    <CalcButton value="6" handleClick={this.handleClick}/>
                    <CalcButton value="*" handleClick={this.handleClick}/>
                </tr>
                <tr>
                    <CalcButton value="1" handleClick={this.handleClick}/>
                    <CalcButton value="2" handleClick={this.handleClick}/>
                    <CalcButton value="3" handleClick={this.handleClick}/>
                    <CalcButton value="-" handleClick={this.handleClick}/>
                </tr>
                <tr>
                    <CalcButton value="C" handleClick={this.handleClick}/>
                    <CalcButton value="0" handleClick={this.handleClick}/>
                    <CalcButton value="." handleClick={this.handleClick}/>
                    <CalcButton value="+" handleClick={this.handleClick}/>
                </tr>
            </tbody>
        </table>
        <Button id="enter">Enter</Button>
      </div>
    );
  }
}
export default TextEdit;