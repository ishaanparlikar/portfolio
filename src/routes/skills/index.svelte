<script lang="ts">
	import ProgressIcon from 'src/components/organisms/ProgressIcon.svelte';
	import IconTypes from 'static/data/IconType.json';
	import Box from 'src/components/organisms/Box.svelte';
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

<div class="flex justify-center items-center px-32 gap-24 flex-wrap">
	<Box title="Programming/Markup">
		{#each IconTypes as icon}
			<div class="my-2 flex items-center gap-5">
				<ProgressIcon iconType={icon.logo} progressValue={icon.value} />
			</div>
		{/each}
	</Box>
	<Box title="Frameworks">
		{#each IconTypes as icon}
			<div class="my-2 flex items-center gap-5">
				<ProgressIcon iconType={icon.logo} progressValue={icon.value} />
			</div>
		{/each}
	</Box>
</div>
