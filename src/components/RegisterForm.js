import React, { Component } from "react";

const initState = { login: "", email: "", password: "", passwordConfirm: "" };

class RegisterForm extends Component {
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
    const { login, email, password, passwordConfirm } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={login}
              name="login"
              className="form-control"
              placeholder="Login"
            />
          </div>

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
          <div className="form-group">
            <input
              onChange={this.handleChange}
              value={passwordConfirm}
              name="passwordConfirm"
              className="form-control"
              placeholder="Password confirmation"
            />
          </div>

          <button className="btn btn-success">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
