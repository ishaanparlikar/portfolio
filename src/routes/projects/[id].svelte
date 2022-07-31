<script context="module" lang="ts">
	import projects from '/static/data/Projects.json';
	export async function load({ params }: any) {
		const id = params.id;
		const project = projects.find((p: any) => p.id == id);
		if (project) {
			return {
				props: {
					project
				}
			};
		}
		return {
			status: 404,
			error: new Error('Could Not Find the project')
		};
	}
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';

	export let project: any;
</script>

<div class="max-w-5xl mx-auto w-full flex flex-col justify-center">
	<div class="max-w-[900px] max-h-[568px] mx-auto overflow-hidden">
		<img class="object-cover w-full max-h-full" src={`${project.imageLink}`} alt="" />
	</div>

	<div class="my-4 text-center">
		<h1 class="text-3xl font-secondary mb-7">{project.title}</h1>
		<p>{project.description}</p>

		<div class="flex justify-center items-center gap-6 mt-7">
			<a href={`${project.projectLink}`} class="border-2 p-3 rounded-md border-neutral hover:text-accent">
				<Icon height="30" width="30"  icon="icon-park-outline:projector-one" />
			</a>
			<a href={`${project.github}`} class="border-2 p-3 rounded-md border-neutral hover:text-accent">
				<Icon height="30" width="30" icon="iconoir:github" />
			</a>
		</div>
	</div>
</div>
