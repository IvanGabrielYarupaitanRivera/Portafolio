<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { scale } from 'svelte/transition';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-sky-50 dark:bg-slate-950">
	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container relative mx-auto flex-1 px-4 py-8">
		{#key $page.url.pathname}
			<div
				class="absolute z-0 bg-sky-50 p-8 dark:bg-slate-950"
				transition:scale={{ duration: 500, opacity: 0.9 }}
			>
				{@render children()}
			</div>
		{/key}
	</main>

	<!-- Footer -->
	<Footer />
</div>
