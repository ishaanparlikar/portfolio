<script>
	import Button from '../atoms/Button.svelte';
</script>

<div class="">
	<div class="navbar bg-primary-100 py-4">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="flex-none mr-10 text-sm">
			<ul class="menu menu-horizontal p-0 mx-5">
				<li>
					<a href="/about" class="hover:bg-secondary hover:text-primary">
						<span class="text-neutral p-0">01.</span>
						Item 1
					</a>
				</li>
				<li>
					<a href="/" class="hover:bg-secondary hover:text-primary">
						<span class="text-neutral p-0">02.</span>
						Item 2
					</a>
				</li>
				<li>
					<a href="/" class="hover:bg-secondary hover:text-primary"
						><span class="text-neutral p-0">03.</span>
						Item 3
					</a>
				</li>
			</ul>
			<Button>Resume</Button>
		</div>
	</div>
</div>

<style>
</style>
