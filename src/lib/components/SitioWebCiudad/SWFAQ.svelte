<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let { city }: { city: string } = $props();

	// Estado para el acordeón de preguntas con $state
	let faqs = $state([
		{
			id: 1,
			question: `¿Cómo crear un sitio web profesional en ${city}?`,
			answer: `<p>El proceso de creación de sitios web en ${city} incluye estas etapas clave:</p>
                 <ol class="mt-2 ml-5 list-decimal space-y-1">
                   <li>Análisis de objetivos y público objetivo</li>
                   <li>Diseño de interfaz adaptado a su marca</li>
                   <li>Desarrollo con tecnologías modernas (SvelteKit, Astro)</li>
                   <li>Implementación de bases de datos y funcionalidades</li>
                   <li>Optimización para buscadores y rendimiento</li>
                   <li>Pruebas y lanzamiento</li>
                 </ol>
                 <p class="mt-2">Nuestro enfoque garantiza sitios web de ${city} que destacan por su calidad y rendimiento.</p>`,
			isOpen: false
		},
		{
			id: 2,
			question: `¿Cuál es el precio de un sitio web en ${city}?`,
			answer: `<p>El costo de diseño de sitio web en ${city} varía según necesidades y funcionalidades:</p>
                 <ul class="mt-2 ml-5 list-disc space-y-1">
                   <li>Sitio web informativo: S/. 1,000 - S/. 2,500</li>
                   <li>Sitio web corporativo: S/. 2,500 - S/. 5,000</li>
                   <li>Tienda online: S/. 3,500 - S/. 8,000</li>
                   <li>Sistema web personalizado: Desde S/. 5,000</li>
                 </ul>
                 <p class="mt-2">Todos nuestros sitios web incluyen diseño responsive, optimización SEO y panel de administración básico.</p>`,
			isOpen: false
		},
		{
			id: 3,
			question: `¿Qué incluyen los servicios de sitios web en ${city}?`,
			answer: `<p>Las empresas de sitios web en ${city} como la nuestra ofrecen servicios completos que incluyen:</p>
                 <ul class="mt-2 ml-5 list-disc space-y-1">
                   <li>Diseño personalizado según su identidad corporativa</li>
                   <li>Desarrollo frontend y backend a medida</li>
                   <li>Optimización para dispositivos móviles y tablets</li>
                   <li>Implementación SEO para posicionamiento local</li>
                   <li>Integración con Google Analytics y herramientas de marketing</li>
                   <li>Capacitación y soporte técnico post-lanzamiento</li>
                   <li>Alojamiento y mantenimiento (opcional)</li>
                 </ul>`,
			isOpen: false
		},
		{
			id: 4,
			question: `¿Cuánto tiempo toma desarrollar un sitio web en ${city}?`,
			answer: `<p>Los plazos para crear sitios web en ${city} dependen de la complejidad del proyecto:</p>
                 <table class="mt-2 w-full border-collapse text-sm">
                   <tr class="border-b border-gray-200">
                     <td class="py-2 pr-4 font-medium">Sitio web informativo</td>
                     <td>2-3 semanas</td>
                   </tr>
                   <tr class="border-b border-gray-200">
                     <td class="py-2 pr-4 font-medium">Sitio web corporativo</td>
                     <td>3-5 semanas</td>
                   </tr>
                   <tr class="border-b border-gray-200">
                     <td class="py-2 pr-4 font-medium">Tienda online</td>
                     <td>5-8 semanas</td>
                   </tr>
                   <tr class="border-b border-gray-200">
                     <td class="py-2 pr-4 font-medium">Sistema web personalizado</td>
                     <td>8-12 semanas o más</td>
                   </tr>
                 </table>
                 <p class="mt-2">Trabajamos con metodologías ágiles que permiten ver avances desde las primeras semanas.</p>`,
			isOpen: false
		},
		{
			id: 5,
			question: `¿Por qué debo contar con un sitio web para mi negocio en ${city}?`,
			answer: `<p>Los sitios web son esenciales para negocios locales por estas razones:</p>
                 <ul class="mt-2 ml-5 list-disc space-y-1">
                   <li><strong>Visibilidad 24/7:</strong> Su negocio disponible para clientes potenciales en todo momento</li>
                   <li><strong>Credibilidad:</strong> 75% de usuarios juzgan la confiabilidad de un negocio por su sitio web</li>
                   <li><strong>Alcance local:</strong> Aparecer en búsquedas de clientes que buscan sus servicios en ${city}</li>
                   <li><strong>Competitividad:</strong> Diferenciarse de competidores que no tienen presencia digital</li>
                   <li><strong>ROI:</strong> Retorno de inversión medible a través de nuevos clientes y ventas</li>
                 </ul>
                 <p class="mt-2">Un sitio web profesional es una inversión estratégica para el crecimiento de su negocio en el mercado local.</p>`,
			isOpen: false
		},
		{
			id: 6,
			question: `¿Qué diferencia a un sitio web profesional de uno gratuito?`,
			answer: `<p>El costo de diseño de sitio web en ${city} con profesionales se justifica por estas diferencias:</p>
                 <ul class="mt-2 ml-5 list-disc space-y-1">
                   <li><strong>Diseño único:</strong> Solución personalizada vs plantillas genéricas</li>
                   <li><strong>Rendimiento:</strong> Código optimizado para velocidad de carga</li>
                   <li><strong>SEO:</strong> Estructurado para posicionamiento en buscadores</li>
                   <li><strong>Seguridad:</strong> Protección contra vulnerabilidades comunes</li>
                   <li><strong>Funcionalidad:</strong> Características específicas para su negocio</li>
                   <li><strong>Soporte:</strong> Asistencia técnica de profesionales locales</li>
                   <li><strong>Escalabilidad:</strong> Capacidad de crecer junto con su negocio</li>
                 </ul>
                 <p class="mt-2">Las empresas de sitios web en ${city} ofrecemos soluciones que generan retorno de inversión, no solo presencia online.</p>`,
			isOpen: false
		}
	]);

	// Función para alternar estado de preguntas
	function toggleFaq(id: number) {
		faqs = faqs.map((faq) => ({
			...faq,
			isOpen: faq.id === id ? !faq.isOpen : false
		}));
	}
