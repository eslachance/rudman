<script>
  export let invert = false;
</script>

<button
  on:click
  class="ml-2 py-2 px-3 rounded-md add text-sm font-bold {invert ? 'text-blue bg-white border-solid border-2 border-blue' : 'bg-blue text-white border-0'}"
>
  <slot />
</button>
