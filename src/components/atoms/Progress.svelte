<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  export let value: number;

  const progress = tweened(0, {
    duration: value * 50,
    easing: cubicOut
  });

  onMount(() => {
    progress.set(value);
  });
</script>

<div class="flex items-center gap-10">
  <progress
    class="progress progress-neutral w-56"
    value={$progress}
    max="100" />
</div>
