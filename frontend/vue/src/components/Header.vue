<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

store.dispatch("fetchUser");

const isLoggedIn = computed(() => store.state.auth.isLoggedIn);

const logout = () => {
  store.dispatch("logout");
};
</script>

<template>
  <div
    class="
      d-flex
      flex-column flex-md-row
      align-items-center
      p-3
      px-md-4
      mb-3
      bg-white
      border-bottom
      shadow-sm
    "
  >
    <h5 className="my-0 mr-md-auto font-weight-normal">Vue VueX Todo</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <a
        className="p-2 text-dark"
        href="https://codesandbox.io/s/reacthookedoncontext-t2n8e"
      >
        Codesandbox
      </a>
      <a className="p-2 text-dark" href="https://discord.gg/reactiflux">
        Discord Help
      </a>
      <button
        v-if="isLoggedIn"
        type="button"
        @click="logout"
        class="btn btn-outline-dark me-2"
      >
        Logout
      </button>
    </nav>
  </div>
</template>
