<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import Button from '../atoms/Button.svelte';
	import emailjs from '@emailjs/browser';
	import { goto } from '$app/navigation';
	import Modal from './Modal.svelte';
	let errorMessage: boolean = false;

	let name: String;
	let email: String;
	let subject: String;
	let message: String;

	let openModal: boolean = false;

	function toggleModal() {
		openModal = !openModal;
	}

	const handleSubmit = async () => {
		if (name == '' || email == '' || subject == '' || validateEmail(email) == false) {
			errorMessage = true;
			return;
		}
		if (validateEmail(email)) {
			await emailjs
				.send(
					import.meta.env.VITE_EMAILJS_serviceID,
					import.meta.env.VITE_EMAILJS_templateID,
					{ to_name: name, to_from: email, to_subject: subject, to_message: message },
					import.meta.env.VITE_EMAILJS_publicKey
				)
				.then(
					 (response) => {
						localStorage.setItem('form_submitted', 'true');
						goto('/contact', { replaceState: true });
						errorMessage = false;
						name == '';
						email == '';
						subject == '';
					},
					(err) => {
						console.log('Failed', err);
					}
				);
		}
	};

	const validateEmail = (email: any) => {
		var regex =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};
</script>

<div class="flex flex-col p-6 rounded-md gap-5">
	<a href="/contact">
		<Icon height="30" width="30" icon="bx:arrow-back" />
	</a>

	{#if errorMessage}
		<p class="text-red-600">Please fill all the fields</p>
	{/if}
	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-item  mb-5 mt-2 ">
			<input
				id="name"
				type="text"
				class="input input-neutral w-full bg-white my-2 text-primary font-secondary"
				bind:value={name}
				required
			/>
			<label for="name">Name</label>
		</div>

		<div class="form-item  mb-5 mt-2 ">
			<input
				id="email"
				type="text"
				class="input input-neutral w-full bg-white my-2 text-primary font-secondary"
				bind:value={email}
				required
			/>
			<label class={`${validateEmail(email) && email !== '' ? '' : 'error'}`} for="email"
				>Email</label
			>
		</div>
		<div class="form-item  mb-5 mt-2 ">
			<input
				id="subject"
				type="text"
				class="input input-neutral w-full bg-white my-2 text-primary font-secondary"
				bind:value={subject}
				required
			/>
			<label for="subject">Subject</label>
		</div>
		<div class="form-item  mb-5 mt-2 ">
			<textarea
				id="message_area"
				class="textarea textarea-neutral bg-white w-full text-primary font-secondary"
				bind:value={message}
			/>
			<label for="message_area">Message</label>
		</div>

		<Button>Send</Button>
	</form>
</div>

<Modal
	{openModal}
	title="Thank you"
	message="I will contanct you shortly. Redirecting"
	on:click={toggleModal}
/>

<style>
	.form-item {
		position: relative;
	}
	.form-item input,
	textarea {
		display: block;
		background: transparent;
		transition: all 0.3s ease;
		padding: 0 15px;
		color: var(--secondary);
		outline: 1px solid var(--neutral);
		outline-offset: 2px;
	}
	.form-item label {
		position: absolute;
		cursor: text;
		z-index: 2;
		top: 18px;
		left: 10px;
		font-size: 12px;
		font-weight: bold;
		padding: 0 10px;
		transition: all 0.3s ease;
		color: var(--secondary);
	}
	.form-item input:focus,
	textarea:focus {
		outline: 2.5px solid var(--neutral);
	}
	.form-item input:focus + label,
	.form-item input:valid + label,
	.form-item textarea:focus + label,
	.form-item textarea:valid + label {
		background: var(--primary);
		font-size: 11px;
		top: -5px;
	}
	.form-item input:focus + label.error {
		color: red;
	}
</style>
