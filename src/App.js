import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/Userinput';
import UserOutput from './UserOutput/Useroutput';

class App extends Component {


  state = {
    username: "Maximuss"
  }

  usernameChangedHandler = (newinput) => {
    this.setState({
      username: newinput.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment 1</h1>
        </header>

        <UserOutput
          name={this.state.username} />
        <UserInput
          name = {this.state.username}
          changed={this.usernameChangedHandler} />

      </div>
    );
  }
}

export default App;
