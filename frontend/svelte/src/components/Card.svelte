<script>
  export let title;
</script>

<div class="card relative flex flex-col bg-white p-5 mx-auto max-w-[90%] md:max-w-[80%]
        border-solid border-slate/50 rounded-xl border-1">
  <div class="flex flex-col gap-2">
    <h4>{title}</h4>
    <slot />
  </div>
</div>
