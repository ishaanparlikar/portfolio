<script type="ts">
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	export let title: string;
	export let animation = false;

	onMount(() => {
		animation = !animation;
	});
</script>

{#if animation}
	<div
		class="p-6 shadow-lg shadow-accent border border-accent flex flex-col items-center justify-center"
		transition:fade|local={{ delay: 250, duration: 800 }}
	>
		{#if title}
			<h2 class="text-3xl text-neutral">{title}</h2>
		{/if}
		<slot />
	</div>
{/if}
