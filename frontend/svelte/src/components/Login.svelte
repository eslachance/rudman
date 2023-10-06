<script>
  import { loginStore } from '../stores/login';
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  let username;
  let password;

  // fucking magic
  $: {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }
  
  const tryLogin = () => {
    loginStore.login(username, password);
  }
</script>

<Card title="Login">
  <div class="input-group mb-3">
      <div class="flex">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
        </span>
      <input
        type="text"
        name="username"
        placeholder="Username"
        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        aria-label="Username"
        aria-describedby="username-prefix"
        bind:value={username}
      />
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="flex">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg fill="#000000" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 489.1 489.1" xml:space="preserve" class="w-5 h-5">
            <g>
              <g>
                <path d="M208.954,200.1v60.6l-1,147.3l-15.5-12c-19-16.6-63.8-37-99.8,2.4c-3.9,4.3-4.3,10.6-0.9,15.3c1,1.4,25.2,35.3,63.7,71.8
                  c4.9,4.7,12.7,4.4,17.3-0.5s4.4-12.7-0.5-17.3c-25.5-24.2-44.7-47.5-54.2-59.6c26.5-19.8,55,3.5,58.4,6.5c0.2,0.2,0.4,0.4,0.6,0.5
                  l35.4,27.3c3.7,2.8,8.7,3.4,12.8,1.3c4.2-2,6.8-6.3,6.9-10.9l1.2-172v-59.9c0-0.1,0-0.2,0-0.4c0.3-9.6,8-17.2,17.7-17.2
                  c9.8,0,17.7,7.9,17.7,17.7c0,0.5,0,1,0.1,1.5l13.4,111.8c0.6,5.4,4.8,9.7,10.1,10.6c0.8,0.1,83.4,14.3,142.4,52.8
                  c2.2,14.1,7.2,56.7-2.7,96.1c-1.7,6.6,2.3,13.2,8.9,14.9c1,0.3,2,0.4,3,0.4c5.5,0,10.5-3.7,11.9-9.3
                  c13.4-53.2,2.6-109.3,2.2-111.7c-0.6-3.1-2.4-5.9-5.1-7.7c-52.7-36.2-122.7-52.8-147.5-57.9l-12.3-102.2
                  c-0.4-22.9-19.2-41.4-42.2-41.4c-22.7,0-41,17.5-42.1,40.1C208.954,199.2,208.954,199.6,208.954,200.1z"/>
                <path d="M130.754,24.6h33.9c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S123.954,24.6,130.754,24.6z"/>
                <path d="M130.754,116.8h33.9c6.8,0,12.3-5.5,12.3-12.2s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S123.954,116.8,130.754,116.8z"/>
                <path d="M130.754,208.8h33.9c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S123.954,208.8,130.754,208.8z"/>
                <path d="M130.754,300.8h33.9c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S123.954,300.8,130.754,300.8z"/>
                <path d="M38.854,24.6h33.9c6.8,0,12.3-5.5,12.3-12.3S79.554,0,72.754,0h-33.9c-6.8,0-12.3,5.5-12.3,12.3S32.054,24.6,38.854,24.6z
                  "/>
                <path d="M38.854,116.8h33.9c6.8,0,12.3-5.5,12.3-12.2s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S32.054,116.8,38.854,116.8z"/>
                <path d="M38.854,208.8h33.9c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S32.054,208.8,38.854,208.8z"/>
                <path d="M222.554,24.6h33.9c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S215.854,24.6,222.554,24.6z"/>
                <path d="M222.554,116.8h33.9c6.8,0,12.3-5.5,12.3-12.2s-5.5-12.3-12.3-12.3h-33.9c-6.8,0-12.3,5.5-12.3,12.3
                  S215.854,116.8,222.554,116.8z"/>
              </g>
            </g>
            </svg>
        </span>
      <input
        type="password"
        name="password"
        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        aria-describedby="password-prefix"
        placeholder="abcdef"
        aria-label="Password"
        bind:value={password}
      />
      </div>
    </div>
    <div class="">
      <Button on:click={tryLogin}>Login</Button>
    </div>
</Card>