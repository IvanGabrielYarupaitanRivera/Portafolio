<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { animate } from 'motion';

	let { children } = $props();
	let mainContent: HTMLElement;

	// Configuración global del sitio
	const siteName = 'Ivan Yarupaitan Rivera | Programador de Aplicaciones Web';
	const defaultDescription =
		'Portafolio profesional de Ivan Yarupaitan Rivera, programador de aplicaciones web especializado en Svelte, TypeScript, Supabase y desarrollo web moderno.';
	/* const siteUrl = 'https://ivanyarupaitan.dev'; */

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

<svelte:head>
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
	<!-- <meta property="og:url" content={siteUrl} /> -->
	<meta property="og:title" content={siteName} />
	<meta property="og:description" content={defaultDescription} />
	<!-- <meta property="og:image" content={`${siteUrl}/og-image.jpg`} /> -->
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta name="twitter:url" content={siteUrl} /> -->
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={defaultDescription} />
	<!-- <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} /> -->
</svelte:head>

<div class="flex min-h-screen flex-col bg-green-100 dark:bg-neutral-950">
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
