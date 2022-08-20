<script>
	import Banner from '$lib/components/organisms/Banner.svelte';
	import { t } from '$lib/locales/i18n';
	// import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	// import { app } from '../firebase';

	// onMount(() => {
	// 	const analytics = getAnalytics(app);
	// 	logEvent(analytics, 'page_title');
	// });
</script>

<svelte:head>
	<title>{$t('name')} Portfolio</title>
	<meta name="description" content={`Portfolio of ${$t('name')} `}>
	<meta name="author" content={`${$t('name')}`}>  
	<meta name="Resume" content={`Resume of ${$t('name')} `}>
	<meta name="Keywords" content='Portfolio, Resume'>
	<meta name="LinkedIn" content={`LinkedIn ${$t('linkedInLink')} `}>
	<meta name="Github" content={`Github ${$t('githubLink')} `}>
	<meta name="keywords" content="HTML, CSS, JavaScript, React, UI Engineer, Front-End Developer, Front-end Engineer, NodeJS, Svelte , VueJs">

</svelte:head>

<template>
	<div class="flex items-center h-full justify-end">
		<Banner />
	</div>
</template>
