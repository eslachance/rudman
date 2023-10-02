import { For } from 'solid-js';
import { marked } from 'marked';

import { useStore } from '../store';

const List = () => {
  const [state, { deleteTodo, toggleTodo }] = useStore();

  return (
    <div class="list-wrapper">
      <ul class="d-flex flex-column-reverse todo-list">
        <For each={state.todos.slice(0, 20)}>
          {(todo) => (
            <li class="d-flex flex-row align-items-center">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="checkbox"
                    checked={todo.completed}
                    type="checkbox"
                    onClick={() => toggleTodo(todo.id)}
                  />
                  <span innerHTML={marked.parse(todo.title)} />
                  <i class="input-helper" />
                </label>
              </div>
              <span class="remove" onClick={() => deleteTodo(todo.id)}>
                🗑
              </span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default List;
