<script lang="ts">
	import { Circle } from 'lucide-svelte';

	const projects = [
		{
			title: 'Sistema de Gestión de Matrículas',
			description:
				'Plataforma integral para gestionar el proceso de matrícula estudiantil, incluyendo registro de estudiantes, asignación de cursos, generación de documentos y pagos en línea. Incluye dashboard administrativo y portal para padres.',
			technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
			link: '#',
			gradient: 'bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'
		},
		{
			title: 'Control de Asistencia Docente',
			description:
				'Sistema automatizado para el registro y control de asistencia del personal docente mediante códigos QR. Incluye generación de reportes, gestión de permisos y cálculo automático de horas laboradas.',
			technologies: ['Vue.js', 'Firebase', 'Node.js', 'QR Scanner API'],
			link: '#',
			gradient: 'bg-gradient-to-b from-purple-400 via-purple-500 to-purple-700'
		},
		{
			title: 'Gestión de Biblioteca Escolar',
			description:
				'Sistema completo para administrar el inventario de libros, préstamos, devoluciones y multas. Incluye catálogo en línea, sistema de reservas y notificaciones automáticas.',
			technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'SendGrid'],
			link: '#',
			gradient: 'bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600'
		},
		{
			title: 'Portal de Comunicación Escuela-Familia',
			description:
				'Plataforma de comunicación bidireccional entre docentes y padres de familia. Incluye sistema de mensajería, calendario de eventos, compartición de recursos y seguimiento académico.',
			technologies: ['React Native', 'Socket.io', 'Express', 'MongoDB'],
			link: '#',
			gradient: 'bg-gradient-to-b from-green-300 via-green-400 to-green-600'
		},
		{
			title: 'Sistema de Evaluación Académica',
			description:
				'Plataforma para la gestión integral de evaluaciones, incluyendo creación de exámenes, calificación automática, análisis estadístico y generación de boletines de notas.',
			technologies: ['Angular', 'Django', 'PostgreSQL', 'Chart.js'],
			link: '#',
			gradient: 'bg-gradient-to-b from-red-400 via-red-500 to-red-600'
		},
		{
			title: 'Gestor de Horarios Académicos',
			description:
				'Aplicación para la generación y gestión automática de horarios escolares, considerando disponibilidad de docentes, aulas y materias. Incluye detección de conflictos y optimización de recursos.',
			technologies: ['Svelte', 'Python', 'FastAPI', 'SQLite'],
			link: '#',
			gradient: 'bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600'
		}
	];
</script>

<div class="container mx-auto p-4">
	<h2 class="heading-2 my-shadow my-border my-bg mb-12 border-2 px-8 py-4">Proyectos Destacados</h2>

	<section class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<article class="my-shadow my-border my-component-bg border-2">
				<header class="flex flex-row justify-end gap-1 p-2">
					<Circle class="my-effect fill-green-500 stroke-green-500" size={20}></Circle>
					<Circle class="my-effect fill-yellow-500 stroke-yellow-500" size={20}></Circle>
					<Circle class="my-effect fill-red-500 stroke-red-500" size={20}></Circle>
				</header>

				<figure class="my-border aspect-video border-b-2 border-t-2">
					<div class="{project.gradient} h h-full w-full"></div>
				</figure>

				<section class="px-8 pb-8 pt-4">
					<header>
						<h3 class="heading-3 mb-2">{project.title}</h3>
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
