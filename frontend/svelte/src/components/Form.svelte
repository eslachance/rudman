<script>
  import { tick } from 'svelte';

  import { todos } from '../stores/todos.js';
  import Button from './Button.svelte';
  
  let title;
  let input;
  const handleClickButton = async () => {
    const id = crypto.randomUUID();
    todos.add(title, id);
    await tick();
    input.focus();
    title = ""
  }

  function init(el){
    el.focus()
  }
</script>

<div class="flex mb-4 overflow-hidden">
  <input
    type="text"
    class="form-control todo-list-input"
    placeholder="What do you need to do today?"
    bind:value={title}
    bind:this={input}
    use:init
  />
  <Button invert on:click={handleClickButton}>Add</Button>
</div>
