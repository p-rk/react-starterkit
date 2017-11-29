import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { option: 'veggies' };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ option: e.target.value });
  }
  render() {
    return (
      <select value={this.state.option} onChange={this.onChange}>
        <option value="fruits">Fruits</option>
        <option value="veggies">Veggies</option>
      </select>
    );
  }
}

export default CheckBox;
