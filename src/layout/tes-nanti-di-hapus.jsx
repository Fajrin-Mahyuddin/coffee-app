/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const coba = () => 'oke';
// === ==
export class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: 'okeeeee',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isLoad: 'yaaaa' });
  }

  render() {
    const { isLoad } = this.state;
    return (
      <div>
        {isLoad}
      </div>
    );
  }
}

export default Test;
