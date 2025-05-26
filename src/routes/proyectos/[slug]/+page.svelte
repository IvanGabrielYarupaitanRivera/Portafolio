<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import {
		ArrowLeft,
		BotMessageSquareIcon,
		Calendar,
		Clock,
		ExternalLink,
		Github,
		Heart,
		Target,
		TrendingUp,
		Users,
		Zap
	} from 'lucide-svelte';

	let { data } = $props();
	let { project } = $derived(data);

	const title = $derived(project.title);
	const description = $derived(project.description);
	const keywords = $derived(project.keywords);
	const image = $derived(project.image);
	const altImage = $derived(project.altImage);
	const additionalImages = $derived(project.additionalImages);
	const altAdditionalImages = $derived(project.altAdditionalImages);
</script>

<Seo
	{title}
	{description}
	{keywords}
	url="https://www.vanchi.pro/proyectos/{project.slug}"
	type="website"
	city="Huancayo"
	region="Junín"
	latitude="-12.041545380185886"
	longitude="-75.19187545630611"
	postalCode="12001"
	streetAddress="Jr. Las Estrellas N° 153"
	{image}
	{altImage}
	{additionalImages}
	{altAdditionalImages}
/>

<main class="z-10 container mx-auto flex flex-1 flex-col py-6">
	<!-- Navegación de regreso -->
	<nav class=" px-4 py-6">
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
			<span class="mb-4 inline-block rounded-full bg-green-200 px-4 py-2 text-sm text-green-700">
				{project.projectType}
			</span>

			<h1 class="heading-1 mb-8">
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
	<section class="py-16">
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
								{:else if metric.icon === 'clock'}
									<Clock size={24} class="text-green-600" />
								{:else if metric.icon === 'heart'}
									<Heart size={24} class="text-green-600" />
								{:else if metric.icon === 'robot'}
									<BotMessageSquareIcon size={24} class="text-green-600" />
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
		<div class="container mx-auto px-4 text-center">
			<h2 class="heading-2 relative z-10 mx-4 mb-12">
				Los
				<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
					Desafíos
				</span>
			</h2>

			<p class="p mx-auto mb-8 max-w-lg">
				{project.challenge.description}
			</p>

			<ul class="mx-auto max-w-xl space-y-3 text-left text-sm">
				{#each project.challenge.painPoints as point}
					<li class="flex items-center gap-3">
						<div
							class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-200"
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
	<section class="py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="heading-2 relative z-10 mx-4 mb-12">
				Objetivos del
				<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
					Proyecto
				</span>
			</h2>

			<p class="p mx-auto mb-8 max-w-lg">
				{project.objectives.description}
			</p>

			<ul class="mx-auto max-w-xl space-y-3 text-left text-sm">
				{#each project.objectives.goals as goal}
					<li class="flex items-center gap-3">
						<div
							class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-300"
						>
							<div class="h-2 w-2 rounded-full bg-green-500"></div>
						</div>
						<span class="text-gray-700">{goal}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Proceso de Desarrollo -->
	<section class="py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="heading-2 relative z-10 mx-4 mb-12">
				Proceso de
				<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
					Desarrollo
				</span>
			</h2>

			<p class="p mx-auto mb-8 max-w-lg">
				{project.objectives.description}
			</p>

			<!-- Timeline de fases -->
			<div
				class="mx-auto max-w-4xl space-y-8"
				role="list"
				aria-label="Fases del proceso de desarrollo"
			>
				{#each project.phases as phase, index (phase.id)}
					<article
						class="relative flex gap-6"
						role="listitem"
						aria-labelledby={`phase-${phase.id}-title`}
					>
						<!-- Número de fase -->
						<div class="flex flex-shrink-0 items-start" aria-hidden="true">
							<span
								class="my-border my-shadow flex h-12 w-12 items-center justify-center rounded-xl border-2 bg-white text-lg font-bold text-green-700"
							>
								{phase.id}
							</span>
						</div>

						<!-- Contenido principal de la fase -->
						<div class="my-border my-shadow flex-1 rounded-xl border-2 bg-white p-6">
							<header class="mb-4 flex flex-wrap items-center justify-between gap-4">
								<h3 class="heading-3">
									{phase.title}
								</h3>
								<div class="rounded-full bg-green-100 px-3 py-1">
									<time class="text-sm font-medium text-green-700" datetime={phase.duration}>
										{phase.duration}
									</time>
								</div>
							</header>

							<p class="p mb-4 text-left">
								{phase.description}
							</p>

							<!-- Entregables -->
							<div>
								<h4
									class="mb-3 text-left text-xs font-bold text-gray-900"
									id={`deliverables-${phase.id}`}
								>
									Entregables Clave
								</h4>
								<ul
									class="space-y-2 text-sm"
									role="list"
									aria-labelledby={`deliverables-${phase.id}`}
								>
									{#each phase.deliverables as deliverable}
										<li class="flex items-start gap-2 text-left" role="listitem">
											<div class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500"></div>
											<span class="text-xs text-gray-600">{deliverable}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</article>
				{/each}
			</div>

			<!-- Resumen del timeline total -->
			<footer class="mt-12">
				<div class="my-border my-shadow mx-auto rounded-xl border-2 bg-white p-6 text-center">
					<h3 class="mb-3 text-lg font-bold text-gray-900">Duración Total del Proyecto</h3>
					<time class="mb-2 block text-3xl font-bold text-green-700" datetime="4 semanas">
						{project.duration}
					</time>
					<p class="text-sm text-gray-600">
						Desde la investigación inicial hasta el lanzamiento exitoso
					</p>
				</div>
			</footer>
		</div>
	</section>

	<!-- Resultados Obtenidos -->
	<section class="container mx-auto py-16">
		<div class=" px-4 text-center">
			<h2 class="heading-2 relative z-10 mx-4 mb-12">
				Resultados
				<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
					Obtenidos
				</span>
			</h2>

			<p class="p mx-auto mb-8 max-w-lg">
				{project.results.description}
			</p>
		</div>

		<!-- Comparación Before/After -->
		<div role="group" aria-labelledby="comparison-title" class="mx-4">
			<!-- Grid de comparación -->
			<div class="grid gap-8 lg:grid-cols-2 lg:gap-12">
				<!-- Situación Inicial (Before) -->
				<article
					class="my-border my-shadow rounded-xl border-2 bg-red-50 p-6"
					aria-labelledby="before-title"
				>
					<header class="mb-6 text-center">
						<h4 id="before-title" class="font-cabinet text-xl font-bold text-red-800">
							{project.results.before.title}
						</h4>
						<p class="text-sm text-red-600">
							{project.results.before.context}
						</p>
					</header>

					<!-- Métricas Before -->
					<dl role="list" aria-label="Métricas situación inicial" class="space-y-3">
						{#each Object.entries(project.results.before.metrics) as [key, value]}
							<div role="listitem" class="flex justify-between border-b border-red-200 pb-2">
								<dt class="text-xs font-medium text-red-800 capitalize md:text-sm">
									{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
								</dt>
								<dd class="text-xs font-semibold text-red-700 md:text-sm">
									{value}
								</dd>
							</div>
						{/each}
					</dl>
				</article>

				<!-- Resultados Obtenidos (After) -->
				<article
					class="my-border my-shadow rounded-xl border-2 bg-green-50 p-6"
					aria-labelledby="after-title"
				>
					<header class="mb-6 text-center">
						<h4 id="after-title" class="font-cabinet text-xl font-bold text-green-800">
							{project.results.after.title}
						</h4>
						<p class="text-xs text-green-600 md:text-sm">
							{project.results.after.context}
						</p>
					</header>

					<!-- Métricas After -->
					<dl role="list" aria-label="Métricas resultados obtenidos" class="space-y-3">
						{#each Object.entries(project.results.after.metrics) as [key, value]}
							<div role="listitem" class="flex justify-between border-b border-green-200 pb-2">
								<dt class="text-xs font-medium text-green-800 capitalize md:text-sm">
									{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
								</dt>
								<dd class="text-xs font-semibold text-green-700 md:text-sm">
									{value}
								</dd>
							</div>
						{/each}
					</dl>
				</article>
			</div>
		</div>
	</section>

	<!-- Sección de Stack Tecnológico -->
	<section aria-labelledby="technologies-title" class="py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="heading-2 relative z-10 mx-4 mb-12">
				<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
					Stack
				</span>

				Tecnológico
			</h2>

			<!-- Grid de tecnologías -->
			<div
				class="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
				role="list"
				aria-label="Tecnologías utilizadas en el proyecto"
			>
				{#each project.technologies as technology, index (technology.name)}
					<article
						class="my-border my-shadow rounded-xl border-2 bg-white p-6"
						role="listitem"
						aria-labelledby={`tech-${index}-title`}
					>
						<!-- Header de la tecnología -->
						<header class="mb-6 text-center">
							<!-- Logo/Icono de la tecnología -->

							<div class="mb-4 flex justify-center">
								<div class="my-bg my-transition rounded-xl p-3">
									<technology.iconComponent size={40} />
								</div>
							</div>

							<h3 id={`tech-${index}-title`} class="text-xl font-bold text-gray-900">
								{technology.name}
							</h3>
						</header>

						<!-- Razón de elección -->
						<div class="mb-6">
							<h4 class="mb-3 text-sm font-semibold text-gray-700">
								¿Por qué {technology.name}?
							</h4>
							<p class="text-sm leading-relaxed text-gray-600">
								{technology.reason}
							</p>
						</div>

						<!-- Beneficios -->
						<div>
							<h4 id={`benefits-${index}`} class="mb-3 text-sm font-semibold text-gray-700">
								Beneficios Clave
							</h4>
							<ul class="space-y-2" role="list" aria-labelledby={`benefits-${index}`}>
								{#each technology.benefits as benefit}
									<li class="flex items-start gap-3" role="listitem">
										<div class="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></div>
										<span class="text-sm text-gray-600">{benefit}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Badge opcional para categoría/tipo -->
						{#if technology.category}
							<footer class="mt-6 border-t border-gray-100 pt-4">
								<span
									class="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
								>
									{technology.category}
								</span>
							</footer>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	</section>
</main>
