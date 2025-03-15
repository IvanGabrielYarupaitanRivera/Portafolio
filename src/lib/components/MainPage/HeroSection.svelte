<script lang="ts">
	import { ChevronDown, Bot } from 'lucide-svelte';

	const mainKeyword = $state('Desarrollo Web');
</script>

<section class="relative" aria-labelledby="hero-title">
	<header class="mb-8 flex justify-center">
		<figure class="my-bg my-border my-shadow rounded-xl border-4 p-2 text-green-950">
			<Bot size={50} strokeWidth={2} aria-hidden="true" />
		</figure>
	</header>

	<main class="flex flex-col items-center gap-8 py-4 text-center md:gap-14">
		<header class="relative flex flex-col gap-6">
			<div class="relative">
				<h1 id="hero-title" class="heading-1 relative z-10">
					Servicios de
					<span class="my-span relative font-black">
						{mainKeyword}
					</span>
				</h1>
			</div>

			<p class="p max-w-prose text-pretty">
				<strong>Desarrollador web</strong> freelance que crea
				<strong>sitios y aplicaciones web</strong>
				profesionales para impulsar tu negocio con soluciones de <strong>desarrollo web</strong> a medida.
			</p>
		</header>

		<nav class="mt-2 flex flex-wrap justify-center gap-4 md:mt-4" aria-label="Navegación principal">
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

		<a href="#servicios" aria-label="Ver mis servicios de desarrollo web">
			<ChevronDown size={25} aria-hidden="true" class="my-stroke mt-12 animate-bounce md:mt-16" />
		</a>
	</main>
</section>
