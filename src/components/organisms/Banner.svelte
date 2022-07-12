<script>
	import Button from '../atoms/Button.svelte';
	import { fade,fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	let banner = false;

	onMount(() => {
		banner = true;
	});
</script>

{#if banner}
	<div
		transition:fade={{ delay: 500, duration: 800 }}
		class="px-32 flex flex-col items-end justify-center"
	>
		<small class="text-accent font-secondary text-lg mb-7">Hi, my name is</small>
		<h1 class="text-7xl text-neutral mt-5 mb-10 font-primary font-bold">{`NAME`}</h1>
		<h2 class="text-7xl text-base-100">And I am a ...</h2>

		<div class="my-12" in:fly={{ x: 1000, duration: 1500 }}>
			<Button>Check out my projects</Button>
		</div>
	</div>
{/if}
