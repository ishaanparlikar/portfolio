<script lang="ts">
	import '../app.css';
	import LeftNavigation from '../components/organisms/LeftNavigation.svelte';
	import Footer from '../components/organisms/Footer.svelte';
	import Navbar from '../components/organisms/Navbar.svelte';
</script>

<template>
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
</template>
