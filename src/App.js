import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "jo", age: "11" },
      { id: "2", name: "jojo", age: "22" },
      { id: "3", name: "jojojo", age: "33" }
    ],
    showPerson: false
  };

  handleChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleVisibility = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => {
                  this.handleChange(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    let classes;
    if (this.state.persons.length <= 2) {
      classes = "red";
    }
    if (this.state.persons.length <= 1) {
      classes = "red bold";
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes}>this is really working</p>
        <button style={style} onClick={this.toggleVisibility}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
