<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	// Props con sintaxis de Svelte 5
	let { city = 'Huancayo' } = $props();

	// Estado para el acordeón de preguntas
	let faqs = $state([
		{
			id: 1,
			question: `¿Qué servicios de desarrollo web ofrecen en ${city}?`,
			answer: `<p>Nuestros servicios de desarrollo web en ${city} abarcan todo el ciclo de vida de soluciones digitales:</p>
             <ol class="mt-2 ml-5 list-decimal space-y-1">
               <li><strong>Consultoría y análisis</strong> - Evaluamos sus necesidades y definimos la mejor arquitectura</li>
               <li><strong>Diseño UX/UI</strong> - Creamos interfaces intuitivas y adaptadas a su marca</li>
               <li><strong>Desarrollo frontend y backend</strong> - Programación con SvelteKit, Astro y Supabase</li>
               <li><strong>Bases de datos</strong> - Implementación y optimización PostgreSQL</li>
               <li><strong>Pruebas y despliegue</strong> - Control de calidad y publicación en servidores optimizados</li>
               <li><strong>Mantenimiento</strong> - Soporte técnico y actualizaciones continuas</li>
             </ol>
             <p class="mt-2">Como empresa de desarrollo web en ${city}, adaptamos cada proyecto a las necesidades específicas de los negocios locales.</p>`,
			isOpen: false
		},
		{
			id: 2,
			question: `¿Cuál es el costo de contratar desarrollo web en ${city}?`,
			answer: `<p>El costo de contratar desarrollo web en ${city} depende del tipo de proyecto:</p>
             <ul class="mt-2 ml-5 list-disc space-y-1">
               <li><strong>Aplicaciones web básicas:</strong> S/. 1,500 - S/. 3,000</li>
               <li><strong>Sistemas de gestión empresarial:</strong> S/. 3,000 - S/. 8,000</li>
               <li><strong>Plataformas digitales avanzadas:</strong> S/. 8,000+</li>
             </ul>
             <p class="mt-2">Los factores que influyen en el presupuesto incluyen la complejidad técnica, el diseño personalizado, integraciones con servicios externos y el volumen de datos a manejar.</p>
             <p class="mt-2">Ofrecemos planes de pago flexibles para facilitar su inversión en desarrollo web para negocios en ${city}.</p>`,
			isOpen: false
		},
		{
			id: 3,
			question: `¿Por qué elegir un desarrollador web local de ${city}?`,
			answer: `<p>Contratar un desarrollador web en ${city} ofrece ventajas significativas:</p>
             <ul class="mt-2 ml-5 list-disc space-y-1">
               <li><strong>Comunicación directa</strong> - Reuniones presenciales para entender mejor sus necesidades</li>
               <li><strong>Conocimiento del mercado local</strong> - Entendemos los gustos y preferencias del público de ${city}</li>
               <li><strong>Soporte técnico inmediato</strong> - Asistencia rápida sin barreras geográficas</li>
               <li><strong>Fortalecimiento de la economía local</strong> - Colaboración entre empresas de la región</li>
               <li><strong>Adaptación a necesidades específicas</strong> - Soluciones personalizadas para el contexto local</li>
             </ul>
             <p class="mt-2">Nuestro enfoque combina el conocimiento local con estándares internacionales de calidad en desarrollo web.</p>`,
			isOpen: false
		},
		{
			id: 4,
			question: `¿Cuánto tiempo toma desarrollar una aplicación web en ${city}?`,
			answer: `<p>Los tiempos de entrega para proyectos de desarrollo web en ${city} varían según su complejidad:</p>
             <table class="mt-2 w-full border-collapse text-sm">
               <tr class="border-b border-gray-200">
                 <td class="py-2 pr-4 font-medium">Aplicación web básica</td>
                 <td>3-5 semanas</td>
               </tr>
               <tr class="border-b border-gray-200">
                 <td class="py-2 pr-4 font-medium">Sistema de gestión empresarial</td>
                 <td>6-10 semanas</td>
               </tr>
               <tr class="border-b border-gray-200">
                 <td class="py-2 pr-4 font-medium">Plataforma digital avanzada</td>
                 <td>10-16 semanas</td>
               </tr>
             </table>
             <p class="mt-2">Trabajamos con metodología ágil, lo que permite entregas incrementales y visualización de avances desde etapas tempranas del desarrollo web para empresas en ${city}.</p>`,
			isOpen: false
		},
		{
			id: 5,
			question: `¿Qué ventajas tiene el desarrollo web a medida frente a plantillas?`,
			answer: `<p>El desarrollo web a medida en ${city} ofrece beneficios decisivos sobre plantillas prediseñadas:</p>
             <ul class="mt-2 ml-5 list-disc space-y-1">
               <li><strong>Solución 100% personalizada</strong> - Responde exactamente a sus necesidades de negocio</li>
               <li><strong>Mayor rendimiento</strong> - Código optimizado sin elementos innecesarios</li>
               <li><strong>Escalabilidad garantizada</strong> - Crece junto con su empresa sin limitaciones</li>
               <li><strong>Integración con sistemas existentes</strong> - Compatible con su software actual</li>
               <li><strong>Seguridad reforzada</strong> - Protección contra vulnerabilidades comunes en plantillas</li>
               <li><strong>Propiedad total</strong> - Usted es dueño del código y de su solución digital</li>
             </ul>
             <p class="mt-2">Las soluciones de desarrollo web personalizadas en ${city} representan una inversión a largo plazo que evita gastos recurrentes en adaptaciones y parches.</p>`,
			isOpen: false
		},
		{
			id: 6,
			question: `¿Qué tecnologías utilizan para el desarrollo web para negocios en ${city}?`,
			answer: `<p>Implementamos las tecnologías más modernas y eficientes en nuestros servicios de desarrollo web en ${city}:</p>
             <ul class="mt-2 ml-5 list-disc space-y-1">
               <li><strong>Frontend:</strong> SvelteKit y Astro con Tailwind CSS para interfaces rápidas y atractivas</li>
               <li><strong>Backend:</strong> Supabase como plataforma principal, ofreciendo seguridad y escalabilidad</li>
               <li><strong>Base de datos:</strong> PostgreSQL con optimización para consultas complejas y alto rendimiento</li>
               <li><strong>Diseño:</strong> Figma para prototipos interactivos y flujos de usuario</li>
               <li><strong>DevOps:</strong> Vercel y Netlify para despliegue automático e infraestructura serverless</li>
             </ul>
             <p class="mt-2">Nuestro stack tecnológico está seleccionado para garantizar velocidad, seguridad y escalabilidad en cada proyecto.</p>`,
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
				Desarrollo Web
			</span>
			en {city}
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Respuestas a las dudas más comunes sobre <strong>servicios de desarrollo web</strong> y
		<strong>soluciones digitales</strong> para empresas y emprendedores de <strong>{city}</strong>.
	</p>
</header>

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
						transition:slide|local={{ duration: 200 }}
					>
						{@html faq.answer}
					</dd>
				{/if}
			</div>
		{/each}
	</dl>
</section>
