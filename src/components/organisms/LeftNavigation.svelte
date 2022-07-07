<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="relative w-24 h-full">
	<div class="w-full h-full absolute px-2 flex flex-col justify-end  items-center">
		<span class="py-6 h-full">
			<hr class="bg-accent w-[1px] h-full" />
		</span>
		<ul class="flex flex-col h-1/3 justify-between">
			<li
				class="text-base-100 hover:text-neutral bg-primary shadow shadow-inner rounded-md hover:bg-secondary flex items-center p-2"
			>
				<Icon height="30" width="30" icon="iconoir:github" />
			</li>
			<li
				class="text-base-100 hover:text-neutral bg-primary shadow shadow-inner rounded-md hover:bg-secondary flex items-center p-2"
			>
				<Icon height="30" width="30" icon="dashicons:linkedin" />
			</li>
			<li
				class="text-base-100 hover:text-neutral bg-primary shadow shadow-inner rounded-md hover:bg-secondary flex items-center p-2"
			>
				<Icon height="30" width="30" icon="cib:dev-to" />
			</li>
		</ul>
		<span class="py-6 h-1/3">
			<hr class="bg-accent w-[1px] h-full" />
		</span>
	</div>
</div>
