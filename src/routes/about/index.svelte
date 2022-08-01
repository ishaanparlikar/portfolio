<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { app } from '../../firebase';
	import { onMount } from 'svelte';
	import { t } from '$lib/locales/i18n';

	const analytics = getAnalytics(app);
	let animate = false;
	
	onMount(() => {
		animate = true;
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>About {$t('name')}</title>
</svelte:head>

<div class="mx-auto flex items-center justify-between h-full max-w-4xl">
	{#if animate}
	<div class="border border-4 border-accent p-6 h-[500px] w-[300px]">
		<img transition:fade|local={{ delay: 100, duration: 300 }} class="grayscale hover:grayscale-0 transition-all delay-100 object-cover h-full w-full" src="https://picsum.photos/800/" alt="">
	</div>

	<div class="max-w-md">
		<h1 transition:fade|local={{delay: 250, duration: 800}} class="text-neutral text-7xl font-bold mb-10">{$t('name')}</h1>
		<p transition:fade|local={{ delay: 500, duration: 1000 }} class="text-accent font-secondary text-xl">{$t('about.description')}</p>
	</div>
	{/if}
</div>
