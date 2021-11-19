<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import IconDelete from "~icons/mdi/delete";
import { marked } from "marked";

const store = useStore();

console.log("Calling All Dispatch!");
store.dispatch("fetchAllTodos");

const todos = computed(() => store.state.todos);
console.log(todos);

const toggle = (id) => {
  store.dispatch("toggleTodo", id);
};

const deleteTodo = (id) => {
  store.dispatch("deleteTodo", id);
};
</script>

<template>
  <div class="list-wrapper">
    <ul class="d-flex flex-column-reverse todo-list">
      <li v-for="todo in todos" :key="todo.id">
        <div class="form-check">
          <label class="form-check-label">
            <input
              class="checkbox"
              v-model="todo.completed"
              type="checkbox"
              @click="toggle(todo.id)"
            />
            <span v-html="marked.parse(todo.title)" />
            <i class="input-helper" />
          </label>
        </div>
        <IconDelete
          class="remove mdi mdi-close-circle-outline"
          @click="deleteTodo(todo.id)"
        />
        <i />
      </li>
    </ul>
  </div>
</template>
