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
	title="Diseño y Creación de Páginas Web en Huancayo"
	description="Desarrollo profesional de páginas web en Huancayo. Páginas web modernas y optimizadas para empresas, negocios y emprendedores de Junín."
	keywords="pagina web huancayo, paginas web huancayo, diseño pagina web huancayo, crear pagina web huancayo, pagina web para negocio huancayo"
	url="https://www.vanchi.pro/pagina-web-huancayo"
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
