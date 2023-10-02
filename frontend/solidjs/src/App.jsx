import { Show } from 'solid-js';
import { Transition } from 'solid-transition-group';

import List from './Components/List'
import Form from './Components/Form';
import Header from './Components/Header';

import { useStore } from './store';

const App = () => {
  const [state] = useStore();

  return (
    <>
      <Header />
      <Transition name="fade">
        <Show when={state.auth.isLoggedIn}>
          <div class="container">
            <div class="card px-3">
              <div class="card-body">
                <h4 class="card-title">Your Todo List</h4>
                <Form />
                <List />
              </div>
            </div>
          </div>
        </Show>
      </Transition>
    </>
  );
};

export default App;
