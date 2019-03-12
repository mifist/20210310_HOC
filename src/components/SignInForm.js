import React, { Component } from "react";

const initState = { email: "", password: "" };

class SingInForm extends Component {
  state = {
    data: initState
  };

  handleChange = ({ target }) =>
    this.setState({
      data: { ...this.state.data, [target.name]: target.value }
    });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ data: initState });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={email}
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={password}
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default SingInForm;
