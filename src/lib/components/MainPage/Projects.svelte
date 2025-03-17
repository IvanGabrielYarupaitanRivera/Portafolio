<script lang="ts">
	import { ExternalLink, Github, BookOpen, Globe, AppWindow, Brain, Layout } from 'lucide-svelte';
	import ChatPeraltaAsociadosImage from '$lib/images/chatbot-inteligencia-artificial-peralta-asociados.webp?enhanced';
	import SistemaDeGestionAcademicaImage from '$lib/images/sistema-de-gestion-academica-basica.webp?enhanced';
	import PeraltaAsociadosImage from '$lib/images/pagina-web-peralta-asociados.webp?enhanced';
	import { blur } from 'svelte/transition';

	const projects = $state([
		{
			id: 1,
			title: 'Página Web de Peralta Asociados',
			industry: 'Servicios Legales',
			description:
				'Diseño y desarrollo de sitio web corporativo con rendimiento optimizado, alcanzando la puntuación máxima (100/100) en todas las métricas de Lighthouse.',
			results: 'Incrementó contactos de clientes potenciales en un 35%',
			technologies: ['Astro', 'Tailwind CSS', 'Netlify'],
			link: 'https://peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/PeraltaAsociados',
			image: PeraltaAsociadosImage,
			category: 'web'
		},
		{
			id: 2,
			title: 'Asistente Legal con Inteligencia Artificial',
			industry: 'Servicios Legales',
			description:
				'Desarrollo de un chatbot legal con IA que proporciona asesoramiento automatizado 24/7, utilizando embeddings vectoriales para respuestas precisas y relevantes.',
			results: 'Aumentó en un 40% la atención de consultas sin intervención humana',
			technologies: ['SvelteKit', 'Tailwind CSS', 'Supabase Vector', 'OpenRouter'],
			link: 'https://chat.peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/ChatPeraltaAsociados',
			image: ChatPeraltaAsociadosImage,
			category: 'ia'
		},
		{
			id: 3,
			title: 'Sistema de Gestión Académica',
			industry: 'Educación',
			description:
				'Aplicación web académica para gestión de calificaciones con roles diferenciados (administrador, profesor y estudiante) y verificación de usuarios.',
			results: 'Entorno Ficticio: Proyecto para demostrar habilidades de desarrollo',
			technologies: ['SvelteKit', 'Tailwind CSS', 'Supabase', 'Vercel'],
			link: 'https://sistema-de-gestion-academica.vercel.app/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/SistemaDeGestionAcademica',
			image: SistemaDeGestionAcademicaImage,
			category: 'aplicaciones'
		}
	]);

	// Categorías de filtrado
	const categories = $state([
		{ id: 'todos', label: 'Todos los proyectos' },
		{ id: 'web', label: 'Sitios Web' },
		{ id: 'aplicaciones', label: 'Aplicaciones Web' },
		{ id: 'ia', label: 'Integración con IA' }
	]);

	// Estado para filtro activo
	let activeFilter = $state('todos');
	let version = $state(0);

	// Proyectos filtrados basados en el filtro activo
	const filteredProjects = $derived(
		activeFilter === 'todos'
			? projects
			: projects.filter((project) => project.category === activeFilter)
	);

	const classFilterActive = {
		actived:
			'my-border my-bg my-transition my-shadow flex items-center gap-2 rounded-xl border-2 px-4 py-3 font-bold cursor-pointer',
		default:
			'my-border bg-white my-shadow flex items-center gap-2 rounded-xl border-2 px-4 py-3 font-bold cursor-pointer'
	};

	// Función para cambiar filtro
	function setFilter(filterId: string) {
		version++;
		activeFilter = filterId;
	}
</script>

<!-- Encabezado de sección -->
<header class="mb-16 text-center" aria-labelledby="projects-title">
	<div class="relative mb-6 inline-block">
		<h2 id="projects-title" class="heading-2 relative z-10 mx-4">
			Proyectos
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Destacados
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Soluciones digitales <strong>desarrolladas a medida</strong> con resultados comprobables para
		diversos sectores. Cada proyecto combina
		<span class="font-medium">diseño atractivo</span>,
		<span class="font-medium">código optimizado</span> y
		<span class="font-medium">funcionalidad efectiva</span>.
	</p>
</header>

<!-- Filtros de categoría -->
<nav class="mb-12" aria-label="Filtros de proyectos">
	<ul class="flex flex-wrap justify-center gap-4" role="list">
		{#each categories as category}
			<li>
				<button
					onclick={() => setFilter(category.id)}
					class={activeFilter === category.id
						? classFilterActive.actived
						: classFilterActive.default}
					aria-label={`Filtrar por ${category.label}`}
					type="button"
				>
					{#if category.id === 'todos'}
						<Layout size={18} aria-hidden="true" />
					{:else if category.id === 'web'}
						<Globe size={18} aria-hidden="true" />
					{:else if category.id === 'aplicaciones'}
						<AppWindow size={18} aria-hidden="true" />
					{:else if category.id === 'ia'}
						<Brain size={18} aria-hidden="true" />
					{/if}
					<span class="hidden md:flex">
						{category.label}
					</span>
				</button>
			</li>
		{/each}
	</ul>
</nav>

<!-- Grid de proyectos -->
<ul id="projects-grid" class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10" role="list">
	{#each filteredProjects as project (project.id + '-' + version)}
		<li in:blur>
			<article
				class="my-border my-shadow overflow-hidden rounded-xl border-2 bg-white"
				id={`project-${project.id}`}
			>
				<!-- Imagen del proyecto -->
				<figure class="relative aspect-[16/9] w-full overflow-hidden">
					<enhanced:img
						src={project.image}
						alt={`Vista previa del proyecto ${project.title}`}
						class="h-full w-full object-cover"
						loading="lazy"
						decoding="async"
						width="800"
						height="450"
					/>
					<figcaption class="sr-only">{project.title} - {project.industry}</figcaption>
				</figure>

				<!-- Contenido del proyecto -->
				<div class="p-6">
					<header class="mb-4">
						<div class="mb-1">
							<mark
								class="inline-block rounded bg-sky-100 px-2 py-1 text-xs font-medium text-sky-800"
								title="Categoría del proyecto"
							>
								{project.industry}
							</mark>
						</div>
						<h3 class="heading-3">{project.title}</h3>
					</header>

					<section class="mb-6">
						<p class="p">
							{project.description}
						</p>

						<!-- Resultados del proyecto -->
						<aside class="mt-3 flex items-center gap-2" aria-labelledby={`results-${project.id}`}>
							<BookOpen size={18} class="mt-1 text-green-600" aria-hidden="true" />
							<p id={`results-${project.id}`} class="text-sm font-medium text-green-800">
								{project.results}
							</p>
						</aside>
					</section>

					<!-- Enlaces del proyecto -->
					<footer class="mt-6">
						<nav class="flex flex-wrap gap-3" aria-label="Enlaces del proyecto">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								class="my-border my-bg my-shadow my-effect my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							>
								<span>Ver Proyecto</span>
								<ExternalLink size={16} aria-hidden="true" />
							</a>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="my-border my-bg my-shadow my-effect my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							>
								<span>Ver Código</span>
								<Github size={16} aria-hidden="true" />
							</a>
						</nav>
					</footer>
				</div>
			</article>
		</li>
	{/each}
</ul>
