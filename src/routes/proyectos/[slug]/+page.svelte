<script lang="ts">
	import {
		ArrowLeft,
		Calendar,
		Clock,
		ExternalLink,
		Github,
		Target,
		CheckCircle,
		TrendingUp,
		Users,
		Smartphone,
		Zap
	} from 'lucide-svelte';

	let { data } = $props();
	let project = $state(data.project);
	let activeGalleryIndex = $state(0);
</script>

<!-- <svelte:head>
	<title>{project.title} - Caso de Estudio | Ivan Yarupaitan</title>
	<meta name="description" content={project.summary} />
	<meta property="og:title" content={project.title} />
	<meta property="og:description" content={project.summary} />
	<meta property="og:image" content={project.heroImage} />
	<meta property="og:type" content="article" />
</svelte:head> -->

<main class="z-10 container mx-auto flex flex-1 flex-col py-6">
	<!-- Navegación de regreso -->
	<nav class="mx-20 px-4 py-6">
		<a
			href="/proyectos"
			class="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
		>
			<ArrowLeft size={16} />
			Volver a Proyectos
		</a>
	</nav>

	<!-- Hero Section -->
	<section class="justify-center py-16">
		<header class="container mx-auto max-w-4xl items-center justify-center text-center">
			<span
				class="font-cabinet mb-4 inline-block rounded-full bg-green-200 px-4 py-2 text-sm text-green-700"
			>
				{project.projectType}
			</span>

			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
				{project.title}
			</h1>

			<p class="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
				{project.subtitle}
			</p>

			<!-- Metadata -->
			<div class="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
				<div class="flex items-center gap-2">
					<Calendar size={16} />
					<span>{project.year}</span>
				</div>
				<div class="flex items-center gap-2">
					<Clock size={16} />
					<span>{project.duration}</span>
				</div>
				<div class="flex items-center gap-2">
					<Users size={16} />
					<span>{project.client}</span>
				</div>
			</div>

			<!-- CTAs -->
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="my-border my-bg my-shadow my-effect my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
				>
					<span>Ver Proyecto</span>
					<ExternalLink size={16} aria-hidden="true" />
				</a>
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="my-border my-bg my-shadow my-effect my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
				>
					<span>Ver Código</span>
					<Github size={16} aria-hidden="true" />
				</a>
			</div>
		</header>
	</section>

	<!-- Métricas Destacadas -->
	<section class="metrics-section py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="heading-2 relative z-10 mx-4 mb-12">
				Resultados
				<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
					Obtenidos
				</span>
			</h2>

			<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
				{#each project.metrics as metric (metric.id)}
					<article class="my-border my-shadow rounded-xl border-2 bg-green-50 p-6 text-center">
						<header class="mb-4 flex justify-center">
							<div
								class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100"
							>
								{#if metric.icon === 'trending-up'}
									<TrendingUp size={24} class="text-green-600" />
								{:else if metric.icon === 'zap'}
									<Zap size={24} class="text-green-600" />
								{:else if metric.icon === 'target'}
									<Target size={24} class="text-green-600" />
								{/if}
							</div>
						</header>

						<div class="mb-2 text-3xl font-bold text-green-700">
							{metric.value}
						</div>

						<h3 class="mb-1 text-sm font-medium text-gray-800">
							{metric.label}
						</h3>

						<p class="text-xs text-gray-600">
							{metric.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- El Desafío -->
	<section id="challenge" class="py-16">
		<div class="container mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-3xl font-bold text-gray-900">
				{project.challenge.title}
			</h2>

			<p class="mb-8 text-lg leading-relaxed text-gray-700">
				{project.challenge.description}
			</p>

			<h3 class="mb-6 text-xl font-semibold text-gray-900">Principales Problemas Identificados:</h3>

			<ul class="space-y-3">
				{#each project.challenge.painPoints as point}
					<li class="flex items-start gap-3">
						<div
							class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100"
						>
							<div class="h-2 w-2 rounded-full bg-red-500"></div>
						</div>
						<span class="text-gray-700">{point}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Objetivos -->
	<section class="objectives-section bg-white py-16">
		<div class="container mx-auto max-w-4xl px-4">
			<h2 class="mb-8 text-3xl font-bold text-gray-900">Objetivos del Proyecto</h2>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each project.objectives as objective}
					<div class="flex items-start gap-3 rounded-lg bg-green-50 p-4">
						<CheckCircle class="mt-1 flex-shrink-0 text-green-600" size={20} />
						<span class="font-medium text-gray-700">{objective}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
