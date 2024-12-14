<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-sky-50 dark:bg-slate-950">
	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container mx-auto flex-1 px-4 py-8">
		<div
			class="rounded-3xl border-2 border-sky-900 bg-white p-8 dark:border-sky-300
                     dark:bg-slate-900"
		>
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
