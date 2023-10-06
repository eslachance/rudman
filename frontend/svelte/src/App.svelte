<script>
  import Header from './components/Header.svelte'
  import Form from './components/Form.svelte';
  import List from './components/List.svelte';
  import Login from './components/Login.svelte';

  import { loginStore } from './stores/login';
  import Card from './components/Card.svelte';
</script>

<main>
  <Header />
    {#if $loginStore.loggedIn}
      <Card title="Todos">
        <div class="flex flex-col">
          <Form />
          <List />
        </div>
      </Card>
    {:else}
      <p class="w-full text-center">
        To login, use any username and the password <kbd>abcdef</kbd>
      </p>
      <Login />
    {/if}
</main>

<style>
  
</style>
