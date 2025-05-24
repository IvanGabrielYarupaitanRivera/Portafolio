<script lang="ts">
	import {
		AppWindow,
		BookOpen,
		Brain,
		Calendar,
		Clock,
		Code2,
		ExternalLink,
		Github,
		Globe,
		Layout,
		LucideInfo
	} from 'lucide-svelte';

	import ChatPeraltaAsociadosImage from '$lib/images/chatbot-inteligencia-artificial-peralta-asociados.webp?enhanced';
	import SistemaDeGestionAcademicaImage from '$lib/images/sistema-de-gestion-academica-basica.webp?enhanced';
	import PeraltaAsociadosImage from '$lib/images/pagina-web-peralta-asociados.webp?enhanced';
	import { blur } from 'svelte/transition';

	const projects = $state([
		{
			id: 1,
			slug: 'pagina-web-peralta-asociados',
			title: 'Página Web de Peralta Asociados',
			industry: 'Servicios Legales',
			client: 'Peralta Asociados',
			duration: '1 mes',
			year: '2025',
			description:
				'Diseño y desarrollo de sitio web corporativo con rendimiento optimizado, alcanzando la puntuación máxima (100/100) en todas las métricas de Lighthouse.',
			challenge:
				'Crear una presencia digital profesional que genere confianza y atraiga nuevos clientes al bufete legal.',
			solution:
				'Desarrollo de sitio web minimalista con enfoque en conversión y optimización técnica.',
			results: 'Incrementó contactos de clientes potenciales en un 35%',
			technologies: ['Astro', 'Tailwind CSS', 'Netlify'],
			link: 'https://peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/PeraltaAsociados',
			image: PeraltaAsociadosImage,
			category: 'web',
			metrics: {
				lighthouse: 100,
				loadTime: '0.8s',
				improvement: '+35%'
			}
		},
		{
			id: 2,
			slug: 'asistente-legal-inteligencia-artificial',
			title: 'Asistente Legal con Inteligencia Artificial',
			industry: 'Servicios Legales',
			client: 'Peralta Asociados',
			duration: '2 meses',
			year: '2025',
			description:
				'Desarrollo de un chatbot legal con IA que proporciona asesoramiento automatizado 24/7, utilizando embeddings vectoriales para respuestas precisas y relevantes.',
			challenge:
				'Automatizar la atención de consultas legales básicas para mejorar la eficiencia del bufete.',
			solution:
				'Implementación de chatbot inteligente con base de conocimiento jurídico y procesamiento de lenguaje natural.',
			results: 'Aumentó en un 40% la atención de consultas sin intervención humana',
			technologies: ['SvelteKit', 'Tailwind CSS', 'Supabase Vector', 'OpenRouter'],
			link: 'https://chat.peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/ChatPeraltaAsociados',
			image: ChatPeraltaAsociadosImage,
			category: 'ia',
			metrics: {
				accuracy: '92%',
				responseTime: '2.1s',
				improvement: '+40%'
			}
		},
		{
			id: 3,
			slug: 'sistema-de-gestion-notas-academicas',
			title: 'Sistema de Gestión Académica',
			industry: 'Educación',
			client: 'Proyeto Ficticio',
			duration: '2 meses',
			year: '2025',
			description:
				'Aplicación web académica para gestión de calificaciones con roles diferenciados (administrador, profesor y estudiante) y verificación de usuarios.',
			challenge: 'Crear un sistema completo de gestión académica con múltiples roles y permisos.',
			solution:
				'Desarrollo de aplicación web con autenticación avanzada y panel administrativo completo.',
			results: 'Entorno Ficticio: Proyecto para demostrar habilidades de desarrollo',
			technologies: ['SvelteKit', 'Tailwind CSS', 'Supabase', 'Vercel'],
			link: 'https://sistema-de-gestion-academica.vercel.app/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/SistemaDeGestionAcademica',
			image: SistemaDeGestionAcademicaImage,
			category: 'aplicaciones',
			metrics: {
				users: '3 roles',
				features: '15+',
				improvement: 'Demo'
			}
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

	const techColorVariants: Record<string, string> = $state({
		SvelteKit:
			'rounded-md border border-orange-200 bg-orange-200 px-2 py-1 text-xs font-medium text-orange-700',
		Astro:
			'rounded-md border border-gray-200 bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700',
		'Tailwind CSS':
			'rounded-md border border-cyan-200 bg-cyan-200 px-2 py-1 text-xs font-medium text-cyan-700',
		Supabase:
			'rounded-md border border-green-200 bg-green-200 px-2 py-1 text-xs font-medium text-green-700',
		'Supabase Vector':
			'rounded-md border border-green-200 bg-green-200 px-2 py-1 text-xs font-medium text-green-700',
		Netlify:
			'rounded-md border border-teal-200 bg-teal-200 px-2 py-1 text-xs font-medium text-teal-700',
		Vercel:
			'rounded-md border border-gray-200 bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700',
		OpenRouter:
			'rounded-md border border-gray-200 bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700'
	});

	function getTechClasses(tech: string): string {
		return (
			techColorVariants[tech] ||
			'rounded-md border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700'
		);
	}
</script>

<!-- Encabezado de sección -->
<header class="mb-16 text-center" aria-labelledby="services-title">
	<div class="relative mb-6 inline-block">
		<h2 id="services-title" class="heading-2 relative z-10 mx-4">
			Proyectos
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Realizados
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Explora una selección de <strong>proyectos web reales</strong> que demuestran mi experiencia en
		<strong>desarrollo de páginas web</strong>, <strong>sitios web corporativos</strong> y
		<strong>aplicaciones web personalizadas</strong>. Cada proyecto incluye
		<span class="font-medium">desafíos superados</span>,
		<span class="font-medium">tecnologías implementadas</span>
		y
		<span class="font-medium">resultados medibles</span> para diferentes industrias y clientes.
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

<!-- Contador de resultados -->
<div class="mb-8 text-center">
	<p class="text-sm text-gray-600" aria-live="polite">
		Mostrando <span class="font-medium">{filteredProjects.length}</span>
		de <span class="font-medium">{projects.length}</span> proyectos
	</p>
</div>

<!-- Grid de proyectos -->
<ul id="projects-grid" class=" mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10" role="list">
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
						<h3 class="heading-3 mb-2">
							{project.title}
						</h3>

						<!-- Información del proyecto -->
						<div class="flex flex-wrap items-center gap-6 text-sm text-gray-600">
							<div class="flex items-center gap-2">
								<Calendar size={14} aria-hidden="true" />
								<span>{project.duration}</span>
							</div>
							<div class="flex items-center gap-2">
								<Clock size={14} aria-hidden="true" />
								<span>{project.client}</span>
							</div>
						</div>
					</header>

					<!-- Descripción del proyecto -->
					<section class="mb-4">
						<p class="p text-gray-700">
							{project.description}
						</p>
					</section>

					<!-- Tecnologías usadas -->
					<section class="mb-4">
						<h4 class="mb-2 flex items-center gap-1 text-sm font-medium text-gray-700">
							<Code2 size={14} aria-hidden="true" />
							Stack Tecnológico
						</h4>
						<div class="flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span class={getTechClasses(tech)}>
									{tech}
								</span>
							{/each}
						</div>
					</section>

					<!-- Métricas del proyecto -->
					<section class="mb-4 rounded-lg bg-gray-50 p-3">
						<h4 class="mb-2 text-sm font-medium text-gray-700">Resultados Obtenidos</h4>
						<div class="grid grid-cols-3 gap-4 text-center">
							{#each Object.entries(project.metrics) as [key, value]}
								<div>
									<div class="text-sm font-bold text-gray-900">{value}</div>
									<div class="text-xs text-gray-600 capitalize">{key}</div>
								</div>
							{/each}
						</div>
					</section>

					<!-- Resultados principales -->
					<aside class="mb-6 flex items-start gap-2 rounded-lg bg-green-50 p-3">
						<BookOpen size={16} class="mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" />
						<p class="text-sm font-medium text-green-800">
							<strong>Impacto:</strong>
							{project.results}
						</p>
					</aside>

					<!-- Enlaces del proyecto -->
					<footer class="mt-6">
						<nav class="flex flex-wrap gap-3" aria-label="Enlaces del proyecto">
							<a
								href="/proyectos/{project.slug}"
								rel="noopener noreferrer"
								class="my-border my-bg my-shadow my-effect my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							>
								<span>Más Información</span>
								<LucideInfo size={16} aria-hidden="true" />
							</a>
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
