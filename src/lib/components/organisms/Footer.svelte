<script>

import Icon from "@iconify/svelte";

</script>
<div class="lg:flex lg:flex-row flex-col lg:w-full md:w-96 mx-auto py-3 items-center justify-center lg:gap-4">
	<h4 class="text-xl text-center text-secondary">This site is powered by :</h4>
	<div class="flex items-center justify-center gap-1">
		<Icon height="30" width="30" icon={`logos:svelte-icon`} />
		<Icon height="30" width="30" icon={`logos:tailwindcss-icon`} />
		<Icon height="30" width="30" icon={`vscode-icons:file-type-vite`} />
		<Icon height="30" width="30" icon={`tabler:brand-vercel`} />
	</div>
</div>
