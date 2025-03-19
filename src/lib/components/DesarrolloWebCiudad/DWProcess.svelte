<script lang="ts">
	import { Users, Lightbulb, PenTool, Code, TestTube, Rocket, Target } from 'lucide-svelte';

	// Propiedades con sintaxis moderna de Svelte 5
	let { city = 'Huancayo' } = $props();

	// Estado para los pasos del proceso con sintaxis de Svelte 5
	const steps = $state([
		{
			id: 1,
			title: 'Empatizar',
			description: `Iniciamos todo proyecto de desarrollo web en ${city} comprendiendo sus necesidades comerciales, investigando a sus usuarios y analizando el mercado local para crear soluciones realmente efectivas.`,
			icon: 'Users',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 2,
			title: 'Definir',
			description: `Establecemos los objetivos y alcance de su desarrollo web en ${city}, definiendo funcionalidades, tecnologías y métricas de éxito para crear una hoja de ruta clara para su proyecto digital.`,
			icon: 'Target',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 3,
			title: 'Idear',
			description: `Generamos conceptos creativos e innovadores para su servicio de desarrollo web, diseñando la arquitectura de información y planificando la experiencia del usuario adaptada al público de ${city}.`,
			icon: 'Lightbulb',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 4,
			title: 'Prototipar',
			description: `Creamos wireframes y diseños interactivos para visualizar su proyecto antes de la programación, permitiendo ajustes tempranos y validando el enfoque con usuarios reales de ${city}.`,
			icon: 'PenTool',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 5,
			title: 'Desarrollar',
			description: `Transformamos los diseños en código funcional, implementando soluciones de desarrollo web para empresas de ${city} con tecnologías modernas y enfoque en rendimiento y escalabilidad.`,
			icon: 'Code',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 6,
			title: 'Evaluar',
			description: `Realizamos pruebas exhaustivas para garantizar la calidad del desarrollo web, verificando funcionalidad, compatibilidad, velocidad y experiencia de usuario antes de su lanzamiento en ${city}.`,
			icon: 'TestTube',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		},
		{
			id: 7,
			title: 'Lanzar',
			description: `Desplegamos su proyecto de desarrollo web en ${city} con configuraciones optimizadas, capacitación para su equipo y monitoreo continuo para asegurar un funcionamiento óptimo.`,
			icon: 'Rocket',
			iconBg: 'bg-green-100',
			iconColor: 'text-green-700'
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="process-title">
	<div class="relative mb-6 inline-block">
		<h2 id="process-title" class="heading-2 relative z-10 mx-4">
			Metodología de
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Desarrollo Web
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Aplicamos Design Thinking en nuestros <strong>servicios de desarrollo web en {city}</strong>,
		combinando creatividad y tecnología para crear soluciones digitales centradas en el usuario y
		orientadas a resultados.
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
					<!-- Círculo conector -->
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
									{#if step.icon === 'Users'}
										<Users size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Target'}
										<Target size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Lightbulb'}
										<Lightbulb
											size={24}
											class={step.iconColor}
											strokeWidth={2}
											aria-hidden="true"
										/>
									{:else if step.icon === 'PenTool'}
										<PenTool size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
									{:else if step.icon === 'Code'}
										<Code size={24} class={step.iconColor} strokeWidth={2} aria-hidden="true" />
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
		¿Listo para iniciar tu proyecto de desarrollo web en {city}?
	</p>

	<a
		href="#contacto"
		class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
	>
		<span>Solicitar consulta inicial</span>
		<span
			class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true">→</span
		>
	</a>
</footer>
