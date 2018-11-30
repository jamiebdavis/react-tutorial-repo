import React, { Component } from "react";
import styles from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] inside component will mount");
  }

  componentDidMount() {
    console.log("[Person.js] inside component did mount");
  }
  render() {
    console.log("[Person.js] inside render()");
    return (
      <div className={styles.Person}>
        <p onClick={this.componentDidMountprops}>
          im {this.props.name} and i am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
