<script>
	// @ts-ignore
	import Button from '$lib/components/atoms/Button.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

  import { t } from "$lib/locales/i18n";
	let banner = false;
	onMount(() => {
		banner = true;
	});
</script>

{#if banner}
	<div
		transition:fade|local={{ delay: 500, duration: 800 }}
		class="px-32 flex flex-col items-end justify-center"
	>
		<small class="text-accent font-secondary text-lg mb-7">Hi, my name is</small>
		<h1 class="text-7xl text-neutral mt-5 mb-10 font-primary font-bold">{$t('banner.name')}</h1>
		<h2 class="text-7xl text-base-100 line-1">And I am a {$t('banner.proffession')}</h2>

		<div class="my-12" in:fly|local={{ x: 1000, duration: 1500 }}>
			<Button href='/projects'>Check out my projects</Button>
		</div>
	</div>
{/if}
