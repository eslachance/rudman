<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const title = ref("");
console.log(title.value);

const store = useStore();

const createTodo = () => {
  console.log(title, title.value);
  store.dispatch("createTodo", title);
};
</script>

<template>
  <div class="hstack gap-3">
    <input
      type="text"
      className="form-control todo-list-input"
      placeholder="What do you need to do today?"
      v-model="title"
      @input="handleChange"
      @keyup.enter="createTodo"
    />
    <button
      @click="createTodo"
      className="add btn btn-primary font-weight-bold todo-list-add-btn"
    >
      Add
    </button>
  </div>
</template>
