<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();

	let { children } = $props();

	// Configuración global del sitio
	const siteName = 'Ivan Yarupaitan Rivera | Programador de Aplicaciones Web';
	const defaultDescription =
		'Portafolio profesional de Ivan Yarupaitan Rivera, programador de aplicaciones web especializado en Svelte, TypeScript, Supabase y desarrollo web moderno.';
	const siteUrl = 'https://mi-portafolio-ivan.vercel.app/';

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

<link rel="canonical" href={siteUrl} />

<svelte:head>
	<meta name="google-site-verification" content="b5MzFocA58lCyfnxQLSfHhJQ8ZgCidavKX9YP88bVbw" />

	<meta name="robots" content="index, follow" />

	<!-- Metadatos básicos -->
	<meta name="theme-color" content="#000000" />

	<!-- SEO básico -->
	<title>{siteName}</title>
	<meta name="description" content={defaultDescription} />
	<meta name="author" content="Ivan Gabriel Yarupaitan Rivera" />
	<meta
		name="keywords"
		content="desarrollador web, programador, full stack, Svelte, TypeScript, JavaScript, CSS, frontend, backend, desarrollo web"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-green-100 dark:bg-neutral-950">
	<!-- Header con navegación -->

	<Header />

	<!-- Contenido principal -->
	<main class="container mx-auto flex flex-1 px-4 py-6">
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
