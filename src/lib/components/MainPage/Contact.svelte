<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Mail, User, MessageSquare } from 'lucide-svelte';
	import type { ActionData } from '../../../routes/$types';
	import ContactImage from '$lib/images/old-phone-contact-form.webp?enhanced';

	let { form }: { form: ActionData } = $props();

	let formStatus = $state({
		isSending: false,
		wasReset: false
	});

	const displayState = $derived({
		showForm: !form || formStatus.wasReset,
		showSuccess: form?.success === true && !formStatus.isSending && !formStatus.wasReset,
		showError: form?.success === false && !formStatus.isSending && !formStatus.wasReset
	});

	function resetForm() {
		formStatus.wasReset = true;
	}

	const handleSubmit = () => {
		formStatus.isSending = true;
		formStatus.wasReset = false;

		return async ({ update }: { update: () => Promise<void> }) => {
			await update();

			formStatus.isSending = false;
		};
	};
</script>

<header class="mb-16 text-center" aria-labelledby="contact-title">
	<div class="relative mb-6 inline-block">
		<h2 id="contact-title" class="heading-2 relative z-10 mx-4">
			{form?.success ? 'Mensaje Enviado' : '¡Hablemos de tu'}
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				{form?.success ? 'con Éxito' : 'Proyecto!'}
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		{#if displayState.showForm}
			Cuéntame sobre tu proyecto y cómo puedo ayudarte con
			<strong>desarrollo web profesional</strong>, <strong>aplicaciones personalizadas</strong> o
			<strong>integración de inteligencia artificial</strong>. Estoy especializado en crear
			<span class="font-medium">soluciones digitales a medida</span> que impulsan tu negocio.
		{:else if displayState.showSuccess}
			¡Gracias por contactarme! Revisaré tu mensaje y me pondré en contacto contigo en las próximas
			24-48 horas para conversar sobre tu proyecto de <strong>desarrollo web</strong> o
			<strong>aplicación personalizada</strong>.
		{:else if displayState.showError}
			Lo siento, ha ocurrido un problema al enviar tu mensaje. Por favor, inténtalo nuevamente o
			contáctame directamente a través de <a
				href="https://wa.me/51985942670"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium text-green-700 underline hover:text-green-900"
				>WhatsApp (+51 985942670)</a
			>.
		{/if}
	</p>
</header>

<form
	method="POST"
	action="?/send"
	class="my-shadow my-border my-component-bg rounded-xl border-2 px-8 pt-8 pb-6 md:px-16 md:pb-12"
	use:enhance={handleSubmit}
>
	{#if displayState.showForm}
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
						class="my-border my-shadow p mt-2 w-full rounded-xl border-2 bg-green-100 p-3 focus:outline-none"
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
						class="my-border my-shadow p mt-2 w-full rounded-xl border-2 bg-green-100 p-3 focus:outline-none"
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
						maxlength="500"
						minlength="10"
						required
						placeholder="Escribe tu mensaje (mínimo 10 caracteres)"
						class="my-border my-shadow p mt-2 w-full resize-none rounded-xl border-2 bg-green-100 p-3 focus:outline-none"
					></textarea>
				</div>

				<button
					type="submit"
					class=" my-border my-bg my-transition p my-shadow mt-12 mb-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 px-6 py-3 font-bold"
					disabled={formStatus.isSending}
				>
					{formStatus.isSending ? 'Enviando...' : 'Enviar mensaje'}
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
	{:else if displayState.showSuccess}
		<section class="flex flex-col items-center gap-8 p-8 text-center">
			<span
				class="animate-bounce text-6xl"
				role="img"
				aria-label="Emoji de sol sonriente indicando éxito">🌞</span
			>
			<h3 class="heading-3">¡Gracias por tu mensaje!</h3>
			<p class="p">Me pondré en contacto contigo lo antes posible</p>
			<button
				onclick={resetForm}
				type="button"
				class=" my-border my-bg my-transition p my-shadow cursor-pointer rounded-xl border-2 px-6 py-3 font-bold"
				>Enviar otro mensaje</button
			>
		</section>
	{:else if displayState.showError}
		<section class="flex flex-col items-center gap-8 p-8 text-center">
			<span class="animate-bounce text-6xl" role="img" aria-label="Emoji de ojo indicando error"
				>👁️</span
			>
			<h3 class="heading-3">¡Ocurrió un error!</h3>
			<p class="p">{form?.message}</p>
			<button
				onclick={resetForm}
				type="button"
				class="my-border my-bg my-transition p my-shadow cursor-pointer rounded-xl border-2 px-6 py-3 font-bold"
				>Intentar de nuevo</button
			>
		</section>
	{/if}
</form>

<style>
	textarea {
		field-sizing: content;
	}
</style>
