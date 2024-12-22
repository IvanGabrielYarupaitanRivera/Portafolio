<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import type { ActionData } from './$types';
	import { Mail, User, MessageSquare } from 'lucide-svelte';

	let isLoading = $state(false);
	let showSuccess = $state(false);

	let { form }: { form: ActionData } = $props();

	const resetForm = () => {
		showSuccess = false;
		isLoading = false;
	};

	const handleSubmit = () => {
		isLoading = true;

		return async ({ result }: { result: ActionResult }) => {
			if (result.type === 'success') {
				console.log('Mensaje enviado con éxito');
				console.log(form?.message);
			} else {
				console.log('Error al enviar el mensaje');
				console.log(form?.message);
			}

			isLoading = false;
			showSuccess = true;
		};
	};
</script>

<article class="p-4">
	<h2 class="heading-2 my-shadow my-border my-bg mb-12 border-2 px-8 py-4">
		{showSuccess ? 'Mensaje Enviado con éxito' : '¡Hablemos!'}
	</h2>

	<form
		method="POST"
		action="?/send"
		class="my-shadow my-border my-component-bg border-2 px-8 py-8 md:px-16"
		use:enhance={handleSubmit}
	>
		{#if showSuccess && !isLoading}
			<section class="flex flex-col items-center gap-8 p-8 text-center">
				<span class="animate-bounce text-6xl">🌞</span>
				<h3 class="heading-3">¡Gracias por tu mensaje!</h3>
				<p class="p">Me pondré en contacto contigo lo antes posible</p>
				<button
					onclick={resetForm}
					class="my-effect my-border my-bg p my-shadow border-2 px-6 py-3 font-bold"
					>Enviar otro mensaje</button
				>
			</section>
		{:else if !showSuccess}
			<fieldset class="min-w-full">
				<legend class="sr-only">Información de contacto</legend>

				<div class="mb-6 space-y-2">
					<label for="nombre" class="flex items-center gap-2 font-bold">
						<User size={20} class="my-stroke" aria-hidden="true" />
						<span class="p">Nombre</span>
					</label>
					<input
						id="nombre"
						type="text"
						name="nombre"
						required
						placeholder="Escribe tu nombre"
						class="my-border my-shadow p mt-2 w-full border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
					/>
				</div>

				<div class="mb-6 space-y-2">
					<label for="email" class="flex items-center gap-2 font-bold">
						<Mail size={20} class="my-stroke" aria-hidden="true" />
						<span class="p">Email</span>
					</label>
					<input
						id="email"
						type="email"
						name="email"
						required
						placeholder="Escribe tu email"
						class="my-border my-shadow p mt-2 w-full border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
					/>
				</div>

				<div class="mb-6 space-y-2">
					<label for="mensaje" class="flex items-center gap-2 font-bold">
						<MessageSquare size={20} class="my-stroke" aria-hidden="true" />
						<span class="p">Mensaje</span>
					</label>
					<textarea
						id="mensaje"
						name="mensaje"
						rows="5"
						required
						placeholder="Escribe tu mensaje"
						class="my-border my-shadow p mt-2 w-full resize-none border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
					></textarea>
				</div>

				<button
					type="submit"
					class="my-effect my-border my-bg p my-shadow mb-6 mt-12 flex w-full items-center justify-center overflow-hidden border-2 px-6 py-3 font-bold"
					disabled={isLoading}
				>
					{isLoading ? 'Enviando...' : 'Enviar mensaje'}
				</button>
			</fieldset>
		{/if}
	</form>
</article>

<style>
	textarea {
		field-sizing: content;
	}
</style>
