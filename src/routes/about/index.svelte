<script>
	import Card from '../../components/organisms/Card.svelte';

	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { app } from '../../firebase';
	import { onMount } from 'svelte';

	const analytics = getAnalytics(app);

	onMount(() => {
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div>
	<Card />
</div>
