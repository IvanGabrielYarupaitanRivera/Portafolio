<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Header from '$lib/components/MainPage/Header/Header.svelte';
	import HeroSection from '$lib/components/MainPage/HeroSection.svelte';
	import Services from '$lib/components/MainPage/Services.svelte';
	import Testimonials from '$lib/components/MainPage/Testimonials.svelte';
	import Projects from '$lib/components/MainPage/Projects.svelte';
	import Contact from '$lib/components/MainPage/Contact.svelte';

	let { form } = $props();
</script>

<Seo
	title="Servicios de Desarrollo Web y Full Stack"
	description="Desarrollo profesional de páginas web y aplicaciones. Servicios especializados en diseño web, programación frontend y desarrollo full stack con SvelteKit, TypeScript y Supabase. Soluciones web a medida para empresas y particulares."
	keywords="desarrollo web, desarrollador web, desarrollos web, programador web, diseño y desarrollo web, desarrollo full stack, desarrollador full stack, desarrollo de páginas web, aplicaciones web, servicios de desarrollo web, agencia de desarrollo web, desarrollo de aplicaciones web, programación web, empresa de desarrollo web, desarrollo web full stack"
	url="https://www.vanchi.pro/"
	type="website"
	city="Huancayo"
	region="Junín"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
/>

<Header />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<HeroSection />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<Services />
		</section>

		<section aria-label="Proyectos destacados" id="proyectos">
			<Projects />
		</section>

		<section aria-label="Testimonios" id="testimonios">
			<Testimonials />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
