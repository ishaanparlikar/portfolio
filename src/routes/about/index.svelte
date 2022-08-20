<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { app } from '../../firebase';
	import { onMount } from 'svelte';
	import { t } from '$lib/locales/i18n';
	import avatar from '$lib/assets/Images/avatar.png'
	const analytics = getAnalytics(app);
	let animate = false;
	
	onMount(() => {
		animate = true;
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>About {$t('name')}</title>
	<meta name="description" content={`About ${$t('name')} `}>
	<meta name="email" content={`${$t('emailLink')} `}>
	<meta name="LinkedIn" content={`${$t('linkedInLink')} `}>
</svelte:head>

<div class="mx-auto lg:flex items-center justify-center lg:justify-between h-full max-w-4xl px-8">
	{#if animate}
	<div class="border border-4 border-accent p-6 lg:h-[500px] lg:w-[300px]">
		<img transition:fade|local={{ delay: 100, duration: 300 }} class="lg:grayscale lg:hover:grayscale-0 transition-all delay-100 object-cover h-full w-full" src={avatar} alt={`${$t('name')} Image`}>
	</div>

	<div class="max-w-md flex flex-col justify-center lg:items-start items-center">
		<h1 transition:fade|local={{delay: 250, duration: 800}} class="text-neutral text-3xl lg:text-7xl font-bold lg:mb-10 my-5">{$t('name')}</h1>
		<p transition:fade|local={{ delay: 500, duration: 1000 }} class="text-accent font-secondary text-sm lg:text-xl">{$t('about.description')}</p>
	</div>
	{/if}
</div>
