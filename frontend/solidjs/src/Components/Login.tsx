import { createSignal, Show } from 'solid-js';
import type { Component } from 'solid-js';

import { useStore } from '../store';

const Login: Component = () => {
  const [, { login }] = useStore();
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');

  const tryLogin = () => {
    login(username(), password());
  };

  return (
    <div
      class={`container d-flex flex-column min-vh-100 justify-content-center`}
      style="width: 50rem; margin-top: -1rem;"
    >
      <img src="https://via.placeholder.com/468x60/000000/FFFFFF?text=Your+Logo+Here" />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Login</h5>
          <div class="input-group mb-3">
            <span
              class="input-group-text justify-content-center"
              id="username-prefix"
              style="width: 2.5rem;"
            >
              @
            </span>
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="username-prefix"
              value={username()}
              onInput={(event) =>
                setUsername((event.target as HTMLTextAreaElement).value)
              }
            />
          </div>
          <div class="input-group mb-3">
            <span
              class="input-group-text justify-content-center"
              id="password-prefix"
              style="width: 2.5rem;"
            >
              *
            </span>
            <input
              type="password"
              name="password"
              class="form-control"
              aria-describedby="password-prefix"
              placeholder="Password..."
              aria-label="Password"
              value={password()}
              onInput={(event) =>
                setPassword((event.target as HTMLTextAreaElement).value)
              }
            />
          </div>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary" onClick={tryLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
