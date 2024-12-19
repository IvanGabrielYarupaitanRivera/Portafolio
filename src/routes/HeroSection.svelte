<script lang="ts">
	import { SquareDashedBottomCode, ChevronDown } from 'lucide-svelte';
</script>

<section class="relative z-10" aria-labelledby="hero-title">
	<header class="mb-8 flex justify-center">
		<figure class="my-bg my-effect my-border border-4 p-3">
			<SquareDashedBottomCode size={50} strokeWidth={2} class="my-stroke" aria-hidden="true" />
		</figure>
	</header>

	<main class="flex flex-col items-center gap-6 text-center">
		<h1 id="hero-title" class="heading-1">
			Hola, soy <span class="my-span">Ivan Gabriel</span>
		</h1>

		<p class="p max-w-prose">
			Desarrollador Full Stack apasionado por crear experiencias web excepcionales
		</p>

		<nav class="flex flex-wrap justify-center gap-4" aria-label="Navegación principal">
			<a
				href="#proyectos"
				class="my-effect my-border my-bg p border-2 px-6 py-3 font-bold"
				role="button"
			>
				Ver Proyectos
			</a>
			<a href="#contacto" class="my-border p my-effect border-2 px-6 py-3 font-bold" role="button">
				Contáctame
			</a>
		</nav>

		<ChevronDown size={25} aria-hidden="true" class="my-stroke mt-20 animate-bounce" />
	</main>
</section>
