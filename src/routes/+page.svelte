<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import HeroSection from '$lib/components/MainPage/HeroSection.svelte';
	import Projects from '$lib/components/MainPage/Projects.svelte';
	import Contact from '$lib/components/MainPage/Contact.svelte';
	import Skills from '$lib/components/MainPage/Skills.svelte';

	let { form } = $props();
</script>

<Seo
	title="Servicios de Desarrollo Web y Full Stack | Ivan Gabriel Yarupaitan Rivera"
	description="Desarrollo profesional de páginas web y aplicaciones. Servicios especializados en diseño web, programación frontend y desarrollo full stack con SvelteKit, TypeScript y Supabase. Soluciones web a medida para empresas y particulares."
	keywords="desarrollo web, desarrollador web, desarrollos web, programador web, diseño y desarrollo web, desarrollo full stack, desarrollador full stack, desarrollo de páginas web, aplicaciones web, servicios de desarrollo web, agencia de desarrollo web, desarrollo de aplicaciones web, programación web, empresa de desarrollo web, desarrollo web full stack"
	url="https://www.vanchi.pro/"
	type="website"
/>

<main class="relative mr-4 ml-3 flex flex-col gap-16">
	<!-- Patrón de cuadrícula de fondo -->

	<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
		<HeroSection />
	</section>

	<section aria-label="Proyectos destacados" id="proyectos">
		<Projects />
	</section>

	<section aria-label="Habilidades" id="habilidades">
		<Skills />
	</section>

	<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
		<Contact {form} />
	</section>
</main>
