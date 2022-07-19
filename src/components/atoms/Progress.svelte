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

<progress
	class="progress progress-neutral w-56 border border-secondary"
	value={$progress}
	max="100"
	data-tip={`${progress}`}
/>
