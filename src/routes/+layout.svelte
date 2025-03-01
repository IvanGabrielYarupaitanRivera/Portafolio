<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Pattern from '$lib/components/Pattern.svelte';

	injectSpeedInsights();

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta name="google-site-verification" content="b5MzFocA58lCyfnxQLSfHhJQ8ZgCidavKX9YP88bVbw" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="relative flex min-h-screen flex-col bg-green-100 dark:bg-neutral-950">
	<Pattern />

	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container z-10 mx-auto flex flex-1 py-6">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>

<style>
	:root::view-transition-old(root) {
		animation-duration: 300ms;
	}

	:root::view-transition-new(root) {
		animation-duration: 300ms;
	}
</style>
