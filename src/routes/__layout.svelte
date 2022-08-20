<script lang="ts">
	import '$static/app.css';
	import LeftNavigation from '$lib/components/organisms/LeftNavigation.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Navbar from '$lib/components/organisms/Navbar.svelte';
	import Loader from '$lib/components/atoms/Loader.svelte';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 1500);
	});
</script>

{#if loading}
	<div class="flex items-center justify-center lg:h-full h-screen">
		<Loader duration="1.5s" size="85" />
	</div>
{:else}
	<div class="flex flex-col min-h-screen lg:h-full">
		<Navbar />
		<div class="flex min-h-screen lg:h-full">
			<LeftNavigation />
			<main class="w-full">
				<slot />
			</main>
		</div>
	</div>
	<Footer />
{/if}
