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
	title="Diseño de Página Web y Páginas Web en Huancavelica | Desarrollo Profesional"
	description="Creación de página web personalizada y desarrollo de páginas web profesionales en Huancavelica. Soluciones digitales a medida para empresas, negocios y emprendedores locales con diseño optimizado y resultados garantizados."
	keywords="pagina web huancavelica, paginas web huancavelica, diseño pagina web huancavelica, crear pagina web huancavelica, pagina web para negocio huancavelica"
	url="https://www.vanchi.pro/pagina-web-huancavelica"
	type="website"
	city="Huancavelica"
	region="Huancavelica"
	latitude="-12.78351904906107"
	longitude="-74.96961627671286"
/>

<Header homeLink="/pagina-web-huancavelica" />

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
