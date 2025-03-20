<script lang="ts">
	import { Search, FileText, Layout, Server, TestTube, Rocket } from 'lucide-svelte';

	// Propiedades con sintaxis de Svelte 5
	let { city = 'Huancayo' }: { city: string } = $props();

	// Estado para los pasos del proceso con sintaxis de Svelte 5
	const steps = $state([
		{
			id: 1,
			title: 'Análisis de necesidades',
			description: `Identificamos los objetivos de su sitio web en ${city} y analizamos su público objetivo para definir la mejor estrategia digital para su negocio.`,
			icon: 'Search',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 2,
			title: 'Arquitectura y wireframes',
			description: `Planificamos la estructura de información y navegación de su sitio web, asegurando una experiencia intuitiva para usuarios de ${city} y optimizando para conversión.`,
			icon: 'FileText',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 3,
			title: 'Diseño de interfaz',
			description: `Creamos el diseño visual de su sitio web adaptado a su marca y a las preferencias del mercado local de ${city}, aplicando principios modernos de UI/UX.`,
			icon: 'Layout',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 4,
			title: 'Desarrollo y programación',
			description: `Implementamos su sitio web con código limpio y optimizado. El precio de sitio web en ${city} incluye desarrollo responsive para todos los dispositivos.`,
			icon: 'Server',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 5,
			title: 'Pruebas y optimización',
			description: `Realizamos pruebas exhaustivas para garantizar que su sitio web funcione perfectamente en todos los navegadores y dispositivos, con tiempos de carga optimizados.`,
			icon: 'TestTube',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 6,
			title: 'Lanzamiento y posicionamiento',
			description: `Publicamos su sitio web y aplicamos estrategias de SEO local para mejorar su visibilidad en búsquedas relacionadas con ${city}, atrayendo tráfico cualificado.`,
			icon: 'Rocket',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="process-title">
	<div class="relative mb-6 inline-block">
		<h2 id="process-title" class="heading-2 relative z-10 mx-4">
			Cómo <span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Desarrollamos
			</span> su Sitio Web
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Metodología profesional para <strong>crear sitios web en {city}</strong> que generan resultados
		tangibles para su negocio. El <strong>costo de diseño de sitio web</strong> incluye todas estas fases.
	</p>
</header>

<section class="container mx-auto" aria-labelledby="process-title">
	<div class="relative">
		<div
			class="my-bg absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 md:block"
			aria-hidden="true"
		></div>

		<!-- Lista de pasos -->
		<ol class="relative space-y-16" role="list">
			{#each steps as step, i (step.id)}
				<li class={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
					<div
						class="absolute top-0 left-1/2 hidden h-10 w-10 -translate-x-1/2 translate-y-15 rounded-full border-2 border-green-600 bg-green-100 md:block"
						aria-hidden="true"
					></div>

					<!-- Contenido del paso -->
					<div class="md:w-1/2 md:px-8">
						<article
							class="my-shadow my-border rounded-xl border-2 bg-white p-6"
							id={`process-step-${step.id}`}
						>
							<header class="mb-4 flex items-center">
								<figure
									class={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${step.iconBg}`}
								>
									{#if step.icon === 'Search'}
										<Search size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'FileText'}
										<FileText size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Layout'}
										<Layout size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Server'}
										<Server size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'TestTube'}
										<TestTube size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Rocket'}
										<Rocket size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{/if}
								</figure>
								<h3 class="text-lg font-bold md:text-xl">
									<span class={step.iconColor}>Fase {step.id}:</span>
									{step.title}
								</h3>
							</header>

							<section aria-labelledby={`process-step-${step.id}-description`}>
								<h4 id={`process-step-${step.id}-description`} class="sr-only">
									Descripción de la fase {step.id}
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
	<p class="mx-auto mb-6 max-w-md text-gray-600">
		Las <strong>empresas de sitios web en {city}</strong> ofrecen diversos presupuestos, pero nosotros
		garantizamos calidad en cada fase del desarrollo.
	</p>

	<a
		href="#contacto"
		class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
	>
		<span>Solicitar presupuesto</span>
		<span
			class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true"
			>→
		</span>
	</a>
</footer>
