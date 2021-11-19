import React, { useEffect, useContext } from "react";
import { StoreContext } from "../store";

const Header = () => {
  const [state, dispatch] = useContext(StoreContext);
  useEffect(() => {
    dispatch({
      type: "GET_USER_INFO",
    });
  }, [dispatch]);

  const logout = () => {
    dispatch({
      type: "LOGOUT"
    });
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          React Context Todo
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a
            className="p-2 text-dark"
            href="https://codesandbox.io/s/reacthookedoncontext-t2n8e"
          >
            Codesandbox
          </a>
          <a className="p-2 text-dark" href="https://discord.gg/reactiflux">
            Discord Help
          </a>
          {state.auth.isLoggedIn && (
            <button
              type="button"
              onClick={logout}
              class="btn btn-outline-dark me-2"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Simple React Context Example</h1>
        <p className="lead">
          A dead-simple hooks and context example for comprehension.
        </p>
      </div>
    </>
  );
};

export default Header;
