import React, { useContext, useState } from "react";
import { StoreContext } from "../store";

const LoginForm = () => {
  const [, dispatch] = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const tryLogin = (ev) => {
    console.log(ev);
    dispatch({
      type: "LOGIN",
      payload: {
        username,
        password
      },
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <div className="input-group mb-3">
            <span
              className="input-group-text justify-content-center"
              id="username-prefix"
              style={{
                width: "2.5rem",
              }}
            >
              @
            </span>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="username-prefix"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text justify-content-center"
              id="password-prefix"
              style={{
                width: "2.5rem",
              }}
            >
              *
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              aria-describedby="password-prefix"
              placeholder="Password..."
              aria-label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={tryLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;