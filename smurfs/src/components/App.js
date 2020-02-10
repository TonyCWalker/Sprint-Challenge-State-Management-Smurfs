import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village!</h1>
        <p>Add a new Smurf below!</p>
        <AddSmurfForm/>
        <SmurfList />
      </div>
    );
  }
}

export default App;
