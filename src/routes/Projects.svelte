<script lang="ts">
	import { Circle, ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'Sistema de Gestión Académica',
			description:
				'Sistema de Gestión Académica es una aplicación web académica diseñada para gestionar calificaciones en un entorno escolar ficticio. Los usuarios pueden acceder mediante cuentas demo preconfiguradas (con roles de estudiante o profesor) usando botones dedicados en la pantalla de inicio de sesión, o crear cuentas personalizadas que requieren verificación de correo electrónico. El sistema opera con tres roles diferenciados: administrador, profesor y estudiante, cada uno con permisos específicos.',
			technologies: ['SvelteKit', 'Tailwind CSS', 'Supabase', 'Vercel'],
			link: 'https://sistema-de-gestion-academica.vercel.app/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/SistemaDeGestionAcademica',
			image: '/images/sistema-de-gestion-academica-basica.webp'
		},
		{
			title: 'Página Web de Peralta Asociados',
			description:
				'Diseño y desarrollo integral de la página web corporativa para el estudio jurídico Peralta Asociados de Huancavelica. La implementación se realizó utilizando Astro, un framework moderno que permite generar sitios web estáticos de alto rendimiento. El proyecto destaca por alcanzar la máxima puntuación (100/100) en todas las métricas críticas de Lighthouse de Google: Rendimiento, garantizando tiempos de carga óptimos; Accesibilidad, Mejores Prácticas y SEO, maximizando la visibilidad en buscadores.',
			technologies: ['Astro', 'Tailwind CSS', 'Netlify'],
			link: 'https://peraltaasociados.com/',
			github: 'https://github.com/IvanGabrielYarupaitanRivera/PeraltaAsociados',
			image: '/images/pagina-web-peralta-asociados.webp'
		}
	];
</script>

<div class="container mx-auto p-4">
	<h2 class="heading-2 my-shadow my-border my-bg mb-12 border-2 px-8 py-4">Proyectos Destacados</h2>

	<section class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
		{#each projects as project}
			<article class="my-shadow my-border my-component-bg border-2">
				<header class="flex flex-row justify-end gap-1 p-2">
					<Circle class="my-effect fill-green-500 stroke-green-500" size={20}></Circle>
					<Circle class="my-effect fill-yellow-500 stroke-yellow-500" size={20}></Circle>
					<Circle class="my-effect fill-red-500 stroke-red-500" size={20}></Circle>
				</header>

				<figure class="my-border relative aspect-video overflow-hidden border-b-2 border-t-2">
					<img
						src={project.image}
						alt={project.title}
						class="h-full w-full object-cover"
						loading="lazy"
						decoding="async"
						width="800"
						height="450"
					/>
				</figure>

				<section class="px-8 pb-8 pt-4">
					<header>
						<h3 class="heading-3 mb-2">{project.title}</h3>
						<div class="mb-8 flex w-full gap-4">
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								class="my-border my-bg my-shadow flex items-center gap-4 border-2 px-4 py-2 text-xs"
							>
								Ver Proyecto
								<ExternalLink size={16} />
							</a>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="my-border my-bg my-shadow flex items-center gap-4 border-2 px-4 py-2 text-xs"
							>
								GitHub
								<Github size={16} />
							</a>
						</div>
					</header>

					<p class="p mb-8">{project.description}</p>

					<footer class="flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<span
								class="border-2 border-sky-800 bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 hover:bg-sky-300 dark:border-sky-100 dark:bg-sky-900 dark:text-sky-100 hover:dark:bg-sky-600"
							>
								{tech}
							</span>
						{/each}
					</footer>
				</section>
			</article>
		{/each}
	</section>
</div>
