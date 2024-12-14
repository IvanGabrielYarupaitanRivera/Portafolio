<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-sky-50 dark:bg-neutral-900">
	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container mx-auto flex-1 px-4 py-8">
		{#key $page.url.pathname}
			<div class="space-y-8">
				{@render children()}
			</div>
		{/key}
	</main>

	<!-- Footer -->
	<Footer />
</div>
