<script lang="ts">
	import { Store, FileText, Presentation, BarChart, Award, Smartphone, Check } from 'lucide-svelte';

	// Props para hacer componente reutilizable en diferentes ciudades
	let {
		city
	}: {
		city: string;
	} = $props();

	// Estado para servicios específicos de páginas web
	const webPagesServices = $state([
		{
			id: 1,
			title: 'Landing Pages',
			description: `Landing pages optimizadas para convertir visitas en clientes. Ideales para campañas específicas y promociones de negocios en ${city}.`,
			icon: Presentation,
			features: [
				'Diseño enfocado en conversión',
				'Formularios optimizados',
				'Carga rápida',
				'Mobile-first'
			]
		},
		{
			id: 2,
			title: 'Páginas Web para Negocios',
			description: `Páginas web profesionales para empresas de ${city} que buscan destacar en internet. Resalta tus servicios con un diseño atractivo.`,
			icon: Store,
			features: [
				'Catálogo de productos o servicios',
				'Información de contacto',
				'Optimización SEO local',
				'Integración con Google Maps'
			]
		},
		{
			id: 3,
			title: 'Portafolios y CV Online',
			description: `Presencia profesional en internet para freelancers y profesionales de ${city}. Comparte tu experiencia y proyectos con un diseño personalizado.`,
			icon: FileText,
			features: [
				'Diseño personalizado',
				'Secciones de proyectos',
				'Formulario de contacto',
				'CV descargable'
			]
		},
		{
			id: 4,
			title: 'Páginas Web con SEO Local',
			description: `Diseño optimizado para aparecer en los primeros resultados de Google en búsquedas de ${city}. Atrae clientes que buscan tus servicios localmente.`,
			icon: BarChart,
			features: [
				'Optimización para Google My Business',
				'Palabras clave locales',
				'Metadata optimizada',
				'Carga rápida'
			]
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="services-title">
	<div class="relative mb-6 inline-block">
		<h2 id="services-title" class="heading-2 relative z-10 mx-4">
			Servicios de
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Páginas Web
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Diseño y <strong>desarrollo de páginas web</strong> profesionales para
		<strong>negocios en {city}</strong>. Cada proyecto incluye
		<strong>diseño personalizado</strong>, <span class="font-medium">optimización SEO</span> y
		<span class="font-medium">soporte técnico</span> para impulsar tu presencia digital.
	</p>
</header>

<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10" role="list">
	{#each webPagesServices as service (service.id)}
		<li>
			<article
				class="my-border my-shadow my-effect my-transition rounded-xl border-2 bg-white p-6 transition-all duration-300"
				id={`service-${service.id}`}
			>
				<header class="mb-4 flex items-center">
					<figure class="my-bg my-transition flex-shrink-0 rounded-xl p-3">
						<service.icon size={40} strokeWidth={2} class="text-green-950" aria-hidden="true" />
					</figure>
					<h3 class="heading-3 ml-4">{service.title}</h3>
				</header>

				<hr class="my-bg my-transition mb-4 h-1 w-16 border-none" aria-hidden="true" />

				<section class="mb-6">
					<p class="p">
						{service.description}
					</p>
				</section>

				<section aria-labelledby={`features-${service.id}`}>
					<h4 id={`features-${service.id}`} class="sr-only">Características</h4>
					<ul class="mb-6 space-y-1">
						{#each service.features as feature}
							<li class="flex items-start">
								<span class="mr-2 text-green-600">✓</span>
								<span class="text-sm">{feature}</span>
							</li>
						{/each}
					</ul>
				</section>

				<footer>
					<a
						href="#contacto"
						class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-offset-2 focus:outline-none"
						aria-label={`Solicitar servicio de ${service.title}`}
					>
						<span>Solicitar información</span>
						<span
							class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
							aria-hidden="true"
							>→
						</span>
					</a>
				</footer>
			</article>
		</li>
	{/each}
</ul>
