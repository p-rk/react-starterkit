import React, { Component } from 'react';

class MultipleInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isChecked: true
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const { target, target: { name }, target: { type } } = event; // destructing the target object
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(...formData.entries());
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          type="text"
          onChange={this.onChange}
          value={this.state.username}
        />
        <label htmlFor="isChecked">
          CheckBox
          <input
            type="checkbox"
            name="isChecked"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MultipleInputs;
