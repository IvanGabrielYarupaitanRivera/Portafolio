<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Header from '$lib/components/DesarrolloWebCiudad/Header/Header.svelte';
	import DWHero from '$lib/components/DesarrolloWebCiudad/DWHero.svelte';
	import DWServices from '$lib/components/DesarrolloWebCiudad/DWServices.svelte';
	import DWSectorCards from '$lib/components/DesarrolloWebCiudad/DWSectorCards.svelte';
	import DWProcess from '$lib/components/DesarrolloWebCiudad/DWProcess.svelte';
	import DWFAQ from '$lib/components/DesarrolloWebCiudad/DWFAQ.svelte';
	import Contact from '$lib/components/MainPage/Contact.svelte';

	let { form } = $props();
</script>

<Seo
	title="Desarrollo Web en Huancavelica | Servicios Profesionales de Programación"
	description="Servicios profesionales de desarrollo web en Huancavelica para empresas y negocios locales. Creamos aplicaciones web a medida, sistemas de gestión y plataformas digitales con tecnologías modernas para impulsar su crecimiento digital."
	keywords="desarrollo web huancavelica, desarrollo web en huancavelica, servicios de desarrollo web huancavelica, empresa de desarrollo web huancavelica, desarrollador web huancavelica, soluciones de desarrollo web huancavelica, desarrollo web para negocios huancavelica"
	url="https://www.vanchi.pro/desarrollo-web-huancavelica"
	type="website"
	city="Huancavelica"
	region="Huancavelica"
	latitude="-12.78351904906107"
	longitude="-74.96961627671286"
	postalCode="09001"
	streetAddress="Jr. Mayta Cápac N° 215"
	image="https://www.vanchi.pro/images/desarrollo-web/desarrollo-web-huancavelica.webp"
	altImage="Desarrollo Web profesional en Huancavelica"
	additionalImages={[
		'https://www.vanchi.pro/images/desarrollo-web/servicios-desarrollo-web-huancavelica.webp',
		'https://www.vanchi.pro/images/desarrollo-web/empresa-desarrollo-web-huancavelica.webp',
		'https://www.vanchi.pro/images/desarrollo-web/soluciones-desarrollo-web-huancavelica.webp'
	]}
	altAdditionalImages={[
		'Servicios de Desarrollo Web en Huancavelica',
		'Empresa de Desarrollo Web en Huancavelica',
		'Soluciones de Desarrollo Web para negocios en Huancavelica'
	]}
/>

<Header homeLink="/desarrollo-web-huancavelica" />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<DWHero city="Huancavelica" />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<DWServices city="Huancavelica" />
		</section>

		<section aria-label="Sectores atendidos" id="sectores">
			<DWSectorCards city="Huancavelica" />
		</section>

		<section aria-label="Proceso de desarrollo" id="proceso">
			<DWProcess city="Huancavelica" />
		</section>

		<section aria-label="Preguntas Frecuentes" id="FAQ">
			<DWFAQ city="Huancavelica" />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
