import { useContext } from 'react';
import { StoreContext } from './store';

import List from './components/List';
import Form from './components/Form';
import Header from './components/Header';
import LoginForm from './components/Login';

const App = () => {
  const { state } = useContext(StoreContext);
  return (
    <>
      <Header />
      <div className="container">
        {state.auth.isLoggedIn ? (
          <>
            <div className="card px-3">
              <div className="card-body">
                <Form />
                <List />
              </div>
            </div>
          </>
        ) : (
          <>
            <p>
              Example app with login system using cookies. To login, use any
              username and the password <kbd>abcdef</kbd>
            </p>
            <LoginForm />
          </>
        )}
      </div>
    </>
  );
}

export default App;
