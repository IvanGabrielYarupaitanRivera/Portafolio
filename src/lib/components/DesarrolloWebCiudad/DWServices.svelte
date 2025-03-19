<script lang="ts">
	import { Code, Database, Server, Globe, BarChart, Smartphone } from 'lucide-svelte';

	let { city = 'Huancayo' }: { city: string } = $props();

	const webDevServices = $state([
		{
			id: 1,
			title: 'Desarrollo Web Full Stack',
			description: `Como especialistas en desarrollo web en ${city}, ofrecemos un servicio completo que abarca desde la creación de páginas web hasta aplicaciones complejas. Nuestras soluciones integrales frontend y backend satisfacen las necesidades digitales de empresas en ${city}.`,
			icon: Code,
			features: [
				'Desarrollo frontend y backend integrado',
				'Sitios web corporativos y landing pages',
				'Sistemas de gestión personalizados',
				'Optimización para buscadores (SEO)'
			]
		},
		{
			id: 2,
			title: 'Aplicaciones Web',
			description: `Nuestra experiencia en desarrollo web en ${city} nos permite crear aplicaciones web avanzadas para empresas locales. El desarrollo de aplicaciones forma parte integral de nuestros servicios web en ${city}, automatizando procesos y mejorando la eficiencia de tu negocio.`,
			icon: Globe,
			features: [
				'Aplicaciones web progresivas (PWA)',
				'Plataformas de comercio electrónico',
				'Sistemas de gestión de contenidos',
				'Integraciones con servicios externos'
			]
		},
		{
			id: 3,
			title: 'Diseño Web',
			description: `El desarrollo web de calidad en ${city} comienza con un buen diseño. Nuestro servicio profesional en ${city} se centra en la experiencia de usuario, creando interfaces atractivas y funcionales que reflejan la identidad de tu marca y cautivan a tus visitantes.`,
			icon: Smartphone,
			features: [
				'Diseño UI/UX profesional con Figma',
				'Diseño web responsive para todos los dispositivos',
				'Prototipos interactivos y pruebas de usabilidad',
				'Identidad visual coherente con tu marca'
			]
		},
		{
			id: 4,
			title: 'Desarrollo Frontend',
			description: `Dentro de nuestros servicios de desarrollo web en ${city}, la programación frontend es fundamental para proyectos exitosos. Transformamos diseños en código limpio y optimizado que garantiza velocidad, compatibilidad y una experiencia visual impecable para empresas de ${city}.`,
			icon: Database,
			features: [
				'Maquetación HTML5 con Tailwind CSS',
				'Programación JavaScript/TypeScript',
				'Frameworks modernos (SvelteKit, Astro)',
				'Animaciones y transiciones fluidas'
			]
		},
		{
			id: 5,
			title: 'Desarrollo Backend',
			description: `Nuestro desarrollo web en ${city} incluye servicios especializados de backend para crear la infraestructura robusta que sustenta tu página web o aplicación. Como expertos en ${city}, proporcionamos programación del lado del servidor escalable y segura para tu proyecto.`,
			icon: Server,
			features: [
				'Supabase como Backend as a Service (BaaS)',
				'Bases de datos PostgreSQL optimizadas',
				'Supabase Auth para autenticación segura',
				'Supabase Storage para archivos y multimedia'
			]
		},
		{
			id: 6,
			title: 'Optimización Web',
			description: `Completamos nuestro servicio de desarrollo web en ${city} con optimización técnica avanzada. Mejoramos el rendimiento y posicionamiento de tu sitio web mediante SEO técnico, mejora de velocidad y análisis de conversión para maximizar resultados en el mercado local.`,
			icon: BarChart,
			features: [
				'SEO técnico con implementación de Schema.org',
				'Optimización con Google PageSpeed Insights',
				'Mejora de Core Web Vitals para posicionamiento',
				'Análisis de métricas y optimización de conversión'
			]
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="services-title">
	<div class="relative mb-6 inline-block">
		<h2 id="services-title" class="heading-2 relative z-10 mx-4">
			Servicios de
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Desarrollo Web
			</span>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		<strong>Desarrollo web profesional</strong> para empresas y negocios en
		<strong>{city}</strong>. Creamos soluciones digitales a medida con
		<strong>tecnologías modernas</strong>, enfoque en <span class="font-medium">rendimiento</span> y
		<span class="font-medium">escalabilidad</span> para potenciar tu presencia online.
	</p>
</header>

<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
	{#each webDevServices as service (service.id)}
		<li>
			<article
				class="my-border my-shadow my-effect my-transition h-full rounded-xl border-2 bg-white p-6"
				id={`dev-service-${service.id}`}
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
