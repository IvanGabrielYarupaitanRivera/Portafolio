<script lang="ts">
	import { Mail, CircleUserRound, MessageSquareMore } from 'lucide-svelte';

	let formData = {
		nombre: '',
		email: '',
		mensaje: ''
	};
</script>

<article class="container mx-auto p-4">
	<h2 class="heading-2 my-shadow my-border my-bg mb-12 border-2 px-8 py-4">¡Hablemos!</h2>

	<form
		method="POST"
		action="?/send"
		class="my-shadow my-border my-component-bg border-2 px-8 py-8 md:px-16"
	>
		<label class="mb-6 block">
			<span class="p flex items-center gap-2 font-bold">
				<CircleUserRound size={20} class="my-stroke" aria-hidden="true" />
				<span>Nombre</span>
			</span>
			<input
				type="text"
				required
				bind:value={formData.nombre}
				placeholder="Escribe tu nombre"
				class="my-border my-shadow p mt-2 w-full border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
			/>
		</label>

		<label class="mb-6 block">
			<span class="p flex items-center gap-2 font-bold">
				<Mail size={20} class="my-stroke" aria-hidden="true" />
				<span>Email</span>
			</span>
			<input
				type="email"
				required
				bind:value={formData.email}
				placeholder="Escribe tu email"
				class="my-border my-shadow p mt-2 w-full border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
			/>
		</label>

		<label class="mb-8 block">
			<span class="p flex items-center gap-2 font-bold">
				<MessageSquareMore size={20} class="my-stroke" aria-hidden="true" />
				<span>Mensaje</span>
			</span>
			<textarea
				required
				bind:value={formData.mensaje}
				placeholder="Escribe tu mensaje"
				class="my-border my-shadow p mt-2 w-full resize-none border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950"
			></textarea>
		</label>

		<button
			type="submit"
			class="my-effect my-border my-bg p my-shadow mb-4 w-full border-2 px-6 py-3 font-bold"
		>
			Enviar mensaje
		</button>
	</form>
</article>

<style>
	textarea {
		field-sizing: content;
	}
</style>
