<script lang="ts">
	import { Circle } from 'lucide-svelte';

	const projects = [
		{
			title: 'E-commerce Modern',
			description:
				'Plataforma de comercio electrónico con diseño moderno y minimalista. Integración con Stripe y gestión de inventario en tiempo real.',
			technologies: ['SvelteKit', 'Supabase', 'Stripe'],
			link: '#',
			gradient: 'bg-gradient-to-b from-green-300 via-green-400 to-green-500'
		},
		{
			title: 'Task Master Pro',
			description:
				'Aplicación de gestión de tareas con características avanzadas de organización y colaboración en tiempo real.',
			technologies: ['Svelte', 'TypeScript', 'Supabase'],
			link: '#',
			gradient: 'bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700'
		},
		{
			title: 'Weather Dashboard',
			description:
				'Dashboard del clima con visualizaciones dinámicas y pronósticos detallados utilizando APIs meteorológicas.',
			technologies: ['JavaScript', 'CSS', 'APIs'],
			link: '#',
			gradient: 'bg-gradient-to-b from-green-400 via-green-500 to-green-600'
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
