<script lang="ts">
	import { Check } from 'lucide-svelte';

	// Propiedades con sintaxis de Svelte 5
	let { city = 'Huancayo' }: { city: string } = $props();

	// Estado para sectores empresariales usando sintaxis Svelte 5
	const businessSectors = $state([
		{
			id: 1,
			name: `Restaurantes y Cafés en ${city}`,
			icon: '🍽️',
			benefits: [
				`Diseño de página web en ${city} con menú digital interactivo para restaurantes`,
				`Creación de páginas web optimizadas para búsquedas locales en ${city}`
			]
		},
		{
			id: 2,
			name: `Estudios Jurídicos de ${city}`,
			icon: '⚖️',
			benefits: [
				`Página web para negocio jurídico en ${city} con perfil de abogados`,
				'Secciones especializadas por áreas de práctica legal con formularios de contacto'
			]
		},
		{
			id: 3,
			name: `Consultorios y Clínicas en ${city}`,
			icon: '⚕️',
			benefits: [
				`Hacer página web en ${city} con información de servicios médicos`,
				'Perfiles detallados de los doctores especialistas y sus tratamientos respectivos'
			]
		},
		{
			id: 4,
			name: `Emprendedores y Freelancers`,
			icon: '💼',
			benefits: [
				`Creación de páginas web profesionales para emprendedores de ${city}`,
				'Portafolios online con proyectos destacados incluyendo un formulario de contacto'
			]
		},
		{
			id: 5,
			name: `Tiendas y Comercios de ${city}`,
			icon: '🛍️',
			benefits: [
				`Página web para negocio comercial en ${city} con catálogo de productos`,
				'Optimización SEO local para atraer clientes que estén buscando tus productos'
			]
		},
		{
			id: 6,
			name: `Hoteles y Hospedajes en ${city}`,
			icon: '🏨',
			benefits: [
				'Galería de habitaciones incluyendo imágenes y descripciones detalladas',
				`Crear página web en ${city} con información turística local para visitantes`
			]
		}
	]);
</script>

<header class="mb-16 text-center" aria-labelledby="sectors-title">
	<div class="relative mb-6 inline-block">
		<h2 id="sectors-title" class="heading-2 relative z-10 mx-4">
			Páginas Web para Cada Sector en <span
				class="my-span underline decoration-blue-500/30 decoration-10 underline-offset-1"
				>{city}</span
			>
		</h2>
	</div>

	<p class="p mx-auto max-w-sm md:max-w-2xl">
		Soluciones web personalizadas para <strong>empresas</strong>, <strong>negocios</strong> y
		<strong>emprendedores</strong>
		de diferentes sectores en {city}. Cada <strong>página web</strong> está diseñada considerando las
		necesidades específicas de su industria.
	</p>
</header>

<ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
	{#each businessSectors as sector (sector.id)}
		<li>
			<article
				class="my-border my-shadow my-effect my-transition h-full rounded-xl border-2 bg-white p-6 text-center"
			>
				<header>
					<span class="mb-4 block text-4xl" role="img" aria-label={`Ícono de ${sector.name}`}>
						{sector.icon}
					</span>
					<h3 class="mb-3 text-lg font-bold">{sector.name}</h3>
				</header>

				<section aria-labelledby={`benefits-${sector.id}`}>
					<h4 id={`benefits-${sector.id}`} class="sr-only">Beneficios para {sector.name}</h4>
					<ul class="mt-4 space-y-3 text-sm" aria-label={`Características para ${sector.name}`}>
						{#each sector.benefits as benefit, i}
							<li class="flex items-start text-green-800">
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

				<footer class="mt-6 text-center">
					<a
						href="#contacto"
						class="my-border my-shadow my-active-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
						aria-label={`Solicitar más información sobre páginas web para ${sector.name}`}
					>
						<span>Solicitar información</span>
						<span
							class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
							aria-hidden="true">→</span
						>
					</a>
				</footer>
			</article>
		</li>
	{/each}
</ul>

<div class="mt-12 text-center">
	<p class="text-gring-gray-600 mx-auto mb-6 max-w-md">
		¿Perteneces a un sector diferente? Creamos <strong>páginas web en {city}</strong> adaptadas a cualquier
		tipo de negocio.
	</p>
	<a
		href="#contacto"
		class="my-border my-shadow my-bg my-transition group inline-flex items-center rounded-lg border-2 px-4 py-2 font-bold text-green-950 focus:ring-2 focus:ring-offset-2 focus:outline-none"
	>
		<span> Consulta por tu sector específico </span>

		<span
			class="ml-3 text-base transition-transform duration-300 group-hover:translate-x-1"
			aria-hidden="true"
			>→
		</span>
	</a>
</div>
