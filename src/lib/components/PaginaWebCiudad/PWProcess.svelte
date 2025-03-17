<script lang="ts">
	import { MessageSquare, Palette, Code, Rocket } from 'lucide-svelte';

	// Propiedades con sintaxis de Svelte 5
	let { city = 'Huancayo' } = $props();

	// Estado para los pasos del proceso con sintaxis de Svelte 5
	const steps = $state([
		{
			id: 1,
			title: 'Consulta y análisis',
			description: `Analizamos las necesidades específicas de su negocio en ${city} y definimos objetivos claros para su página web.`,
			icon: 'MessageSquare',
			borderColor: 'border-blue-400',
			iconBg: 'bg-blue-100',
			iconColor: 'text-blue-700',
			bgImage: '/images/process/analysis-bg.webp'
		},
		{
			id: 2,
			title: 'Diseño personalizado',
			description: `Creamos mockups y prototipos adaptados a la identidad de su marca y al mercado local de ${city}.`,
			icon: 'Palette',
			borderColor: 'border-purple-400',
			iconBg: 'bg-purple-100',
			iconColor: 'text-purple-700',
			bgImage: '/images/process/design-bg.webp'
		},
		{
			id: 3,
			title: 'Desarrollo y programación',
			description:
				'Implementamos su sitio web con código limpio y optimizado para velocidad de carga.',
			icon: 'Code',
			borderColor: 'border-green-400',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700',
			bgImage: '/images/process/development-bg.webp'
		},
		{
			id: 4,
			title: 'SEO local y lanzamiento',
			description: `Optimizamos su página web para posicionarse en búsquedas locales en ${city} y la lanzamos al público.`,
			icon: 'Rocket',
			borderColor: 'border-red-400',
			iconBg: 'bg-red-100',
			iconColor: 'text-red-700',
			bgImage: '/images/process/launch-bg.webp'
		}
	]);
</script>

<!-- Encabezado de sección -->
<header class="mb-16 text-center" aria-labelledby="process-title">
	<div class="relative mb-6 inline-block">
		<h2 id="process-title" class="heading-2 relative z-10 mx-4">
			Cómo <span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1"
				>Creamos</span
			> su Página Web
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Metodología profesional para <strong>desarrollar páginas web</strong> efectivas para negocios de
		<strong>{city}</strong>.
	</p>
</header>

<!-- Proceso con línea de tiempo -->
<section class="container mx-auto" aria-labelledby="process-title">
	<div class="relative">
		<div
			class="absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-black/10 md:block"
			aria-hidden="true"
		></div>

		<!-- Lista de pasos -->
		<ol class="relative space-y-16" role="list">
			{#each steps as step, i (step.id)}
				<li class={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
					<div
						class={`absolute top-0 left-1/2 hidden h-10 w-10 -translate-x-1/2 translate-y-15 rounded-full ${step.borderColor} border-2 bg-white md:block`}
						aria-hidden="true"
					></div>

					<!-- Contenido del paso -->
					<div class="md:w-1/2 md:px-8">
						<article
							class={`my-shadow rounded-xl border-2 ${step.borderColor} bg-white p-6`}
							id={`process-step-${step.id}`}
						>
							<header class="mb-4 flex items-center">
								<figure
									class={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${step.iconBg}`}
								>
									{#if step.icon === 'MessageSquare'}
										<MessageSquare
											size={24}
											class={step.iconColor}
											strokeWidth={2}
											aria-hidden="true"
										/>
									{:else if step.icon === 'Palette'}
										<Palette size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Code'}
										<Code size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Rocket'}
										<Rocket size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{/if}
								</figure>
								<h3 class="text-lg font-bold md:text-xl">
									<span class={step.iconColor}>Paso {step.id}:</span>
									{step.title}
								</h3>
							</header>

							<section aria-labelledby={`process-step-${step.id}-description`}>
								<h4 id={`process-step-${step.id}-description`} class="sr-only">
									Descripción del paso {step.id}
								</h4>
								<p class="p">{step.description}</p>
							</section>
						</article>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<footer class="mt-16 text-center">
	<p class="p mb-4">¿Listo para impulsar tu presencia web en {city}?</p>

	<a
		href="#contacto"
		class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-offset-2 focus:outline-none"
	>
		<span>Solicitar información</span>
		<span
			class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true"
			>→
		</span>
	</a>
</footer>
