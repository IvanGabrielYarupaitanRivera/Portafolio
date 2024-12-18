<script lang="ts">
	const projects = [
		{
			title: 'E-commerce Modern',
			description:
				'Plataforma de comercio electrónico con diseño moderno y minimalista. Integración con Stripe y gestión de inventario en tiempo real.',
			technologies: ['SvelteKit', 'Supabase', 'Stripe'],
			link: '#',
			image: '/images/E-commerce-Modern.webp'
		},
		{
			title: 'Task Master Pro',
			description:
				'Aplicación de gestión de tareas con características avanzadas de organización y colaboración en tiempo real.',
			technologies: ['Svelte', 'TypeScript', 'Supabase'],
			link: '#',
			image: '/images/Task-Master-Pro.webp'
		},
		{
			title: 'Weather Dashboard',
			description:
				'Dashboard del clima con visualizaciones dinámicas y pronósticos detallados utilizando APIs meteorológicas.',
			technologies: ['JavaScript', 'CSS', 'APIs'],
			link: '#',
			image: '/images/Weather-Dashboard.webp'
		}
	];
</script>

<div class="container mx-auto p-4">
	<h2 class="heading-2 mb-8">Proyectos Destacados</h2>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<article class="relative">
				<!-- Utilizo este div como sombra no lo elimines porque da un efecto de elevado -->
				<div
					class="absolute left-0 top-0 ml-1 mt-1 h-full w-full bg-green-900 dark:bg-green-100"
				></div>

				<div class="my-border my-component-bg relative inline-block h-full w-full border-2">
					<figure class="relative mb-4 aspect-video overflow-hidden">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover hover:scale-110"
						/>
					</figure>

					<section class="px-6">
						<header>
							<h3 class="heading-3 mb-2">{project.title}</h3>
						</header>

						<p class="p mb-4">{project.description}</p>
						<footer class="mb-4 flex flex-wrap gap-2">
							{#each project.technologies as tech}
								<span
									class="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-100"
								>
									{tech}
								</span>
							{/each}
						</footer>
					</section>
				</div>
			</article>
		{/each}
	</div>
</div>
