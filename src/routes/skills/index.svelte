<script lang="ts">
	import ProgressIcon from '/src/components/organisms/ProgressIcon.svelte';
	import IconTypes from '/static/data/IconType.json';
	import Box from '/src/components/organisms/Box.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { app } from '../../firebase';

	onMount(() => {
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});
	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<div class="flex justify-center items-center px-32 gap-10 flex-wrap">
	<Box styles="grid grid-cols-2 gap-5" title="Programming/Markup">
		{#each IconTypes.languages as icon}
			<div>
				<ProgressIcon iconType={icon.logo} progressValue={icon.value} />
			</div>
		{/each}
	</Box>
	<Box styles="grid grid-cols-2 gap-5" title="Frameworks">
		{#each IconTypes.frameworks as icon}
			<div>
				<ProgressIcon iconType={icon.logo} progressValue={icon.value} />
			</div>
		{/each}
	</Box>
	{#if animate}
	<Box styles="grid grid-cols-6 gap-5" title="Other Skills">
		{#each IconTypes.Others as icon, i}
				<div transition:fly|local={{ x: 200, duration: 15 * i }}>
					<Icon height="40" width="40" icon={`${icon.logo}`} />
				</div>
				{/each}
			</Box>
			{/if}
</div>
