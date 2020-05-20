import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class CalcButton extends Component {
  render() {
    return (
      <th>
        <Button class="calcButton" variant="primary">{this.props.text}</Button>
      </th>
    );
  }
}
export default CalcButton;