<script>
  import { marked } from 'marked';
  import { todos } from '../stores/todos.js';
  import Card from './Card.svelte';
</script>

<div class="w-full h-full">
  <ul class="flex flex-col p-0">
    {#each $todos as todo (todo.id)}
    <li
      class="
        flex py-1 px-0 border-2 border-b-solid border-slate-50 max-w-full
      "
      class:line-through={todo.completed}
    >
      <div class="form-check relative block pl-0 max-w-[90%] whitespace-nowrap my-1">
        <label class="block mb-0 ml-4 overflow-hidden cursor-pointer">
          <input
            class="absolute top-0 left-0 m-0 cursor-pointer opacity-0"
            bind:checked={todo.completed}
            type="checkbox"
            on:change={() => todos.toggle(todo)}
          />
          <span class="select-none">{@html marked.parse(todo.title)}</span>
        </label>
      </div>
      <button class="ml-auto border-0 bg-transparent cursor-pointer text-xl" on:click="{() => todos.remove(todo)}">
        🗑
      </button>
    </li>
    {/each}
    
  </ul>
</div>
