<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import Form from "./components/Form";
import List from "./components/List";

const store = useStore();

const isLoggedIn = computed(() => store.state.auth.isLoggedIn);
</script>

<template>
  <Header />
  <div class="container">
    <Login v-if="!isLoggedIn" />
    <div v-else class="card px-3">
      <div class="card-body">
        <h4 class="card-title">Your Todo List</h4>
        <Form />
        <List />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
