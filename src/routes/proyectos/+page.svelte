<script>
	import Seo from '$lib/components/SEO.svelte';
	import HeroSection from './components/HeroSection.svelte';
	import Projects from './components/Projects.svelte';
</script>

<Seo
	title="Proyectos Destacados de Vanchi"
	description="Los mejores proyectos de Vanchi, una agencia de desarrollo web. Descubre nuestro portafolio de sitios web, aplicaciones y soluciones digitales personalizadas."
	keywords="proyectos destacados, portafolio de Vanchi, desarrollo web, aplicaciones web, soluciones digitales, sitios web personalizados"
	url="https://www.vanchi.pro/proyectos"
	type="website"
	city="Huancayo"
	region="Junín"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
	postalCode="12001"
	streetAddress="Jr. Las Estrellas N° 153"
	image="https://www.vanchi.pro/images/proyectos/proyectos-destacados-vanchi.webp"
	altImage="Proyectos Destacados de Vanchi"
	additionalImages={[
		'https://www.vanchi.pro/images/proyectos/portafolio-vanchi.webp',
		'https://www.vanchi.pro/images/proyectos/lista-proyectos-vanchi.webp'
	]}
	altAdditionalImages={[
		'Portafolio de Proyectos de Vanchi',
		'Lista de Proyectos Destacados de Vanchi'
	]}
/>

<main class="z-10 container mx-auto flex flex-1 py-6">
	<article class="relative mr-4 ml-3 flex flex-col gap-48">
		<section class="mt-16 md:px-36" aria-label="Proyectos destacados">
			<HeroSection />
		</section>

		<section aria-label="Lista de proyectos">
			<Projects />
		</section>
	</article>
</main>
