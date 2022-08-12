<script lang="ts">
	export let color='';
	export let unit = 'px';
	export let duration = '1.5s';
	export let size = '60';
</script>

<div class="loader h-screen flex items-center justify-center" style="--size: {size}{unit}; --color:{color}; --duration: {duration};">
	<div class="sub_loader" />
	<div class="sub_loader" />
	<div class="sub_loader" />
</div>

<style >
  .loader {
    --color: var(--accent);
		width: var(--size);
		height: calc(var(--size) / 4);
		position: relative;
		display: block;
	}
	.sub_loader {
		width: calc(var(--size) / 4);
		height: calc(var(--size) / 4);
		position: absolute;
		left: 0%;
		top: 0;
		border-radius: 2px;
		background: var(--color);
		transform: translateX(-50%) rotate(45deg) scale(0);
		animation: diamonds var(--duration) linear infinite;
	}
	.sub_loader:nth-child(1) {
		animation-delay: calc(var(--duration) * 2 / 3 * -1);
	}
	.sub_loader:nth-child(2) {
		animation-delay: calc(var(--duration) * 2 / 3 * -2);
	}
	.sub_loader:nth-child(3) {
		animation-delay: calc(var(--duration) * 2 / 3 * -3);
	}

	@keyframes diamonds {
		50% {
			left: 50%;
			transform: translateX(-50%) rotate(45deg) scale(1);
		}
		100% {
			left: 100%;
			transform: translateX(-50%) rotate(45deg) scale(0);
		}
	}
</style>
