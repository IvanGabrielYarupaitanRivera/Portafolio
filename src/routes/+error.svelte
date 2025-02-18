<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="flex grow items-center justify-center">
	<div class="  container mx-auto max-w-2xl rounded-xl p-8 text-center">
		<h1 class="heading-1 mb-2">Error {$page.status}</h1>
		<p class="mb-8 text-lg text-neutral-600">
			{$page.error?.message || 'Página no encontrada'}
		</p>
		<a
			href="/"
			class="my-border my-bg my-effect my-shadow inline-block rounded-xl border-2 px-6 py-3 font-bold text-neutral-950"
		>
			Volver al inicio
		</a>
	</div>
</section>
