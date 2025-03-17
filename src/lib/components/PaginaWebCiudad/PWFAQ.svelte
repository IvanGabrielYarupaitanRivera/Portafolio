<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	// Props con valores predeterminados
	let { city = 'Huancayo' }: { city: string } = $props();

	// Estado para el acordeón de preguntas
	let faqs = $state([
		{
			id: 1,
			question: `¿Cómo crear una página web en ${city}?`,
			answer: `<p>Crear una página web en ${city} es sencillo siguiendo estos pasos:</p>
               <ol class="mt-2 ml-5 list-decimal space-y-1">
                 <li>Reunión inicial para entender tu negocio</li>
                 <li>Diseño personalizado para tu marca</li>
                 <li>Desarrollo con tecnologías modernas</li>
                 <li>Optimización para buscadores locales</li>
               </ol>
               <p class="mt-2">Ofrezco atención personalizada.</p>`,
			isOpen: false
		},
		{
			id: 2,
			question: `¿Cuánto cuesta hacer una página web en ${city}?`,
			answer: `<p>Hacer una página web en ${city} tiene estos costos aproximados:</p>
               <ul class="mt-2 ml-5 list-disc space-y-1">
                 <li>Landing page desde S/. 300</li>
                 <li>Web para negocio desde S/. 500</li>
                 <li>Tienda online desde S/. 1,000</li>
               </ul>
               <p class="mt-2">Incluye diseño responsive y optimización SEO local.</p>`,
			isOpen: false
		},
		{
			id: 3,
			question: `¿Qué incluye el diseño de página web en ${city}?`,
			answer: `<p>El diseño de página web para negocios incluye:</p>
               <ul class="mt-2 ml-5 list-disc space-y-1">
                 <li>Diseño adaptado al mercado local</li>
                 <li>Compatibilidad con móviles y tabletas</li>
                 <li>Optimización para Google</li>
                 <li>Integración con Google Maps</li>
                 <li>Soporte técnico post-lanzamiento</li>
               </ul>`,
			isOpen: false
		},
		{
			id: 4,
			question: `¿En cuánto tiempo puedo tener mi página web para mi negocio en ${city}?`,
			answer: `<p>Los tiempos para desarrollar una página web para negocios en ${city} son:</p>
               <table class="mt-2 w-full border-collapse text-sm">
                 <tr class="border-b border-gray-200">
                   <td class="py-1 pr-3 font-medium">Landing page</td>
                   <td>5-7 días</td>
                 </tr>
                 <tr class="border-b border-gray-200">
                   <td class="py-1 pr-3 font-medium">Web completa</td>
                   <td>2-3 semanas</td>
                 </tr>
               </table>`,
			isOpen: false
		},
		{
			id: 5,
			question: `¿Por qué necesito una página web para mi negocio en ${city}?`,
			answer: `<p>Una página web para su negocio en ${city} es esencial porque:</p>
               <ul class="mt-2 ml-5 list-disc space-y-1">
                 <li>78% de clientes buscan en internet antes de visitar</li>
                 <li>Mejora su visibilidad en Google Maps</li>
                 <li>Atiende clientes 24/7 automáticamente</li>
                 <li>Destaca frente a competidores sin web</li>
               </ul>`,
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
				Páginas Web
			</span>
			en {city}
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Respuestas a las dudas más comunes sobre <strong>creación de páginas web</strong> y
		<strong>diseño web</strong> para empresas y emprendedores de <strong>{city}</strong>.
	</p>
</header>

<!-- Lista de FAQs -->
<section class="mx-auto max-w-3xl">
	<dl class="divide-y divide-gray-200">
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
						transition:slide|local={{ duration: 300 }}
					>
						{@html faq.answer}
					</dd>
				{/if}
			</div>
		{/each}
	</dl>
</section>
