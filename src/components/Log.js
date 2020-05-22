import React, { Component } from "react";
import "./Log.scss";

class Log extends Component {
  render() {
    return (
      <div id="log">
        <h2>Log</h2>
        <ol>
          {this.props.logs.map((log, index) => {
            return <li key={index}>{log.log}</li>;
          })}
        </ol>
      </div>
    );
  }
}
export default Log;
