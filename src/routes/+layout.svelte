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
					duration: 0.5,
					ease: [0.35, 0, 0.25, 1]
				}
			);
		}
	});
</script>

<div class="flex min-h-screen flex-col bg-sky-50 dark:bg-neutral-900">
	<!-- Header con navegación -->
	<Header />

	<!-- Contenido principal -->
	<main class="container mx-auto flex-1 px-4 py-8">
		<div bind:this={mainContent} class="space-y-8">
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<Footer />
</div>
