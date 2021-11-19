import type { Component, Accessor } from 'solid-js';
import { For } from 'solid-js';
import IconDelete from '~icons/mdi/delete';
import { marked } from 'marked';

import { useStore } from '../store';
import { Todo } from '../types';

const List: Component = () => {
  const [state, { deleteTodo, toggleTodo }] = useStore();

  return (
    <div class="list-wrapper">
      <ul class="d-flex flex-column-reverse todo-list">
        <For each={state.todos.slice(0, 20)}>
          {(todo: Todo, i) => (
            <li>
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
              <IconDelete
                class="remove mdi mdi-close-circle-outline"
                onClick={() => deleteTodo(todo.id)}
              />
              <i />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default List;
