import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.value);
  }

  render() {
    return (
      <td>
        <Button
          className="calcButton"
          variant="primary"
          onClick={this.handleClick}
        >
          {this.props.value}
        </Button>
      </td>
    );
  }
}
export default CalcButton;
