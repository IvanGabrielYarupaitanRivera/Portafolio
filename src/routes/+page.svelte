<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';

	const title = 'Ivan Gabriel Yarupaitan Rivera | Programador de aplicaciones web';
	const description =
		'Bienvenido a mi portafolio profesional. Soy un programador de aplicaciones web especializado en Svelte, TypeScript y Supabase, creando soluciones web modernas y eficientes.';
	const keywords = 'Svelte, TypeScript, JavaScript, CSS, HTML, Desarrollo Web, Supabase';
	const pageUrl = 'https://www.vanchi.pro/';
	const pageType = 'website';

	let { form } = $props();

	const schemaData = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ivan Gabriel Yarupaitan Rivera',
		jobTitle: 'Programador de aplicaciones web',
		url: pageUrl,
		description: description,
		knowsAbout: keywords.split(', ')
	});
</script>

<svelte:head>
	<!-- SEO básico -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={pageUrl} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph específico -->
	<meta property="og:title" content={title} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={pageType} />

	<meta name="twitter:url" content={pageUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<main class="relative ml-3 mr-4 flex flex-col gap-16">
	<!-- Patrón de cuadrícula de fondo -->

	<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
		<HeroSection />
	</section>

	<section aria-label="Proyectos destacados" id="proyectos">
		<Projects />
	</section>

	<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
		<Contact {form} />
	</section>
</main>
