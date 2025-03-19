<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Header from '$lib/components/PaginaWebCiudad/Header/Header.svelte';
	import PwHero from '$lib/components/PaginaWebCiudad/PWHero.svelte';
	import PwServices from '$lib/components/PaginaWebCiudad/PWServices.svelte';
	import PwSectorCards from '$lib/components/PaginaWebCiudad/PWSectorCards.svelte';
	import PwProcess from '$lib/components/PaginaWebCiudad/PWProcess.svelte';
	import PWFaq from '$lib/components/PaginaWebCiudad/PWFAQ.svelte';
	import Contact from '$lib/components/MainPage/Contact.svelte';

	let { form } = $props();
</script>

<Seo
	title="Diseño de Página Web y Páginas Web en Huancayo | Desarrollo Profesional"
	description="Creación de página web personalizada y desarrollo de páginas web profesionales en Huancayo. Soluciones digitales a medida para empresas, negocios y emprendedores locales con diseño optimizado y resultados garantizados."
	keywords="pagina web huancayo, paginas web huancayo, diseño pagina web huancayo, crear pagina web huancayo, pagina web para negocio huancayo"
	url="https://www.vanchi.pro/pagina-web-huancayo"
	type="website"
	city="Huancayo"
	region="Junín"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
	postalCode="12001"
	streetAddress="Jr. Las Estrellas N° 153"
	image="https://www.vanchi.pro/images/pagina-web/pagina-web-huancayo.webp"
	altImage="Diseño de Página Web y Páginas Web en Huancayo"
	additionalImages={[
		'https://www.vanchi.pro/images/pagina-web/paginas-web-huancayo.webp',
		'https://www.vanchi.pro/images/pagina-web/diseño-pagina-web-huancayo.webp',
		'https://www.vanchi.pro/images/pagina-web/crear-paginas-web-huancayo.webp'
	]}
	altAdditionalImages={[
		'Páginas Web en Huancayo',
		'Diseño de Página Web en Huancayo',
		'Crear Páginas Web en Huancayo'
	]}
/>

<Header homeLink="/pagina-web-huancayo" />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<PwHero city="Huancayo" />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<PwServices city="Huancayo" />
		</section>

		<section aria-label="Sectores atendidos" id="sectores">
			<PwSectorCards city="Huancayo" />
		</section>

		<section aria-label="Proceso de desarrollo" id="proceso">
			<PwProcess city="Huancayo" />
		</section>

		<section aria-label="Preguntas Frecuentes" id="FAQ">
			<PWFaq city="Huancayo" />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
