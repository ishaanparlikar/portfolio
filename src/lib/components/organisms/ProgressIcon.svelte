<script type="ts">
	import { onMount } from 'svelte';
	import Progress from '$lib/components/atoms/Progress.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let iconType: string;
	export let progressValue: number;

	let animate = false;
	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div
		class="flex items-center gap-4 hover:scale-105 transition ease-in"
		transition:fly|local={{ x: 200, duration: 15 * progressValue }}
		
	>
		<Icon class=''  height="50" width="50" icon={`${iconType}`} />
		<Progress value={progressValue} />
		<!-- <div class="radial-progress" style={`--value:${progressValue};`}>
			<Icon class="" height="30" width="30" icon={`${iconType}`} />
		</div> -->
	</div>
{/if}