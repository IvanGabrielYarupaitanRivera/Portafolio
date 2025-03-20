<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Header from '$lib/components/SitioWebCiudad/Header/Header.svelte';
	import SWHero from '$lib/components/SitioWebCiudad/SWHero.svelte';
	import SWServices from '$lib/components/SitioWebCiudad/SWServices.svelte';
	import SWSectorCards from '$lib/components/SitioWebCiudad/SWSectorCards.svelte';
	import SWProcess from '$lib/components/SitioWebCiudad/SWProcess.svelte';
	import SWFAQ from '$lib/components/SitioWebCiudad/SWFAQ.svelte';
	import Contact from '$lib/components/MainPage/Contact.svelte';

	let { form } = $props();
</script>

<Seo
	title="Sitios Web en Huancavelica | Diseño y Creación Profesional"
	description="Creación de sitios web profesionales en Huancavelica con diseño personalizado. Soluciones digitales a medida para empresas y negocios locales. Precios competitivos y resultados garantizados."
	keywords="sitios web huancavelica, sitios web en huancavelica, sitios web de huancavelica, huancavelica sitios web, creación de sitios web huancavelica, empresas de sitios web huancavelica, precio sitio web huancavelica, costo diseño sitio web huancavelica"
	url="https://www.vanchi.pro/sitio-web-huancavelica"
	type="website"
	city="Huancavelica"
	region="Huancavelica"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
	postalCode="12001"
	streetAddress="Jr. Las Estrellas N° 153"
	image="https://www.vanchi.pro/images/sitios-web/sitios-web-huancavelica-principal.webp"
	altImage="Sitios Web Profesionales en Huancavelica"
	additionalImages={[
		'https://www.vanchi.pro/images/sitios-web/creacion-sitios-web-huancavelica.webp',
		'https://www.vanchi.pro/images/sitios-web/empresas-sitios-web-huancavelica.webp',
		'https://www.vanchi.pro/images/sitios-web/precio-sitio-web-huancavelica.webp'
	]}
	altAdditionalImages={[
		'Creación de Sitios Web en Huancavelica',
		'Empresas de Sitios Web en Huancavelica',
		'Precio y Costo de Sitios Web en Huancavelica'
	]}
/>

<Header homeLink="/sitio-web-huancavelica" />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<SWHero city="Huancavelica" />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<SWServices city="Huancavelica" />
		</section>

		<section aria-label="Sectores atendidos" id="sectores">
			<SWSectorCards city="Huancavelica" />
		</section>

		<section aria-label="Proceso de desarrollo" id="proceso">
			<SWProcess city="Huancavelica" />
		</section>

		<section aria-label="Preguntas Frecuentes" id="FAQ">
			<SWFAQ city="Huancavelica" />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
