<script lang="ts">
	import { Check } from 'lucide-svelte';
	import Restaurant from '$lib/icons/sector/RestaurantIcon.svelte';
	import Legal from '$lib/icons/sector/LegalIcon.svelte';
	import Health from '$lib/icons/sector/HealthIcon.svelte';
	import Freelancer from '$lib/icons/sector/FreelancerIcon.svelte';
	import Store from '$lib/icons/sector/StoreIcon.svelte';
	import Hotel from '$lib/icons/sector/HotelIcon.svelte';

	let { city }: { city: string } = $props();

	// Estado para sectores empresariales usando sintaxis Svelte 5
	const businessSectors = $state([
		{
			id: 1,
			name: `Restaurantes y Cafés en ${city}`,
			icon: Restaurant,
			benefits: [
				`Creación de sitios web en ${city} con menú digital y sistema de reservas online`,
				`Diseño optimizado para búsquedas locales de restaurantes en ${city}`
			]
		},
		{
			id: 2,
			name: `Estudios Jurídicos de ${city}`,
			icon: Legal,
			benefits: [
				`Sitios web de ${city} con perfil profesional para abogados y bufetes`,
				`Agenda de citas y formularios de consulta legal personalizados`
			]
		},
		{
			id: 3,
			name: `Consultorios y Clínicas en ${city}`,
			icon: Health,
			benefits: [
				`El precio de sitio web en ${city} para clínicas incluye sistema de citas médicas`,
				`Interfaces intuitivas para mostrar servicios médicos y especialidades`
			]
		},
		{
			id: 4,
			name: `Emprendedores y Freelancers`,
			icon: Freelancer,
			benefits: [
				`Empresas de sitios web en ${city} como la nuestra crean portafolios profesionales`,
				`Diseño que proyecta credibilidad y genera nuevas oportunidades de negocio`
			]
		},
		{
			id: 5,
			name: `Tiendas y Comercios de ${city}`,
			icon: Store,
			benefits: [
				`Sitios web en ${city} con catálogo de productos y funciones e-commerce`,
				`Integración con métodos de pago y sistemas de gestión de inventario`
			]
		},
		{
			id: 6,
			name: `Hoteles y Hospedajes en ${city}`,
			icon: Hotel,
			benefits: [
				`El costo de diseño de sitio web en ${city} para hoteles incluye sistema de reservas`,
				`Sitios web que destacan las instalaciones con galerías y tours virtuales`
			]
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="sectors-title">
	<div class="relative mb-6 inline-block">
		<h2 id="sectors-title" class="heading-2 relative z-10 mx-4">
			Sitios Web para Cada Sector en
			<span class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1"
				>{city}</span
			>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Soluciones digitales personalizadas para <strong>empresas</strong>, <strong>negocios</strong> y
		<strong>emprendedores</strong> de diferentes sectores en {city}. Cada <strong>sitio web</strong>
		está diseñado considerando las necesidades específicas de su industria y presupuesto.
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
					<h4 id={`benefits-${sector.id}`} class="sr-only">Beneficios para {sector.name}</h4>
					<ul class="mt-4 space-y-1 text-sm" aria-label={`Características para ${sector.name}`}>
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
						aria-label={`Solicitar más información sobre sitios web para ${sector.name}`}
					>
						<span>Solicitar presupuesto</span>
						<span
							class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
							aria-hidden="true"
						>
							→
						</span>
					</a>
				</footer>
			</article>
		</li>
	{/each}
</ul>

<div class="mt-24 text-center">
	<p class="mx-auto mb-6 max-w-md text-gray-600">
		¿Perteneces a un sector diferente? Ofrecemos <strong>creación de sitios web en {city}</strong>
		adaptados a cualquier tipo de negocio con precios accesibles.
	</p>
	<a
		href="#contacto"
		class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-offset-2 focus:outline-none"
	>
		<span>Consultar por mi sector</span>
		<span
			class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true"
			>→
		</span>
	</a>
</div>
