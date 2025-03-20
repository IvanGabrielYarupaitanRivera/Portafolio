<script lang="ts">
	import { Building2, UserCircle, MapPin, Landmark, Newspaper, PenTool } from 'lucide-svelte';

	// Props para hacer componente reutilizable en diferentes ciudades
	let {
		city
	}: {
		city: string;
	} = $props();

	// Estado para servicios específicos de páginas web
	const webSitesServices = $state([
		{
			id: 1,
			title: 'Sitios Web Corporativos',
			description: `Desarrollo profesional de sitios web en ${city} para empresas que buscan destacar en internet. Nuestros sitios web corporativos están diseñados para representar profesionalmente tu marca y atraer nuevos clientes.`,
			icon: Building2,
			features: [
				'Diseño personalizado según identidad corporativa',
				'Catálogo de productos o servicios interactivo',
				`Optimización SEO local para ${city} y alrededores`,
				'Integración con Google Maps y redes sociales'
			]
		},
		{
			id: 2,
			title: 'Portafolios Profesionales',
			description: `Las empresas de sitios web en ${city} como la nuestra ofrecen soluciones para profesionales independientes. Creamos sitios web personales que te permiten compartir tu experiencia y proyectos con un diseño único y profesional.`,
			icon: UserCircle,
			features: [
				'Diseño que resalta tu marca personal',
				'Exhibición de proyectos con galería visual',
				'Testimonios y recomendaciones integradas',
				'Formulario de contacto optimizado para leads'
			]
		},
		{
			id: 3,
			title: 'Sitios Web con SEO Local',
			description: `Los sitios web de ${city} necesitan posicionamiento local efectivo. Desarrollamos tu sitio web con optimización SEO avanzada para aparecer en los primeros resultados de búsquedas locales y atraer clientes potenciales en tu zona.`,
			icon: MapPin,
			features: [
				'Implementación de Schema.org para resultados enriquecidos',
				'Optimización para búsquedas locales en Google',
				'Metadata optimizada para búsquedas geográficas',
				`Estrategia de contenido relevante para ${city}`
			]
		},
		{
			id: 4,
			title: 'Sitios Web Institucionales',
			description: `Creación de sitios web en ${city} para instituciones educativas, gubernamentales y organizaciones sin fines de lucro. Diseñamos plataformas informativas que transmiten confianza y facilitan la comunicación con sus audiencias.`,
			icon: Landmark,
			features: [
				'Estructura organizada por departamentos o áreas',
				'Secciones de noticias y comunicados oficiales',
				'Formularios de contacto específicos por área',
				'Diseño formal que transmite confiabilidad'
			]
		},
		{
			id: 5,
			title: 'Sitios Web Informativos',
			description: `El precio de sitio web en ${city} para blogs, revistas digitales o portales de noticias locales es muy accesible con nosotros. Desarrollamos plataformas informativas que facilitan la publicación y difusión de contenido relevante.`,
			icon: Newspaper,
			features: [
				'Sistema de categorización eficiente',
				'Diseño optimizado para lectura en cualquier dispositivo',
				'Integración con redes sociales para mayor alcance',
				'Opciones de suscripción para fidelización de lectores'
			]
		},
		{
			id: 6,
			title: 'Rediseño de Sitios Web',
			description: `El costo de diseño de sitio web en ${city} para actualizar plataformas existentes es competitivo. Transformamos tu sitio web actual en una versión moderna, rápida y optimizada que mejora la experiencia de usuario y el posicionamiento.`,
			icon: PenTool,
			features: [
				'Análisis de fortalezas y debilidades del sitio actual',
				'Migración de contenido y rediseño de la estructura',
				'Implementación de tendencias actuales de diseño web',
				'Mejora del rendimiento y velocidad de carga'
			]
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="services-title">
	<div class="relative mb-6 inline-block">
		<h2 id="services-title" class="heading-2 relative z-10 mx-4">
			Servicios de
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Sitios Web
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Diseño y <strong>desarrollo de sitios web</strong> profesionales para
		<strong>empresas en {city}</strong>. Cada proyecto incluye
		<strong>diseño personalizado</strong>, <span class="font-medium">optimización SEO</span> y
		<span class="font-medium">soporte técnico</span> para impulsar tu presencia digital.
	</p>
</header>

<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
	{#each webSitesServices as service (service.id)}
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
