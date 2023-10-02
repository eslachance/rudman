import { onMount, Show } from 'solid-js';

import { useStore } from '../store';
import { Transition } from 'solid-transition-group';

import Login from './Login';

const Header = () => {
  const [state, { getUserInfo, logout }] = useStore();
  
  onMount(async () => {
    getUserInfo();
  });

  return (
    <>
      <nav
        class="py-2 bg-dark border-bottom"
        style={{
          height: state.auth.isLoggedIn ? '64px' : '100vh',
          transition: 'height 2s ease',
        }}
      >
        <Transition
          mode="outin"
          onEnter={(_el, done) => {
            const el = _el;

            el.style.opacity = '0';
            el.style.transition = '500ms opacity';
            document.body.clientWidth; // reflow
            // hide scrollbar
            document.body.style.overflow = 'hidden';

            el.style.opacity = '1';

            el.addEventListener('transitionend', (e) => {
              if (e.currentTarget !== e.target) return;
              el.style.opacity = '';
              el.style.transition = '';

              done();
            });
          }}
          onAfterEnter={() => {
            // restore scrollbar
            document.body.style.overflow = '';
          }}
          onExit={(_el, done) => {
            const el = _el;
            el.style.opacity = '1';
            el.style.transition = '500ms opacity';
            document.body.clientWidth; // reflow
            // hide scrollbar
            document.body.style.overflow = 'hidden';

            el.style.opacity = '0';

            el.addEventListener('transitionend', (e) => {
              if (e.currentTarget !== e.target) return;
              el.style.opacity = '';
              el.style.transition = '';

              done();
            });
          }}
          onAfterExit={() => {
            // restore scrollbar
            document.body.style.overflow = '';
          }}
        >
          <Show when={state.auth.isLoggedIn} fallback={<Login />}>
            <div class="container d-flex flex-wrap align-items-center">
              <ul class="nav me-auto">
                <li class="nav-item">
                  <a
                    href="https://www.solidjs.com/"
                    class="nav-link link-light px-2 active"
                    aria-current="page"
                  >
                    SolidJS Docs
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://codesandbox.io/s/reacthookedoncontext-t2n8e"
                    class="nav-link link-light px-2"
                  >
                    Codesandbox
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="https://discord.gg/solidjs"
                    class="nav-link link-light px-2"
                  >
                    Discord Help
                  </a>
                </li>
              </ul>
              <Show when={state.auth.isLoggedIn}>
                <div class="hstack gap-3 text-end">
                  <span class="nav-link link-light px-2">
                    {state.auth.username}
                  </span>
                  <button
                    type="button"
                    onClick={logout}
                    class="btn btn-outline-light me-2"
                  >
                    Logout
                  </button>
                </div>
              </Show>
            </div>
          </Show>
        </Transition>
      </nav>
      <Show when={state.auth.isLoggedIn}>
        <header class="py-3 mb-4 border-bottom">
          <div class="container d-flex flex-wrap justify-content-center">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
            >
              <span class="fs-4">Don't Forget Todo The Todo</span>
            </a>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0">
              <input
                type="search"
                class="form-control"
                placeholder="Filter..."
                aria-label="Filter"
              />
            </form>
          </div>
        </header>
      </Show>
    </>
  );
};

export default Header;
