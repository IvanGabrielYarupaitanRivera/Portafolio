<script lang="ts">
	import {
		Star,
		MessageSquareQuote,
		Users,
		ThumbsUp,
		Award,
		ExternalLink,
		Brain,
		Globe,
		AppWindow
	} from 'lucide-svelte';
	import CiroYarupaitanPeralta from '$lib/images/testimonials/testimonio-ciro-yarupaitan-peralta.webp?enhanced';

	// Datos de testimonios
	const testimonials = $state([
		{
			id: 1,
			name: 'Ciro Gabriel Yarupaitan Peralta',
			position: 'Fundador de Peralta Asociados',
			company: 'Estudio Jurídico Peralta Asociados',
			avatar: CiroYarupaitanPeralta,
			stars: 5,
			quote:
				'Ivan transformó nuestra presencia digital desarrollando un sitio web profesional y un asistente legal con IA que ha revolucionado nuestra atención al cliente. Su experiencia en desarrollo web y aplicaciones personalizadas nos permitió automatizar consultas y mejorar significativamente nuestra eficiencia operativa.',
			projectType: 'Desarrollo Web y Aplicación con IA',
			projectUrl: 'https://peraltaasociados.com'
		}
		// Aquí se pueden añadir más testimonios en el futuro
	]);

	// Estadísticas de confianza
	const stats = $state([
		{ value: '1+', label: 'Proyectos completados', icon: Users },
		{ value: '100%', label: 'Satisfacción de clientes', icon: ThumbsUp },
		{ value: '1', label: 'Año de experiencia', icon: Award }
	]);

	// Función para generar estrellas de calificación
	function generateStars(rating: number) {
		return Array(5)
			.fill(false)
			.map((_, i) => i < rating);
	}
</script>

<!-- Encabezado semántico -->
<header class="mb-16 text-center" aria-labelledby="testimonials-title">
	<div class="relative mb-6 inline-block">
		<h2 id="testimonials-title" class="heading-2 relative z-10 mx-4">
			Lo que dicen mis
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				clientes
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-2xl">
		Opiniones reales de clientes satisfechos con soluciones de <strong>desarrollo web</strong>,
		<span class="font-medium">diseño de sitios web</span>
		que han impulsado sus negocios. Estos testimonios reflejan mi compromiso con la
		<span class="font-medium">programación web</span>
		enfocado en resultados medibles para cada proyecto.
	</p>
</header>

<!-- Estadísticas de confianza -->
<div class="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
	{#each stats as stat}
		<div
			class="my-border my-bg my-transition my-shadow flex flex-col items-center rounded-xl border-2 p-6 text-center"
		>
			<div class="mb-2">
				<stat.icon size={24} class="text-neutral-900" aria-hidden="true" />
			</div>
			<span class="text-2xl font-bold">{stat.value}</span>
			<span class="text-sm">{stat.label}</span>
		</div>
	{/each}
</div>

<!-- Testimonios -->
<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
	{#each testimonials as testimonial (testimonial.id)}
		<li>
			<article class="my-border my-shadow flex h-full flex-col rounded-xl border-2 bg-white p-6">
				<!-- Cabecera del testimonio -->
				<header class="mb-4 flex items-center gap-4">
					<figure class="h-16 w-16 flex-shrink-0">
						<enhanced:img
							src={testimonial.avatar}
							alt={testimonial.name}
							class="h-full w-full rounded-full object-cover"
							width="200"
							height="200"
							loading="lazy"
							decoding="async"
						/>
					</figure>
					<div>
						<h3 class="font-bold">{testimonial.name}</h3>
						<p class="text-sm text-green-800">
							{testimonial.position}, {testimonial.company}
						</p>
					</div>
				</header>

				<!-- Calificación de estrellas -->
				<div class="mb-4 flex">
					{#each generateStars(testimonial.stars) as isFilled}
						<Star
							size={16}
							fill={isFilled ? 'currentColor' : 'none'}
							class={isFilled ? 'text-yellow-500' : 'text-gray-300'}
							aria-hidden="true"
						/>
					{/each}
				</div>

				<!-- Cita del testimonio -->
				<blockquote class="mb-6 flex-grow">
					<MessageSquareQuote size={20} class="mb-2 text-green-500" aria-hidden="true" />
					<p class="italic">"{testimonial.quote}"</p>
				</blockquote>

				<!-- Categoría del proyecto -->
				<footer class="mt-4 border-t border-green-100 pt-3">
					<div class="flex flex-wrap items-center justify-between gap-4">
						<!-- Tipo de proyecto con badge -->
						<div class="flex items-center gap-2">
							<mark
								class="my-border my-bg my-shadow my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
								title="Categoría del proyecto"
							>
								<span>{testimonial.projectType}</span>

								{#if testimonial.projectType.includes('IA')}
									<Brain size={12} aria-hidden="true" />
								{:else if testimonial.projectType.includes('Web')}
									<Globe size={12} aria-hidden="true" />
								{:else if testimonial.projectType.includes('Aplicación')}
									<AppWindow size={12} aria-hidden="true" />
								{/if}
							</mark>
						</div>

						<!-- Enlace al proyecto -->
						{#if testimonial.projectUrl}
							<a
								href={testimonial.projectUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="my-border my-active-bg my-shadow my-effect my-transition flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-xs font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
							>
								<span>Ver proyecto</span>
								<ExternalLink size={12} aria-hidden="true" />
							</a>
						{/if}
					</div>
				</footer>
			</article>
		</li>
	{/each}
</ul>

<!-- Llamado a la acción (CTA) -->
<div class="mt-16 text-center">
	<h3 class="mb-2 text-xl font-bold">
		¿Listo para impulsar tu negocio con desarrollo web profesional?
	</h3>
	<p class="mb-8">Solicita una consulta gratuita y conversemos sobre tu próximo proyecto</p>

	<a
		href="#contacto"
		class="my-border my-bg my-shadow my-effect my-transition inline-flex items-center rounded-xl border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
	>
		<span>Solicitar presupuesto sin compromiso</span>
		<span class="ml-2 text-xl" aria-hidden="true">→</span>
	</a>
</div>
