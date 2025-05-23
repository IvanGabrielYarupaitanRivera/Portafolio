<script>
	import Header from '$lib/components/MainPage/Header/Header.svelte';
	import HeroSection from './components/HeroSection.svelte';
	import Projects from './components/Projects.svelte';
</script>

<Header />

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
