import React, { useContext } from "react";
import { StoreContext } from "../store";

import List from "./List";
import Form from "./Form";
import Header from "./Header";
import LoginForm from "./Login";

const App = () => {
  const [state] = useContext(StoreContext);
  return (
    <>
      <Header />
      <div className="container">
        <p>
          This is a slightly modified version of a{" "}
          <a href="https://codesandbox.io/s/reactreduxrendering-uj1if">
            react-redux codesandbox
          </a>{" "}
          that does the same thing this one does : a simple todo where the Form
          and List are separate components with no shared props or state, which
          demonstrates the main appeal of global state management. In this case,
          I'm using createContext, useContext, useReducer, instead of the redux
          hooks. The result is identical, and in my opinion simpler. However,
          the Context API does not fully replace react-redux, which offers a lot
          more. Here's a suggested read for you:{" "}
          <a href="https://frontarm.com/james-k-nelson/when-context-replaces-redux/">
            When Context Replaces Redux
          </a>
        </p>
        <p>
          Please review the source code of this app by clicking Codesandbox in
          the menu. Ignore the index.html and this fancy bootstrap template,
          it's just to pretend I can make half-decent-looking sites by
          copy/pasting examples, mmmkay?
        </p>
        {state.auth.isLoggedIn ? (
          <>
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">React Context Todo list</h4>
                <Form />
                <List />
              </div>
            </div>
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </>
  );
}

export default App;
