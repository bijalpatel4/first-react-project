import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";
import Counter from "./components/Counter";
class App extends Component {
  state = {
    count: 0,
    person: { name: "bijal", age: 22, gender: "female" }
  };
  persons = [
    { name: "paras", age: 24, gender: "male" },
    { name: "bhargav", age: 26, gender: "male" },
    { name: "amruta", age: 22, gender: "female" },
    { name: "sunny", age: 25, gender: "male" },
    { name: "Amba", age: 42, gender: "female" },
    { name: "kanta", age: 42, gender: "female" },
    { name: "John", age: 32, gender: "male" },
    { name: "Sam", age: 22, gender: "male" }
  ];
  generatePersonRandomly = () => {
    const random = Math.random();
    const index = Math.floor(random * this.persons.length);
    return this.persons[index];
  };

  checkGender = () => {
    if (this.state.person.gender === "male") {
      return "#4dd2ff";
    } else {
      return "pink";
    }
  };

  switchName = () => {
    this.setState({
      count: this.state.count + 1,
      person: this.generatePersonRandomly()
    });
  };

  render() {
    return (
      <div style={{ background: this.checkGender() }}>
        <div className="App">
          <h1>Change background color gender-wise.</h1>
          <Person person={this.state.person} />
          <Counter count={this.state.count} />
          <button
            onClick={this.switchName}
            className="btn btn-secondary btn-lg"
          >
            Click
          </button>
        </div>
      </div>
    );
  }
}

export default App;
