<script lang="ts">
	import { Code, ChevronDown, Globe, Bot } from 'lucide-svelte';

	const keywords = $state(['Desarrollo Web', 'Diseño Web', 'Full Stack', 'Páginas Web']);

	let currentIndex = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % keywords.length;
		}, 2500);

		return () => clearInterval(interval);
	});
</script>

<section class="relative" aria-labelledby="hero-title">
	<header class="mb-8 flex justify-center">
		<figure class="my-bg my-border my-shadow rounded-xl border-4 p-2 text-green-950">
			<Bot size={50} strokeWidth={2} aria-hidden="true" />
		</figure>
	</header>

	<main class="flex flex-col items-center gap-8 text-center">
		<header class="flex flex-col gap-2">
			<h1 id="hero-title" class="heading-1">
				Servicios de <span class="my-span">{keywords[currentIndex]}</span>
			</h1>

			<p class="p max-w-prose">
				Desarrollador web freelance especializado en crear sitios y aplicaciones web profesionales
				que impulsan tu negocio. Ofrezco soluciones completas de desarrollo web y programación a
				medida.
			</p>
		</header>

		<nav class="flex flex-wrap justify-center gap-4" aria-label="Navegación principal">
			<a
				href="#servicios"
				class="my-border my-bg p my-shadow rounded-xl border-2 px-6 py-3 font-bold"
				role="button"
			>
				Ver Servicios
			</a>
			<a
				href="#contacto"
				class="my-border p my-shadow my-active-bg rounded-xl border-2 px-6 py-3 font-bold"
				role="button"
			>
				Solicitar Presupuesto
			</a>
		</nav>

		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-950"
				>Desarrollo Web</span
			>
			<span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-900"
				>Diseño Web</span
			>
			<span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-950"
				>Programación Web</span
			>
			<span class="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-900"
				>Full Stack</span
			>
		</div>

		<a href="#servicios" aria-label="Ver mis servicios de desarrollo web">
			<ChevronDown size={25} aria-hidden="true" class="my-stroke mt-16 animate-bounce" />
		</a>
	</main>
</section>
