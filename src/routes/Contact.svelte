<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Mail, User, MessageSquare } from 'lucide-svelte';
	import type { ActionData } from './$types';
	import PatternSection from '$lib/components/PatternSection.svelte';
	import ContactImage from '$lib/images/old-phone-contact-form.webp?enhanced';

	let { form }: { form: ActionData } = $props();

	let isSending = $state(false);

	const resetForm = () => {
		isSending = false;
	};

	const handleSubmit = () => {
		isSending = true;

		return async ({ update, result }: { update: () => Promise<void>; result: ActionResult }) => {
			await update();

			if (result.type === 'success') {
				console.log('Mensaje enviado con éxito');
			} else {
				console.log('Error al enviar el mensaje');
			}
		};
	};
</script>

<article class="container mx-auto">
	<header class="relative">
		<PatternSection />
		<h2 class="heading-2 my-shadow my-border my-bg mb-12 rounded-xl border-2 px-8 py-4">
			{form?.success ? 'Mensaje Enviado con éxito' : '¡Hablemos!'}
		</h2>
	</header>

	<form
		method="POST"
		action="?/send"
		class="my-shadow my-border my-component-bg rounded-xl border-2 px-8 pb-6 pt-8 md:px-16 md:pb-12"
		use:enhance={handleSubmit}
	>
		{#if form && isSending == true}
			{#if form.success}
				<section class="flex flex-col items-center gap-8 p-8 text-center">
					<span class="animate-bounce text-6xl">🌞</span>
					<h3 class="heading-3">¡Gracias por tu mensaje!</h3>
					<p class="p">Me pondré en contacto contigo lo antes posible</p>
					<button
						onclick={resetForm}
						class="my-effect my-border my-bg p my-shadow rounded-xl border-2 px-6 py-3 font-bold"
						>Enviar otro mensaje</button
					>
				</section>
			{:else}
				<section class="flex flex-col items-center gap-8 p-8 text-center">
					<span class="animate-bounce text-6xl">👁️</span>
					<h3 class="heading-3">¡Ocurrió un error!</h3>
					<p class="p">{form.message}</p>
					<button
						onclick={resetForm}
						class="my-effect my-border my-bg p my-shadow rounded-xl border-2 px-6 py-3 font-bold"
						>Intentar de nuevo</button
					>
				</section>
			{/if}
		{:else}
			<div class="grid gap-16 lg:grid-cols-2">
				<fieldset class="min-w-full">
					<legend class="sr-only">Información de contacto</legend>

					<div class="mb-6 space-y-2">
						<label for="nombre" class="flex items-center gap-2 font-bold">
							<User size={20} class="my-stroke-icon" aria-hidden="true" />
							<span class="p">Nombre</span>
							<span class="text-neutral-600" title="Obligatorio">(*)</span>
						</label>
						<input
							id="nombre"
							type="text"
							name="user_name"
							required
							placeholder="Escribe tu nombre"
							class="my-border my-shadow p mt-2 w-full rounded-xl border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
						/>
					</div>

					<div class="mb-6 space-y-2">
						<label for="email" class="flex items-center gap-2 font-bold">
							<Mail size={20} class="my-stroke-icon" aria-hidden="true" />
							<span class="p">Email</span>
							<span class="text-neutral-600" title="Obligatorio">(*)</span>
						</label>
						<input
							id="email"
							type="email"
							name="user_email"
							required
							placeholder="Escribe tu email"
							class="my-border my-shadow p mt-2 w-full rounded-xl border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
						/>
					</div>

					<div class="mb-6 space-y-2">
						<label for="mensaje" class="flex items-center gap-2 font-bold">
							<MessageSquare size={20} class="my-stroke-icon" aria-hidden="true" />
							<span class="p">Mensaje</span>
							<span class="text-neutral-600" title="Obligatorio">(*)</span>
						</label>
						<textarea
							id="mensaje"
							name="message"
							rows="5"
							required
							placeholder="Escribe tu mensaje"
							class="my-border my-shadow p mt-2 w-full resize-none rounded-xl border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
						></textarea>
					</div>

					<button
						type="submit"
						class="my-effect my-border my-bg p my-shadow mb-6 mt-12 flex w-full items-center justify-center overflow-hidden rounded-xl border-2 px-6 py-3 font-bold"
						disabled={isSending}
					>
						{isSending ? 'Enviando...' : 'Enviar mensaje'}
					</button>
				</fieldset>

				<div class="my-border my-shadow hidden rounded-xl border-2 lg:flex">
					<enhanced:img
						src={ContactImage}
						alt="Teléfono antiguo decorativo junto al formulario de contacto"
						width="600"
						height="800"
						loading="lazy"
						decoding="async"
						fetchpriority="low"
						class="h-full w-full rounded-xl object-cover object-center"
					/>
				</div>
			</div>
		{/if}
	</form>
</article>

<style>
	textarea {
		field-sizing: content;
	}
</style>
