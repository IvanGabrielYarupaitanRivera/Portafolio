<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Header from '$lib/components/PaginaWebCiudad/Header/Header.svelte';
	import PwHero from '$lib/components/PaginaWebCiudad/PWHero.svelte';
	import PwServices from '$lib/components/PaginaWebCiudad/PWServices.svelte';
	import PwSectorCards from '$lib/components/PaginaWebCiudad/PWSectorCards.svelte';
	import PWFaq from '$lib/components/PaginaWebCiudad/PWFAQ.svelte';
	import Contact from '$lib/components/MainPage/Contact.svelte';
	import PwProcess from '$lib/components/PaginaWebCiudad/PWProcess.svelte';

	let { form } = $props();
</script>

<Seo
	title="Diseño y Creación de Páginas Web en Huancavelica"
	description="Desarrollo profesional de páginas web en Huancavelica. Páginas web modernas y optimizadas para empresas, negocios y emprendedores de Huancavelica."
	keywords="pagina web huancavelica, paginas web huancavelica, diseño pagina web huancavelica, crear pagina web huancavelica, pagina web para negocio huancavelica"
	url="https://www.vanchi.pro/pagina-web-huancavelica"
	type="website"
	city="Huancavelica"
	region="Huancavelica"
	latitude="-12.78351904906107"
	longitude="-74.96961627671286"
/>

<Header />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<PwHero city="Huancavelica" />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<PwServices city="Huancavelica" />
		</section>

		<section aria-label="Sectores atendidos" id="sectores">
			<PwSectorCards city="Huancavelica" />
		</section>

		<section aria-label="Proceso de desarrollo" id="proceso">
			<PwProcess city="Huancavelica" />
		</section>

		<section aria-label="Preguntas Frecuentes" id="FAQ">
			<PWFaq city="Huancavelica" />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
