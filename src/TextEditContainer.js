import React, { Component } from "react";
import * as api from "./api";
import TextEdit from "./components/TextEdit.js";

class TextEditContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div>
        <TextEdit text={this.state.text} />
      </div>
    );
  }
}
export default TextEditContainer;
