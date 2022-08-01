<script>
	import Icon from '@iconify/svelte';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { app } from '../../firebase';
	import projects from '/static/data/Projects.json';
	import Button from '$lib/components/atoms/Button.svelte';
	import { blur } from 'svelte/transition';
	import { t } from '$lib/locales/i18n';
	let animate = false;

	onMount(() => {
		animate = true;
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

{#if animate}
	<div
		transition:blur|local={{ amount: 300, duration: 1000 }}
		class="flex flex-wrap justify-start gap-8 h-full max-w-7xl mx-auto items-center"
	>
		{#each projects as project, i}
			<div class="card_ w-[30%] mx-auto relative border">
				<div class="bg-secondary p-3 card_data flex flex-1">
					<div class="flex gap-4 mb-2 w-full" />
					<div class="flex gap-2">
						<a class="text-primary hover:scale-110" href="/"
							><Icon height="20" width="20" icon="charm:github" /></a
						>
						<a class="text-primary hover:scale-110" href="/"
							><Icon height="20" width="20" icon="line-md:external-link" /></a
						>
					</div>
				</div>
				<div class="overflow-hidden w-full bg-primary p-4 mt-11">
					<h1 class="font-secondary mb-2">{project.title}</h1>
					<p class="mb-2 text-sm">{project.description}</p>
					<div class="flex gap-4">
						{#each project.stack as i}
							<Icon height="20" width="20" icon={`${i.logo}`} />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.btn {
		min-height: auto;
		height: 20px;
	}
	.card_ {
		height: 280px;
		overflow: hidden;
	}
	.card_data {
		box-shadow: 0 4px 6px 0 rgba(131, 134, 163, 0.12);
		overflow: hidden;
		width: 100%;
		height: 45px;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
