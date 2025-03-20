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
	title="Sitios Web en Huancayo | Diseño y Creación Profesional"
	description="Creación de sitios web profesionales en Huancayo con diseño personalizado. Soluciones digitales a medida para empresas y negocios locales. Precios competitivos y resultados garantizados."
	keywords="sitios web huancayo, sitios web en huancayo, sitios web de huancayo, huancayo sitios web, creación de sitios web huancayo, empresas de sitios web huancayo, precio sitio web huancayo, costo diseño sitio web huancayo"
	url="https://www.vanchi.pro/sitio-web-huancayo"
	type="website"
	city="Huancayo"
	region="Junín"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
	postalCode="12001"
	streetAddress="Jr. Las Estrellas N° 153"
	image="https://www.vanchi.pro/images/sitios-web/sitios-web-huancayo-principal.webp"
	altImage="Sitios Web Profesionales en Huancayo"
	additionalImages={[
		'https://www.vanchi.pro/images/sitios-web/creacion-sitios-web-huancayo.webp',
		'https://www.vanchi.pro/images/sitios-web/empresas-sitios-web-huancayo.webp',
		'https://www.vanchi.pro/images/sitios-web/precio-sitio-web-huancayo.webp'
	]}
	altAdditionalImages={[
		'Creación de Sitios Web en Huancayo',
		'Empresas de Sitios Web en Huancayo',
		'Precio y Costo de Sitios Web en Huancayo'
	]}
/>

<Header homeLink="/sitio-web-huancayo" />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<SWHero city="Huancayo" />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<SWServices city="Huancayo" />
		</section>

		<section aria-label="Sectores atendidos" id="sectores">
			<SWSectorCards city="Huancayo" />
		</section>

		<section aria-label="Proceso de desarrollo" id="proceso">
			<SWProcess city="Huancayo" />
		</section>

		<section aria-label="Preguntas Frecuentes" id="FAQ">
			<SWFAQ city="Huancayo" />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
