<script lang="ts">
	import { ChevronDown, Briefcase, TrendingUp, Users } from 'lucide-svelte';

	// Estado reactivo para las métricas
	let projectsCount = $state(1);
	let clientsCount = $state(1);
	let successRate = $state(100);
</script>

<section class="relative" aria-labelledby="projects-hero-title">
	<main class="flex flex-col items-center gap-8 py-4 text-center md:gap-14">
		<!-- Header principal -->
		<header class="relative flex flex-col gap-6">
			<div class="mb-4 flex justify-center">
				<figure
					class="my-bg my-transition my-border my-shadow rounded-xl border-4 p-2 text-green-950"
				>
					<Briefcase size={50} strokeWidth={2} aria-hidden="true" />
				</figure>
			</div>

			<div class="relative">
				<h1 id="hero-title" class="heading-1 relative z-10">
					Portafolio de
					<span class="my-span relative font-black"> Proyectos </span>
				</h1>
			</div>

			<p class="p mx-auto max-w-xs md:max-w-md lg:max-w-lg">
				Explora una selección de <strong>proyectos web</strong> que demuestran mi experiencia en
				<strong>desarrollo web</strong>, <strong>diseño de interfaces</strong> y
				<strong>soluciones digitales</strong> para diferentes industrias y necesidades empresariales.
			</p>
		</header>

		<!-- Métricas destacadas -->
		<section class="grid grid-cols-1 gap-6 sm:grid-cols-3" aria-labelledby="metrics-title">
			<h2 id="metrics-title" class="sr-only">Estadísticas de proyectos realizados</h2>

			<article
				class="my-border my-shadow rounded-xl border-2 bg-white p-6"
				role="group"
				aria-labelledby="projects-metric"
			>
				<header class="mb-2 flex justify-center">
					<figure aria-hidden="true">
						<TrendingUp size={24} class="text-green-600" />
					</figure>
				</header>

				<div class="text-center">
					<data value={projectsCount} class="text-3xl font-bold text-green-900">
						{projectsCount}+
					</data>
					<h3 id="projects-metric" class="text-sm font-medium text-gray-600">
						Proyectos Completados
					</h3>
				</div>
			</article>

			<article
				class="my-border my-shadow rounded-xl border-2 bg-white p-6"
				role="group"
				aria-labelledby="clients-metric"
			>
				<header class="mb-2 flex justify-center">
					<figure aria-hidden="true">
						<Users size={24} class="text-green-600" />
					</figure>
				</header>

				<div class="text-center">
					<data value={clientsCount} class="text-3xl font-bold text-green-900">
						{clientsCount}+
					</data>
					<h3 id="clients-metric" class="text-sm font-medium text-gray-600">
						Clientes Satisfechos
					</h3>
				</div>
			</article>

			<article
				class="my-border my-shadow rounded-xl border-2 bg-white p-6"
				role="group"
				aria-labelledby="success-metric"
			>
				<header class="mb-2 flex justify-center">
					<figure aria-hidden="true">
						<Briefcase size={24} class="text-green-600" />
					</figure>
				</header>

				<div class="text-center">
					<data value={successRate} class="text-3xl font-bold text-green-900">
						{successRate}%
					</data>
					<h3 id="success-metric" class="text-sm font-medium text-gray-600">Tasa de Éxito</h3>
				</div>
			</article>
		</section>

		<!-- Scroll indicator -->
		<a href="#proyectos" aria-label="Ver proyectos destacados">
			<ChevronDown
				size={25}
				aria-hidden="true"
				class="my-stroke mt-12 animate-bounce   motion-reduce:animate-none md:mt-16"
			/>
		</a>
	</main>
</section>
