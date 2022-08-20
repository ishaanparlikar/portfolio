<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import ThemeToggle from '$lib/components/atoms/ThemeToggle.svelte';
	// @ts-ignore
	import navlinks from '$lib/assets/data/Navlinks.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let navbar = false;
	let screen: any;
	onMount(() => {
		screen = window.screen.width;
	});
	const body = document.querySelector('body');
	function toggleNavbar() {
		navbar = !navbar;
		navbar ? body?.classList.add('overflow-hidden') : body?.classList.remove('overflow-hidden');
	}
</script>

<div class="lg:navbar bg-primary-100 py-4 justify-between items-center hidden ">
	<div class="">
		<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>
	<div class="flex-1 text-sm justify-center">
		<ul class="menu menu-horizontal p-0 mx-5">
			{#each navlinks as nav, index}
				<li class="mx-4">
					<a
						href={nav.route}
						sveltekit:prefetch
						class={`hover:bg-secondary hover:text-primary hover:scale-110 ${
							$page.url.pathname === nav.route ? 'bg-neutral text-primary' : ''
						}`}
					>
						{nav.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<a target="_blank" class="btn bg-transparent border border-accent text-accent border-2 hover:text-primary hover:bg-accent hover:border-neutral" href="/static/data/resume.pdf" download>Resume</a>
	{#if screen >= 1024}
		<div class="ml-6">
			<ThemeToggle />
		</div>
	{/if}
</div>

<div class="navbar relative lg:hidden">
	<div class="flex-1 text-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>

	<span class="btn btn-ghost btn-circle" on:click={toggleNavbar}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h7"
			/></svg
		>
	</span>
</div>

<div
	class={`${navbar ? `` : 'hidden'} absolute z-50 w-full h-full transition-all bg-primary top-16`}
>
	<ul tabindex="0" class="px-4 py-8 shadow left-0 w-full h-screen bg-primary">
		{#each navlinks as nav, index}
			<li
				class={`rounded-md hover:bg-secondary hover:text-primary ${
					$page.url.pathname === nav.route ? 'bg-neutral text-primary' : ''
				}`}
				on:click={toggleNavbar}
			>
				<a class="p-3 block w-full" href={nav.route} sveltekit:prefetch>
					{nav.name}
				</a>
			</li>
		{/each}
		{#if screen <= 1024}
			<div class="mt-10 text-center">
				<ThemeToggle />
			</div>
		{/if}
		<a href="/static/data/resume.pdf" class="btn bg-secondary text-primary w-full mt-10" download>Resume</a>
		
	</ul>
</div>
