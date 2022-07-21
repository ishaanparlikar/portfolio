<script>
	import Button from '../atoms/Button.svelte';
import ThemeToggle from '../atoms/ThemeToggle.svelte';
	// @ts-ignore
	import navlinks from '/static/data/Navlinks.json';
</script>

<div class="">
	<div class="navbar bg-primary-100 py-4 justify-between items-center">
		<div class="">
			<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="flex-1 text-sm justify-center">
			<ul class="menu menu-horizontal p-0 mx-5">
				{#each navlinks as nav, index}
					<li class="mx-4 ">
						<a href={nav.route} class="hover:bg-secondary hover:text-primary hover:scale-110">
							{nav.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<Button>Resume</Button>

		<div class="ml-6">
			<ThemeToggle/>
		</div>
	</div>
</div>

<style>
</style>
