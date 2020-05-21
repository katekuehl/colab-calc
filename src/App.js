import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator';
import Log from './components/Log';
import { evaluate } from 'mathjs';

class App extends Component  {

  constructor(props) {
      super(props);
      this.state = {
        logs: []
      };
    }

    componentDidMount() {
      this.updateLogs()
      setInterval(this.updateLogs, 300);
    }

  updateLogs = () => {
    fetch("/get_logs")
            .then(response => response.json())
            .then(data => this.setState({ logs: data }));
  }

  submit = (log) => {
    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ log: log })
        };
    fetch('/new_log', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            } else {
                this.updateLogs()
            }
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
  }

  onEnter = (calculation) => {
    var text = ""
    try {
       text = calculation + " = " + evaluate(calculation);
    } catch (err) {
       text = calculation + " = Can not evaluate";
    }
    this.submit(text)
    }

  render() {
    return (
         <div id="container">
            <Calculator onEnter={this.onEnter}/>
            <Log logs={this.state.logs}/>
         </div>
      );

  }
}

export default App;

