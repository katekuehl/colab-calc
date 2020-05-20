import React, { Component } from 'react';
import CalcButton from './Button.js';
import Button from 'react-bootstrap/Button';
import './TextEdit.css';

class TextEdit extends Component {
  render() {
    return (
      <div id="calculator">
        <h3>
          Collaborative Calculator
        </h3>
        <textarea
          placeholder="Write something here..."
          >
        </textarea>
        <table id="calctable">
            <tr>
                <CalcButton text="7"/><CalcButton text="8"/><CalcButton text="9"/><CalcButton text="/"/>
            </tr>
            <tr>
                <CalcButton text="4"/><CalcButton text="5"/><CalcButton text="6"/><CalcButton text="*"/>
            </tr>
            <tr>
                <CalcButton text="1"/><CalcButton text="2"/><CalcButton text="3"/><CalcButton text="-"/>
            </tr>
            <tr>
                <CalcButton text="C"/><CalcButton text="0"/><CalcButton text="."/><CalcButton text="+"/>
            </tr>
        </table>
        <Button id="enter">Enter</Button>
      </div>
    );
  }
}
export default TextEdit;