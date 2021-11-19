<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const username = ref("");
const password = ref("");

const tryLogin = (username = "admin", password = "abcdef") => {
  store.dispatch("login", { username, password });
};
</script>

<template>
  <div
    class="container d-flex flex-column justify-content-center"
    style="width: 50rem; margin-top: -1rem"
  >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <div class="input-group mb-3">
          <span
            class="input-group-text justify-content-center"
            id="username-prefix"
            style="width: 2.5rem"
          >
            @
          </span>
          <input
            v-model="username"
            type="text"
            name="username"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="username-prefix"
          />
        </div>
        <div class="input-group mb-3">
          <span
            class="input-group-text justify-content-center"
            id="password-prefix"
            style="width: 2.5rem"
          >
            *
          </span>
          <input
            type="password"
            name="password"
            class="form-control"
            aria-describedby="password-prefix"
            v-model="password"
            placeholder="Password..."
            aria-label="Password"
          />
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-primary" @click="tryLogin">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
