<script lang="ts">
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
		class="my-shadow my-border my-component-bg border-2 px-8 py-8 md:px-16 lg:px-24"
	>
		<label class="mb-6 block">
			<span class="p font-bold">Nombre</span>
			<input
				type="text"
				required
				bind:value={formData.nombre}
				class="my-border my-shadow mt-2 w-full border-2 p-3 focus:outline-none"
			/>
		</label>

		<label class="mb-6 block">
			<span class="p font-bold">Email</span>
			<input
				type="email"
				required
				bind:value={formData.email}
				class="my-border my-shadow mt-2 w-full border-2 p-3 focus:outline-none"
			/>
		</label>

		<label class="mb-8 block">
			<span class="p font-bold">Mensaje</span>
			<textarea
				required
				rows="2"
				bind:value={formData.mensaje}
				class="my-border my-shadow mt-2 w-full resize-none border-2 p-3 focus:outline-none"
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
