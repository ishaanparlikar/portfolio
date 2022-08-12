<script>
	import Button from '$lib/components/atoms/Button.svelte';
	import ThemeToggle from '$lib/components/atoms/ThemeToggle.svelte';
	// @ts-ignore
	import navlinks from '/static/data/Navlinks.json';
	import { page } from '$app/stores';
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
		<Button>Resume</Button>

		<div class="ml-6">
			<ThemeToggle />
		</div>
	</div>

<style>
</style>
