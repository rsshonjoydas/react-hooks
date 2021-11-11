/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, preState) {
    document.title = `Clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} tiems
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
