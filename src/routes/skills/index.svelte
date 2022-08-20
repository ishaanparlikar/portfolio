<script lang="ts">
	import ProgressIcon from '$lib/components/organisms/ProgressIcon.svelte';
	import IconTypes from '$lib/assets/data/IconType.json';
	import Box from '$lib/components/organisms/Box.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { app } from '../../firebase';
	import { t } from '$lib/locales/i18n';	

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
	<meta name="description" content={`Skill set of ${$t('name')} `}>

</svelte:head>

<div class="flex justify-center h-full items-center px-4 md:px-24 lg:px-32 gap-10 flex-wrap">
	<Box styles="grid md:grid-cols-2 gap-5" title="Programming/Markup">
		{#each IconTypes.languages as icon}
			<div>
				<ProgressIcon iconType={icon.logo} progressValue={icon.value} />
			</div>
		{/each}
	</Box>
	<Box styles="grid md:grid-cols-2 gap-5" title="Frameworks">
		{#each IconTypes.frameworks as icon}
			<div>
				<ProgressIcon iconType={icon.logo} progressValue={icon.value} />
			</div>
		{/each}
	</Box>
	{#if animate}
	<Box styles="md:grid md:grid-cols-6 flex flex-wrap gap-5" title="Other Skills">
		{#each IconTypes.Others as icon, i}
				<span transition:fly|local={{ x: 200, duration: 15 * i }}>
					<Icon height="40" width="40" icon={`${icon.logo}`} />
				</span>
				{/each}
			</Box>
			{/if}
</div>
