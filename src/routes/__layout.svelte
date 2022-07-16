<script lang="ts">
	import '/static/app.css';
	import LeftNavigation from 'src/components/organisms/LeftNavigation.svelte';
	import Footer from 'src/components/organisms/Footer.svelte';
	import Navbar from 'src/components/organisms/Navbar.svelte';
	import Loader from 'src/components/atoms/Loader.svelte';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 1500);
	});
</script>

{#if loading}
	<div class="flex items-center justify-center h-full">
		<Loader duration="1.5s" size="85" />
	</div>
{:else}
	<div class="flex flex-col h-full">
		<Navbar />
		<div class="flex h-full items-center">
			<LeftNavigation />
			<div class="w-full">
				<slot />
			</div>
		</div>
	</div>
	<Footer />
{/if}
