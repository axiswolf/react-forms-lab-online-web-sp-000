import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username"
            name="username"
            type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            name="password"
            type="password"
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
