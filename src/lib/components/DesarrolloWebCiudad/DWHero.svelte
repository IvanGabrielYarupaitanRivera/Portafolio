<script lang="ts">
	import { ChevronDown, Code } from 'lucide-svelte';

	let {
		city
	}: {
		city: string;
	} = $props();
</script>

<header class="mb-8 flex justify-center">
	<figure class="my-bg my-transition my-border my-shadow rounded-xl border-4 p-2 text-green-950">
		<Code size={50} strokeWidth={2} aria-hidden="true" />
	</figure>
</header>

<main class="flex flex-col items-center gap-8 py-4 text-center md:gap-14">
	<header class="relative flex flex-col gap-6">
		<div class="relative">
			<h1 id="local-hero-title" class="heading-1 relative z-10">
				Desarrollo Web <span class="my-span relative font-black">en {city}</span>
			</h1>
		</div>

		<p class="p mx-auto max-w-xs md:max-w-md lg:max-w-lg">
			<strong>Soluciones profesionales</strong> de <strong>desarrollo web</strong>
			para empresas y negocios de <strong>{city}</strong>. Desarrollo de aplicaciones y plataformas
			digitales a medida con tecnologías web modernas.
		</p>
	</header>

	<nav class="mt-2 flex flex-wrap justify-center gap-4 md:mt-4" aria-label="Navegación principal">
		<a
			href="#servicios"
			class="my-border my-bg my-transition p my-shadow rounded-xl border-2 px-6 py-3 font-bold focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:outline-none"
		>
			Ver Servicios
		</a>

		<a
			href="#contacto"
			class="my-border p my-transition my-shadow my-active-bg rounded-xl border-2 px-6 py-3 font-bold focus:ring-2 focus:ring-green-700 focus:ring-offset-2 focus:outline-none"
		>
			Solicitar Presupuesto
		</a>
	</nav>

	<a href="#servicios" aria-label={`Ver servicios de desarrollo web en ${city}`}>
		<ChevronDown size={25} aria-hidden="true" class="my-stroke mt-12 animate-bounce md:mt-16" />
	</a>
</main>
