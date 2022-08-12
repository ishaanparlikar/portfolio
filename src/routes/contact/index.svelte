<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import { getAnalytics, logEvent } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import { app } from '../../firebase';
	import { t } from '$lib/locales/i18n';	
	import Modal from '$lib/components/organisms/Modal.svelte';
	onMount(() => {
		const analytics = getAnalytics(app);
		logEvent(analytics, 'page_title');
	});

	let openModal:boolean=false
	
	function toggleModal(){
		openModal=!openModal
	}

</script>

<!-- <script context="module">
  export const hydrate = true;

</script> -->

<svelte:head>
	<title>Contact {$t('name')}</title>
	<meta name="description" content={`Contact ${$t('name')} `}>
	<meta name="email" content={`${$t('emailLink')} `}>
	<meta name="LinkedIn" content={`${$t('linkedInLink')} `}>
</svelte:head>

<div class="max-w-xl mx-auto min-h-screen flex flex-col justify-center px-8 lg:px-0 items-center">
	<div class="flex flex-col items-center justify-center ">
		<h1 class="text-5xl text-accent mb-10">Get In touch</h1>
		<p class="text- text-secondary font-secondary text-center mb-10">
			if you want to say Hello or If you have any questions, My inbox is always open for queries
		</p>
		{#if localStorage.getItem('form_submitted') !== 'true'}
			<Button href="/contact/form">Say Hi 👋🏼</Button>
			{:else}
			<Button onClickEvent={toggleModal} >Say Hi 👋🏼</Button>
		{/if}
	
			<Modal {openModal} title="Thank you" message="I will contanct you shortly"  on:click={toggleModal}/>

	</div>
</div>
