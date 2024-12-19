<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import Projects from './Projects.svelte';

	const pageTitle = 'Ivan Gabriel Yarupaitan Rivera | Programador de aplicaciones web';
	const pageDescription =
		'Bienvenido a mi portafolio profesional. Soy un programador de aplicaciones web especializado en Svelte, TypeScript y Supabase, creando soluciones web modernas y eficientes.';

	const skills = 'Svelte, TypeScript, JavaScript, CSS, HTML, Desarrollo Web, Supabase';
	const currentLocation = 'Junín, Perú';
</script>

<svelte:head>
	<!-- SEO específico de la página principal -->
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta name="currentLocation" content={currentLocation} />

	<!-- Open Graph específico -->
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />

	<!-- Metadata adicional específica -->
	<meta
		name="keywords"
		content={`portafolio desarrollo web, ${skills}, frontend developer, backend developer`}
	/>
</svelte:head>

<main class="relative">
	<section class="relative z-10 py-16 md:px-36" aria-label="Introducción y presentación">
		<HeroSection />
	</section>

	<section class="relative z-10" aria-label="Proyectos destacados">
		<Projects />
	</section>
</main>
