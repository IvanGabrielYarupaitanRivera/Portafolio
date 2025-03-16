<script>
	import {
		Github,
		LinkedinIcon,
		LucideFacebook,
		Mail,
		ArrowRight,
		ExternalLink,
		Code,
		MessageSquare,
		Map
	} from 'lucide-svelte';

	const currentYear = $state(new Date().getFullYear());

	const socialLinks = $state([
		{
			name: 'GitHub',
			url: 'https://github.com/IvanGabrielYarupaitanRivera',
			icon: Github
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ivan-yarupaitan-rivera/',
			icon: LinkedinIcon
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/vanchi.programador',
			icon: LucideFacebook
		}
	]);

	const quickLinks = $state([
		{ name: 'Proyectos', url: '#proyectos' },
		{ name: 'Habilidades', url: '#habilidades' },
		{ name: 'Contacto', url: '#contacto' }
	]);
</script>

<footer class="my-component-bg my-border relative z-30 border-t-2 pt-12 pb-8">
	<div class="container mx-auto px-4">
		<!-- Sección principal del footer con diseño grid -->
		<div
			class="mb-14 grid grid-cols-1 gap-10 text-center md:mx-auto md:max-w-xl md:grid-cols-2 md:gap-16 md:text-left lg:max-w-3xl lg:gap-24 xl:max-w-6xl"
		>
			<!-- Columna 1: Info -->
			<section
				class="flex flex-col space-y-1"
				role="contentinfo"
				aria-label="Información del desarrollador"
			>
				<header class="flex items-center justify-center gap-3 md:justify-normal">
					<h3 class="heading-3">Vanchi</h3>
				</header>
				<p class="p max-w-md">
					Desarrollador Full Stack especializado en crear experiencias digitales accesibles e
					interactivas.
				</p>
			</section>

			<!-- Columna 2: Ubicación y redes -->
			<div class="flex flex-col justify-between">
				<section class="mb-8" aria-labelledby="location-heading">
					<header class="flex items-center justify-center gap-3 md:justify-normal">
						<h4 id="location-heading" class="heading-4">Ubicación</h4>
					</header>
					<address class="p not-italic">Junín, Perú</address>
				</section>

				<section class="mb-6" aria-labelledby="social-heading">
					<header class="flex items-center justify-center gap-3 md:justify-normal">
						<h4 id="social-heading" class="heading-4">Redes Sociales</h4>
					</header>

					<nav class="mt-2 flex justify-center gap-5 md:justify-normal" aria-label="Redes sociales">
						{#each socialLinks as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Visita mi perfil de ${link.name}`}
								class="my-border my-shadow my-effect my-transition flex h-10 w-10 items-center justify-center rounded-lg border-2 md:h-12 md:w-12"
							>
								<link.icon size={18} class="my-stroke-icon stroke-1" aria-hidden="true" />
							</a>
						{/each}
					</nav>
				</section>
			</div>
		</div>

		<!-- Copyright -->
		<div
			class="grid grid-cols-1 gap-10 text-center md:mx-auto md:max-w-xl md:grid-cols-2 md:gap-16 md:text-left lg:max-w-3xl lg:gap-24 xl:max-w-6xl"
		>
			<p class="mb-4 text-center text-sm text-neutral-700 md:mb-0 md:text-left">
				© {currentYear} Ivan Yarupaitan Rivera
			</p>
		</div>
	</div>
</footer>
