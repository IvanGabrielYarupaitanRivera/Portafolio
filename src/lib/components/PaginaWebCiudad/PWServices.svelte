<script lang="ts">
	import { Store, FileText, Presentation, BarChart, Settings, Calendar } from 'lucide-svelte';

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
			description: `Creación de páginas web en ${city} especializadas en conversión. Nuestras landing pages están optimizadas para transformar visitas en clientes, ideales para campañas específicas y promociones de negocios locales.`,
			icon: Presentation,
			features: [
				'Diseño enfocado en conversión',
				'Formularios optimizados para captación de leads',
				'Carga rápida con optimización Core Web Vitals',
				'Diseño mobile-first adaptado a todos los dispositivos'
			]
		},
		{
			id: 2,
			title: 'Páginas Web para Negocios',
			description: `Desarrollo profesional de página web para negocios en ${city} que buscan destacar en internet. Nuestras páginas web corporativas están diseñadas para resaltar tus productos y servicios con un diseño atractivo y funcional.`,
			icon: Store,
			features: [
				'Catálogo de productos o servicios interactivo',
				'Información de contacto y ubicación integrada',
				`Optimización SEO local para ${city} y alrededores`,
				'Integración con Google Maps y Google Business'
			]
		},
		{
			id: 3,
			title: 'Portafolios y CV Online',
			description: `Servicio de página web en ${city} para freelancers y profesionales. Creamos páginas web personales que te permiten compartir tu experiencia y tus proyectos más destacados con un diseño único que refleja tu marca personal.`,
			icon: FileText,
			features: [
				'Diseño personalizado según tu identidad profesional',
				'Secciones de proyectos con galería visual',
				'Formulario de contacto securizado',
				'CV interactivo y versión descargable'
			]
		},
		{
			id: 4,
			title: 'Páginas Web con SEO Local',
			description: `Las páginas web en ${city} necesitan posicionamiento local. Desarrollamos tu página web con optimización SEO para aparecer en los primeros resultados de búsquedas locales y atraer clientes que buscan tus servicios específicamente en esta zona.`,
			icon: BarChart,
			features: [
				'Implementación de Schema.org para Rich Snippets locales',
				'Optimización para Google My Business y SEO local',
				'Metadata optimizada para búsquedas geográficas',
				`Estructura de URLs optimizada para ${city}`
			]
		},
		{
			id: 5,
			title: 'Páginas Web Autoadministrables',
			description: `Desarrollo de páginas web en ${city} con panel de administración intuitivo. Estas páginas web te permiten actualizar contenido fácilmente sin conocimientos técnicos, ideal para negocios que necesitan mantener su información actualizada.`,
			icon: Settings,
			features: [
				'Panel administrativo personalizado y sencillo',
				'Gestión de contenidos sin conocimientos técnicos',
				'Creación y edición de secciones dinámicas',
				`Capacitación incluida para tu equipo en ${city}`
			]
		},
		{
			id: 6,
			title: 'Páginas Web para Eventos',
			description: `Creación de página web en ${city} para eventos, conferencias o lanzamientos temporales. Desarrollamos páginas web atractivas con toda la información de tu evento, sistema de registro y seguimiento de asistentes.`,
			icon: Calendar,
			features: [
				'Cuenta regresiva y agenda interactiva',
				'Sistema de registro de asistentes integrado',
				'Galería de ponentes o participantes',
				'Integración con redes sociales y compartición'
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

<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
	{#each webPagesServices as service (service.id)}
		<li>
			<article
				class="my-border my-shadow my-effect my-transition h-full rounded-xl border-2 bg-white p-6"
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
								<span
									class="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100"
								>
									<svg class="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
								<span class="text-sm">{feature}</span>
							</li>
						{/each}
					</ul>
				</section>

				<footer class="mt-auto">
					<a
						href="#contacto"
						class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
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
