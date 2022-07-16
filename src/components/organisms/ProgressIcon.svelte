<script type="ts">
  import { onMount } from 'svelte';
  import Progress from 'src/components/atoms/Progress.svelte';
  import Icon from '@iconify/svelte';
  import { fly } from 'svelte/transition';

  export let iconType: string;
  export let progressValue: number;

  let animate = false;
  onMount(() => {
    animate = true;
  });
</script>

{#if animate}
  <div
    class="my-2 flex items-center gap-5"
    transition:fly|local={{ x: 200, duration: 15 * progressValue }}>
    <Icon height="50" width="50" icon={`${iconType}`} />
    <Progress value={progressValue} />
  </div>
{/if}
