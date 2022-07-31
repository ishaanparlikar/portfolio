<script>
	import Banner from '$lib/components/organisms/Banner.svelte';
	import { t } from '$lib/locales/i18n';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { app } from '../firebase';

	onMount(() => {
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>{$t('name')} Portfolio</title>
</svelte:head>

<template>
	<Banner />
</template>
