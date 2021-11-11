/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  reset = () => {
    this.setState((prevState) => ({
      count: prevState.count * 0,
    }));
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  DecrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        Class Counter Two: {this.state.count}
        <button type="button" onClick={this.reset}>
          Reset
        </button>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
        <button type="button" onClick={this.DecrementCount}>
          Decrement
        </button>
      </div>
    );
  }
}

export default ClassCounterTwo;
