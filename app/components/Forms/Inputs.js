import React, { Component } from 'react';

class FormInputs extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value.toUpperCase() });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>{this.state.name}</div>
        <input type="text" onChange={this.onChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormInputs;