<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import Technologies from './Technologies.svelte';

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
	<section class="relative z-10 px-8 py-36 md:px-36" aria-label="Introducción y presentación">
		<!-- Fondo decorativo -->
		<!-- <div
            class="absolute inset-0 z-0 -my-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#0369A1_100%)]"
            aria-hidden="true"
        ></div> -->

		<HeroSection />
	</section>

	<section
		class="my-border relative z-10 border-t-2 px-8 py-6 md:px-24"
		aria-label="Tecnologías y habilidades"
	>
		<Technologies />
	</section>
</main>
