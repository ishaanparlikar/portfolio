<script lang="ts">
	export let href: any='';
</script>

{#if href}
	<a
		class={`btn bg-transparent border border-accent text-accent border-2 hover:text-primary hover:bg-accent hover:border-neutral`}
		href={`${href}`}
	>
		<slot />
	</a>
{:else}
	<button
		class={`btn bg-transparent border border-accent text-accent border-2 hover:text-primary hover:bg-accent hover:border-neutral leading-[3.3]`}
	>
		<slot />
	</button>
{/if}

