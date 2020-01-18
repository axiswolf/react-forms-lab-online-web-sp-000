import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username"
            name="username"
            type="text"
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            name="password"
            type="password"
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
