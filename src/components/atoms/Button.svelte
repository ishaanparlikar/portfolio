<script lang="ts">
	export let style:any
	export let props={}
</script>

<button
	class={`btn bg-transparent border border-accent text-accent border-2 hover:text-primary hover:bg-accent hover:border-neutral ${style!='' ? style : ''}`}
	{...props}
>
	<slot />
</button>

<style>
	button {
		line-height: 3.3;
	}
</style>
