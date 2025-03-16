<script lang="ts">
	import { Layout, Code, Layers, Brain } from 'lucide-svelte';

	const services = $state([
		{
			id: 1,
			title: 'Páginas Web Profesionales',
			description:
				'Diseño y creación de sitios web modernos optimizados para buscadores y conversión. Interfaces atractivas que representan la identidad de tu marca con resultados medibles.',
			icon: Layout,
			keywords: ['desarrollo de páginas web', 'sitios web', 'diseño web', 'landing pages']
		},
		{
			id: 2,
			title: 'Aplicaciones Web Completas',
			description:
				'Soluciones integrales que combinan interfaz y funcionalidad con arquitecturas modernas. Especialista en SvelteKit, TypeScript y bases de datos en la nube.',
			icon: Layers,
			keywords: [
				'aplicaciones web',
				'programación full stack',
				'desarrollador front end',
				'soluciones en la nube'
			]
		},
		{
			id: 3,
			title: 'Integraciones con Inteligencia Artificial',
			description:
				'Implementación de inteligencia artificial mediante APIs de OpenAI, Anthropic y Hugging Face para chatbots, análisis de datos y automatización de procesos.',
			icon: Brain,
			keywords: [
				'APIs de inteligencia artificial',
				'chatbots inteligentes',
				'automatización con IA'
			]
		},
		{
			id: 4,
			title: 'Desarrollo a Medida',
			description:
				'Creación de soluciones personalizadas que resuelven problemas específicos de tu negocio. Enfoque en calidad de código, mantenibilidad y escalabilidad.',
			icon: Code,
			keywords: [
				'soluciones a medida',
				'programación web',
				'aplicaciones personalizadas',
				'software empresarial'
			]
		}
	]);

	let activeCard = $state<number | null>(null);
</script>

<!-- Encabezado de sección -->
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
		Ofrezco <strong>soluciones digitales completas</strong> y personalizadas con enfoque en
		<span class="font-medium">calidad</span>, <span class="font-medium">rendimiento</span> y
		<span class="font-medium">experiencia de usuario</span>. Cada proyecto recibe atención dedicada
		para obtener resultados excepcionales.
	</p>
</header>

<!-- Cuadrícula de servicios -->
<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10" role="list">
	{#each services as service}
		<li>
			<article
				class="my-border my-shadow my-effect rounded-xl border-2 bg-white p-6 transition-all duration-300"
				id={`service-${service.id}`}
			>
				<header class="mb-4 flex items-center">
					<figure class="my-bg flex-shrink-0 rounded-xl p-3">
						<service.icon size={40} strokeWidth={2} class="text-green-950" aria-hidden="true" />
					</figure>
					<h3 class="heading-3 ml-4">{service.title}</h3>
				</header>

				<!-- Separador visual -->
				<hr class="my-bg mb-4 h-1 w-16 border-none" aria-hidden="true" />

				<!-- Descripción del servicio -->
				<section class="mb-6">
					<p class="p">
						{service.description}
					</p>
				</section>

				<!-- Micro-CTA -->
				<footer class="mt-4">
					<a
						href="#contacto"
						class="my-border my-shadow my-bg group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-offset-2 focus:outline-none"
						aria-label={`Solicitar servicio de ${service.title}`}
					>
						<span>Solicitar servicio</span>
						<span
							class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
							aria-hidden="true">→</span
						>
					</a>
				</footer>

				<!-- Tags de keywords visibles para SEO -->
				<section class="mt-4" aria-labelledby={`keywords-${service.id}`}>
					<h4 class="sr-only" id={`keywords-${service.id}`}>Palabras clave relacionadas</h4>
					<ul class="flex flex-wrap gap-2" role="list">
						{#each service.keywords as keyword}
							<li>
								<span class="px-2 text-xs text-green-800">
									{keyword}
								</span>
							</li>
						{/each}
					</ul>
				</section>
			</article>
		</li>
	{/each}
</ul>
