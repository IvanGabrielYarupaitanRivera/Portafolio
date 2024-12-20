<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail, CircleUserRound, MessageSquareMore } from 'lucide-svelte';

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
		}, 5500);
	};
</script>

<article class="container mx-auto p-4">
	<h2 class="header">
		{showSuccess ? 'Mensaje Enviado con éxito' : '¡Hablemos!'}
	</h2>

	<form method="POST" action="?/send" class="form-container" use:enhance={handleSubmit}>
		{#if showSuccess && !isLoading}
			<div class="success-message">
				<span class="text-6xl">🌞</span>
				<h3 class="heading-3">¡Gracias por tu mensaje!</h3>
				<p>Me pondré en contacto contigo lo antes posible</p>
				<button onclick={resetForm} class="btn">Enviar otro mensaje</button>
			</div>
		{:else if !showSuccess}
			{#each [{ label: 'Nombre', icon: CircleUserRound, type: 'text', name: 'nombre' }, { label: 'Email', icon: Mail, type: 'email', name: 'email' }, { label: 'Mensaje', icon: MessageSquareMore, type: 'textarea', name: 'mensaje' }] as field}
				<label class="form-field">
					<span class="field-label">
						<svelte:component this={field.icon} size={20} class="my-stroke" aria-hidden="true" />
						<span>{field.label}</span>
					</span>

					{#if field.type === 'textarea'}
						<textarea
							name={field.name}
							required
							placeholder="Escribe tu {field.name}"
							class="input-field"
						/>
					{:else}
						<input
							type={field.type}
							name={field.name}
							required
							placeholder="Escribe tu {field.name}"
							class="input-field"
						/>
					{/if}
				</label>
			{/each}

			<button type="submit" class="btn submit-btn" disabled={isLoading}>
				{isLoading ? 'Enviando...' : 'Enviar mensaje'}
			</button>
		{/if}
	</form>
</article>

<style>
	.header {
		@apply heading-2 my-shadow my-border my-bg mb-12 border-2 px-8 py-4;
	}

	.form-container {
		@apply my-shadow my-border my-component-bg border-2 px-8 py-8 md:px-16;
	}

	.success-message {
		@apply flex flex-col items-center gap-8 p-8 text-center;
	}

	.form-field {
		@apply mb-6 block;
	}

	.field-label {
		@apply p flex items-center gap-2 font-bold;
	}

	.input-field {
		@apply my-border my-shadow p mt-2 w-full resize-none border-2 bg-green-100 p-3 focus:outline-none dark:bg-neutral-950;
	}

	.btn {
		@apply my-effect my-border my-bg p my-shadow border-2 px-6 py-3 font-bold;
	}

	.submit-btn {
		@apply mb-6 mt-12 flex w-full items-center justify-center overflow-hidden;
	}

	textarea {
		field-sizing: content;
	}
</style>
