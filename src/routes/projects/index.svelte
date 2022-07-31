<script>
		import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { app } from '../../firebase';
	import projects from '/static/data/Projects.json';

	onMount(() => {
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>


<div class="grid grid-cols-5 gap-8 h-auto max-w-7xl mx-auto h-full  px-10">
	{#each projects as project }
	<a class="bg-white max-h-72 max-w-7 hover:scale-110 transition-all relative" href={`/projects/${project.id}`}>
			<img class="object-cover h-full" src={`${project.imageLink}`} alt="">
	</a>
	{/each}
	
	

</div>

