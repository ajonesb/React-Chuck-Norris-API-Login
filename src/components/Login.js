import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
import { AuthContext } from "../routing/Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            <input
              name="password"
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Log in
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
