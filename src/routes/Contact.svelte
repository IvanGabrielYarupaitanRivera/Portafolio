<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail, User, MessageSquare } from 'lucide-svelte';

	let isLoading = $state(false);
	let showSuccess = $state(false);

	const resetForm = () => {
		showSuccess = false;
		isLoading = false;
	};

	const handleSubmit = () => {
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
			showSuccess = true;
		}, 1500);
	};
</script>

<article class="container mx-auto p-4">
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
				<span class="text-6xl">🌞</span>
				<h3 class="heading-3">¡Gracias por tu mensaje!</h3>
				<p class="p">Me pondré en contacto contigo lo antes posible</p>
				<button
					onclick={resetForm}
					class="my-effect my-border my-bg p my-shadow border-2 px-6 py-3 font-bold"
					>Enviar otro mensaje</button
				>
			</section>
		{:else if !showSuccess}
			<fieldset>
				<legend class="sr-only">Información de contacto</legend>

				<label class="mb-6 block">
					<span class="p flex items-center gap-2 font-bold">
						<User size={20} class="my-stroke" aria-hidden="true" />
						Nombre
					</span>
					<input
						type="text"
						name="nombre"
						required
						placeholder="Escribe tu nombre"
						class="my-border my-shadow p mt-2 w-full border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
					/>
				</label>

				<label class="mb-6 block">
					<span class="p flex items-center gap-2 font-bold">
						<Mail size={20} class="my-stroke" aria-hidden="true" />
						Email
					</span>
					<input
						type="email"
						name="email"
						required
						placeholder="Escribe tu email"
						class="my-border my-shadow p mt-2 w-full border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
					/>
				</label>

				<label class="mb-6 block">
					<span class="p flex items-center gap-2 font-bold">
						<MessageSquare size={20} class="my-stroke" aria-hidden="true" />
						Mensaje
					</span>
					<textarea
						name="mensaje"
						required
						placeholder="Escribe tu mensaje"
						class="my-border my-shadow p mt-2 w-full resize-none border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
					></textarea>
				</label>

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
