<script>
	import Button from '/src/components/atoms/Button.svelte';
	import { t, locale, locales } from '/locales/i18n';

	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { app } from '../../firebase';

	onMount(() => {
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="flex flex-col items-center justify-center max-w-sm mx-auto">
	<h1 class="text-5xl text-accent mb-10">Get In touch</h1>
	<p class="text- text-secondary font-secondary text-center mb-10">
		if you want to say Hello or If you have any questions, My inbox is always open for queries
	</p>
	<Button style="text-base font-secondary h-auto"><a href="/">Say Hi 👋🏼</a></Button>
</div>
