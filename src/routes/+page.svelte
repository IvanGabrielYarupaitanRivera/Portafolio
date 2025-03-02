<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import HeroSection from './HeroSection.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import Skills from './Skills.svelte';

	let { form } = $props();
</script>

<Seo
	title="Vanchi | Programador de aplicaciones web"
	description="Portafolio profesional de Ivan Yarupaitan Rivera, programador de aplicaciones web especializado en SvelteKit, TypeScript, Supabase y desarrollo web moderno."
	keywords="Svelte, SvelteKit, TypeScript, JavaScript, CSS, HTML, Supabase, Frontend, Full Stack, Backend, UI/UX, Tailwind, Ivan Yarupaitan Rivera, Desarrollador Web, Programador, Ingeniero de Sistemas,  Huancayo, Huancavelica, Perú, Aplicaciones Web, Diseño Web, Freelance, Portafolio Digital"
	url="https://www.vanchi.pro/"
	type="website"
/>

<main class="relative ml-3 mr-4 flex flex-col gap-16">
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
