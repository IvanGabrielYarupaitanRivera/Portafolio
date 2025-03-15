<script lang="ts">
	import { ChevronDown, Bot } from 'lucide-svelte';
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
				Hola, soy <span class="my-span">Ivan Gabriel</span>
			</h1>

			<p class="p max-w-prose">
				Desarrollador Full Stack apasionado por crear experiencias web excepcionales
			</p>
		</header>

		<nav class="flex flex-wrap justify-center gap-4" aria-label="Navegación principal">
			<a
				href="#proyectos"
				class="  my-border my-bg p my-shadow rounded-xl border-2 px-6 py-3 font-bold"
				role="button"
			>
				Ver Proyectos
			</a>
			<a
				href="#contacto"
				class="my-border p my-shadow my-active-bg rounded-xl border-2 px-6 py-3 font-bold"
				role="button"
			>
				Contáctame
			</a>
		</nav>

		<a href="#proyectos" aria-label="Ir a proyectos destacados">
			<ChevronDown size={25} aria-hidden="true" class="my-stroke mt-20 animate-bounce" />
		</a>
	</main>
</section>
