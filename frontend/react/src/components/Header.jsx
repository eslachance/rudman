import { useEffect, useContext } from 'react';
import { StoreContext } from '../store';

const Header = () => {
  const { state, dispatch } = useContext(StoreContext);
  useEffect(() => {
    dispatch({
      type: 'GET_USER_INFO',
    });
  }, []);

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    });
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          RUDMAN Todo Example
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="https://discord.gg/code">
            Discord Help
          </a>
          {state.auth.isLoggedIn && (
            <button
              type="button"
              onClick={logout}
              className="btn btn-outline-dark me-2"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Example Todo List with Session Cookie</h1>
        <p className="lead">
          Cookie monster would be proud.{' '}
          <a
            href="https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452"
            target="_blank" rel="noreferrer"
          >
            Don&apos;t use JWT for this, kids
          </a>
          !
        </p>
      </div>
    </>
  );
};

export default Header;
