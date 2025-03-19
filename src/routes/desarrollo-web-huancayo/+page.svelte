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
	title="Desarrollo Web en Huancayo | Servicios Profesionales de Programación"
	description="Servicios profesionales de desarrollo web en Huancayo para empresas y negocios locales. Creamos aplicaciones web a medida, sistemas de gestión y plataformas digitales con tecnologías modernas para impulsar su crecimiento digital."
	keywords="desarrollo web huancayo, desarrollo web en huancayo, servicios de desarrollo web huancayo, empresa de desarrollo web huancayo, desarrollador web huancayo, soluciones de desarrollo web huancayo, desarrollo web para negocios huancayo"
	url="https://www.vanchi.pro/desarrollo-web-huancayo"
	type="website"
	city="Huancayo"
	region="Junín"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
	postalCode="12001"
	streetAddress="Jr. Las Estrellas N° 153"
	image="https://www.vanchi.pro/images/desarrollo-web/desarrollo-web-huancayo.webp"
	altImage="Desarrollo Web profesional en Huancayo"
	additionalImages={[
		'https://www.vanchi.pro/images/desarrollo-web/servicios-desarrollo-web-huancayo.webp',
		'https://www.vanchi.pro/images/desarrollo-web/empresa-desarrollo-web-huancayo.webp',
		'https://www.vanchi.pro/images/desarrollo-web/soluciones-desarrollo-web-huancayo.webp'
	]}
	altAdditionalImages={[
		'Servicios de Desarrollo Web en Huancayo',
		'Empresa de Desarrollo Web en Huancayo',
		'Soluciones de Desarrollo Web para negocios en Huancayo'
	]}
/>

<Header homeLink="/desarrollo-web-huancayo" />

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Introducción y presentación">
			<DWHero city="Huancayo" />
		</section>

		<section aria-label="Servicios ofrecidos" id="servicios">
			<DWServices city="Huancayo" />
		</section>

		<section aria-label="Sectores atendidos" id="sectores">
			<DWSectorCards city="Huancayo" />
		</section>

		<section aria-label="Proceso de desarrollo" id="proceso">
			<DWProcess city="Huancayo" />
		</section>

		<section aria-label="Preguntas Frecuentes" id="FAQ">
			<DWFAQ city="Huancayo" />
		</section>

		<section class="mb-16" aria-label="Formulario de contacto" id="contacto">
			<Contact {form} />
		</section>
	</article>
</main>
