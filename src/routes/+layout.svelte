<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-zinc-300 dark:bg-zinc-950">
	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container mx-auto px-4 py-8">
		<div class="border-2 border-black p-8 dark:border-white">
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
