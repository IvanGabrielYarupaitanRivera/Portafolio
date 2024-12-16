<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { animate } from 'motion';

	let { children } = $props();
	let mainContent: HTMLElement;

	$effect(() => {
		if ($page.url.pathname && mainContent) {
			animate(
				mainContent,
				{
					opacity: [0, 1]
				},
				{
					duration: 1,
					ease: [0.5, 0, 0.5, 1]
				}
			);
		}
	});
</script>

<div class="flex min-h-screen flex-col bg-green-300 dark:bg-neutral-950">
	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container mx-auto flex-1">
		<div bind:this={mainContent}>
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
