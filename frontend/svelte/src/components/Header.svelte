<script>
  import { onMount } from 'svelte';
  import { loginStore } from '../stores/login';
  import Button from './Button.svelte';

  onMount(() => {
    loginStore.check();
  })
</script>

<div class="flex md:flex-row flex-col justify-between items-center p-3 mb-3 bg-white border-bottom shadow-md">
  <h1 class="my-0">
    RUDMAN Todo Example
  </h1>
  <nav class="my-2">
    <a class="p-2 text-dark" href="https://discord.gg/code">
      Discord Help
    </a>
    {#if $loginStore.loggedIn}
      <Button invert on:click={loginStore.logout}>Logout, {$loginStore.username}</Button>
    {/if}
  </nav>
</div>
<div class="px-3 py-3 mx-auto text-center">
  <h1 class="display-4">Example Todo List with Session Cookie</h1>
  <p class="lead">
    Cookie monster would be proud.{' '}
    <a
      href="https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452"
      target="_blank" rel="noreferrer"
    >
      Don't use JWT for this, kids
    </a>
    !
  </p>
</div>