</script>

<header class="mb-16 text-center" aria-labelledby="faq-title">
	<div class="relative mb-6 inline-block">
		<h2 id="faq-title" class="heading-2 relative z-10 mx-4">
			Preguntas sobre
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1">
				Sitios Web
			</span>
			en {city}
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Respuestas a las dudas más comunes sobre <strong>creación de sitios web</strong> y
		<strong>diseño web</strong> para empresas y emprendedores de <strong>{city}</strong>.
	</p>
</header>

<!-- Lista de FAQs -->
<section class="mx-auto max-w-3xl">
	<dl>
		{#each faqs as faq (faq.id)}
			<div class="py-4">
				<dt class="relative">
					<button
						onclick={() => toggleFaq(faq.id)}
						class="my-transition my-shadow my-border flex w-full items-center justify-between rounded-lg border-2 bg-white p-4"
						aria-expanded={faq.isOpen}
						aria-controls={`faq-answer-${faq.id}`}
					>
						<section class="flex items-center">
							<span
								class={`inline-flex h-7 w-7 items-center justify-center rounded-full ${faq.isOpen ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'} mr-4`}
							>
								{faq.id}
							</span>

							<h3 class="text-left text-base font-bold text-green-900 md:text-lg">
								{faq.question}
							</h3>
						</section>
						<span
							class={`ml-4 flex-shrink-0 rounded-full p-1 ${faq.isOpen ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}
							aria-hidden="true"
						>
							<ChevronDown
								size={20}
								class={`transform transition-transform duration-300 ${faq.isOpen ? 'rotate-180' : ''}`}
								strokeWidth={2.5}
							/>
						</span>
					</button>
				</dt>

				{#if faq.isOpen}
					<dd
						id={`faq-answer-${faq.id}`}
						class="p mt-4 py-3 pr-6 pl-6"
						transition:slide={{ duration: 200 }}
					>
						{@html faq.answer}
					</dd>
				{/if}
			</div>
		{/each}
	</dl>
</section>
