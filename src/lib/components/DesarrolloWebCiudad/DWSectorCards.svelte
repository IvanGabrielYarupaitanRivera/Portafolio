<script lang="ts">
	import { Check } from 'lucide-svelte';
	import Restaurant from '$lib/icons/sector/RestaurantIcon.svelte';
	import Legal from '$lib/icons/sector/LegalIcon.svelte';
	import Health from '$lib/icons/sector/HealthIcon.svelte';
	import Freelancer from '$lib/icons/sector/FreelancerIcon.svelte';
	import Store from '$lib/icons/sector/StoreIcon.svelte';
	import Hotel from '$lib/icons/sector/HotelIcon.svelte';

	// Propiedades con sintaxis de Svelte 5
	let { city = 'Huancayo' }: { city: string } = $props();

	// Estado para sectores empresariales usando sintaxis Svelte 5
	const businessSectors = $state([
		{
			id: 1,
			name: `Restaurantes y Cafés en ${city}`,
			icon: Restaurant,
			benefits: [
				`Desarrollo web en ${city} con sistemas de reservas y pedidos online`,
				`Soluciones de desarrollo web a medida para gestión de menús digitales`
			]
		},
		{
			id: 2,
			name: `Estudios Jurídicos de ${city}`,
			icon: Legal,
			benefits: [
				`Servicios de desarrollo web en ${city} para plataformas de consultas legales`,
				`Desarrollo web para empresas jurídicas con sistemas de citas y seguimiento de casos`
			]
		},
		{
			id: 3,
			name: `Consultorios y Clínicas en ${city}`,
			icon: Health,
			benefits: [
				`Desarrollo web a medida en ${city} para historias clínicas digitales`,
				`Servicio de desarrollo web con sistemas de citas médicas online`
			]
		},
		{
			id: 4,
			name: `Emprendedores y Freelancers`,
			icon: Freelancer,
			benefits: [
				`Contratar desarrollo web en ${city} para plataformas de portafolio profesional`,
				`Soluciones económicas de desarrollo web para emprendedores locales`
			]
		},
		{
			id: 5,
			name: `Tiendas y Comercios de ${city}`,
			icon: Store,
			benefits: [
				`Desarrollo web para negocios en ${city} con tiendas online integradas`,
				`Servicios de desarrollo web con pasarelas de pago y gestión de inventario`
			]
		},
		{
			id: 6,
			name: `Hoteles y Hospedajes en ${city}`,
			icon: Hotel,
			benefits: [
				`Empresa de desarrollo web en ${city} especializada en sistemas de reservas hoteleras`,
				`Desarrollo web para empresas turísticas con integración a plataformas de booking`
			]
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="sectors-title">
	<div class="relative mb-6 inline-block">
		<h2 id="sectors-title" class="heading-2 relative z-10 mx-4">
			Desarrollo Web para sectores empresariales en
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1"
				>{city}</span
			>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Soluciones profesionales de <strong>desarrollo web en {city}</strong> para distintos sectores
		empresariales. Cada proyecto está adaptado a las necesidades específicas de su industria,
		garantizando
		<strong>funcionalidad</strong>, <strong>rendimiento</strong> y <strong>escalabilidad</strong>.
	</p>
</header>

<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
	{#each businessSectors as sector (sector.id)}
		<li>
			<article
				class="my-border my-shadow my-effect my-transition h-full rounded-xl border-2 bg-white p-6 text-center"
			>
				<header class="flex flex-col items-center gap-4">
					<figure class="my-bg my-transition rounded-xl p-3" aria-label={`Ícono de ${sector.name}`}>
						<sector.icon size={40} color="transparent" class="stroke-2 text-green-950" />
					</figure>
					<h3 class="mb-3 text-lg font-bold">{sector.name}</h3>
				</header>

				<section aria-labelledby={`benefits-${sector.id}`}>
					<h4 id={`benefits-${sector.id}`} class="sr-only">
						Soluciones de desarrollo web para {sector.name}
					</h4>
					<ul class="mt-4 space-y-1 text-sm" aria-label={`Beneficios para ${sector.name}`}>
						{#each sector.benefits as benefit, i}
							<li class="flex items-start">
								<span
									class="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100"
									aria-hidden="true"
								>
									<Check size={12} class="text-green-600" strokeWidth={3} />
								</span>
								<span class="text-left font-medium">{benefit}</span>
							</li>
						{/each}
					</ul>
				</section>

				<footer class="mt-8 text-center">
					<a
						href="#contacto"
						class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
						aria-label={`Solicitar servicios de desarrollo web para ${sector.name}`}
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

<div class="mt-24 text-center">
	<p class="mx-auto mb-6 max-w-md text-gray-600">
		¿Perteneces a un sector diferente? Ofrecemos <strong>desarrollo web en {city}</strong> adaptado a
		cualquier tipo de empresa o emprendimiento.
	</p>
	<a
		href="#contacto"
		class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-offset-2 focus:outline-none"
	>
		<span>Consulta por tu sector específico</span>
		<span
			class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true">→</span
		>
	</a>
</div>
