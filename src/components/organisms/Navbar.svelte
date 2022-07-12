<script>
	import Button from '../atoms/Button.svelte';
	// @ts-ignore
	import navlinks from '/static/data/Navlinks.json';
</script>

<div class="">
	<div class="navbar bg-primary-100 py-4">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="flex-none mr-10 text-sm">
			<ul class="menu menu-horizontal p-0 mx-5">
				{#each navlinks as nav, index}
					<li>
						<a href={nav.route} class="hover:bg-secondary hover:text-primary hover:scale-110">
							<span class="text-neutral p-0">{index+1}.</span>
							{nav.name}
						</a>
					</li>
				{/each}
			</ul>
			<Button>Resume</Button>
		</div>
	</div>
</div>

<style>
</style>
