import React, { Component } from "react";
import "./counter-button.styles.css";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button
        id="counter"
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        color={this.props.color}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
