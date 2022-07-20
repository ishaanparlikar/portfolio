<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { t } from '../../../locales/i18n';

	let animation = false;

	onMount(() => {
		animation = !animation;
	});
</script>

{#if animation}
	<div transition:fly|local={{ y: 200, duration: 2000 }} class="relative w-24 h-full">
		<div class="w-full h-full absolute px-2 flex flex-col justify-end  items-center">
			<span class="py-6 h-full">
				<hr class="bg-accent w-[1px] h-full" />
			</span>
			<ul class="flex flex-col h-1/3 justify-between">
				<li
					class="text-base-100 hover:text-neutral bg-primary shadow shadow-inner rounded-md hover:bg-secondary flex items-center p-2"
					transition:fly|local={{ x: 200, duration: 2300 }}
				>
					<a target="_blank" href={$t('githubLink')}>
						<Icon height="30" width="30" icon="iconoir:github" />
					</a>
				</li>
				<li
					class="text-base-100 hover:text-neutral bg-primary shadow shadow-inner rounded-md hover:bg-secondary flex items-center p-2"
					transition:fly|local={{ x: 300, duration: 2500 }}
				>
					<a target="_blank" href={$t('linkedInLink')}>
						<Icon height="30" width="30" icon="dashicons:linkedin" />
					</a>
				</li>
				<li
					class="text-base-100 hover:text-neutral bg-primary shadow shadow-inner rounded-md hover:bg-secondary flex items-center p-2"
					transition:fly|local={{ x: 400, duration: 2800 }}
				>
					<a target="_blank" href={$t('devTo')}>
						<Icon height="30" width="30" icon="cib:dev-to" />
					</a>
				</li>
			</ul>
			<span class="py-6 h-1/3">
				<hr class="bg-accent w-[1px] h-full" />
			</span>
		</div>
	</div>
{/if}
