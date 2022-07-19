<script type="ts">
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	export let title: string;
	export let animation = false;
	export let styles: any;
	onMount(() => {
		animation = !animation;
	});
</script>

{#if animation}
	<div class="p-6 shadow-lg shadow-accent border border-accent">
		{#if title}
			<h2 class="text-3xl text-neutral text-center mb-10">{title}</h2>
		{/if}
		<div class={` ${styles}`} transition:fade|local={{ delay: 250, duration: 800 }}>
			<slot />
		</div>
	</div>
{/if}
