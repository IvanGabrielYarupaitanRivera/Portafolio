<script lang="ts">
	import { Code, Database, PocketKnife, Rocket } from 'lucide-svelte';
	import Astro from '$lib/logos/astro.svg';
	import Svelte from '$lib/logos/svelte.svg';
	import Html from '$lib/logos/html.svg';
	import Javascript from '$lib/logos/javascript.svg';
	import Tailwind from '$lib/logos/tailwind.svg';
	import Typescript from '$lib/logos/typescript.svg';
	import SupabaseDatabase from '$lib/logos/supabasedatabase.svg';
	import SupabaseAuth from '$lib/logos/supabaseauth.svg';
	import SupabaseRealtime from '$lib/logos/supabaserealtime.svg';
	import SupabaseVector from '$lib/logos/supabasevector.svg';
	import Postgresql from '$lib/logos/postgresql.svg';
	import Vercel from '$lib/logos/vercel.svg';
	import Netlify from '$lib/logos/netlify.svg';
	import Github from '$lib/logos/github.svg';
	import GithubPages from '$lib/logos/github-pages.svg';
	import CloudFlare from '$lib/logos/cloudflare-pages.svg';
	import Openrouter from '$lib/logos/openrouter.svg';
	import Figma from '$lib/logos/figma.svg';
	import UxUi from '$lib/logos/ux-ui.svg';
	import Seo from '$lib/logos/seo.svg';

	import { blur, fade } from 'svelte/transition';

	// Datos de habilidades actualizados con logos y categorías
	const skillGroups = [
		{
			title: 'Frontend',
			primary: true,
			skills: [
				{
					name: 'HTML',
					logo: Html
				},
				{
					name: 'Tailwind',
					logo: Tailwind
				},
				{
					name: 'JavaScript',
					logo: Javascript
				},
				{
					name: 'TypeScript',
					logo: Typescript
				},
				{
					name: 'Astro',
					logo: Astro
				},
				{
					name: 'SvelteKit',
					logo: Svelte
				}
			]
		},
		{
			title: 'Backend',
			primary: true,
			skills: [
				{
					name: 'Database',
					logo: SupabaseDatabase
				},
				{
					name: 'Auth',
					logo: SupabaseAuth
				},
				{
					name: 'Realtime',
					logo: SupabaseRealtime
				},
				{
					name: 'Vector',
					logo: SupabaseVector
				},
				{
					name: 'PostgreSQL',
					logo: Postgresql
				}
			]
		},

		{
			title: 'Deployment',
			primary: true,
			skills: [
				{
					name: 'Vercel',
					logo: Vercel
				},
				{
					name: 'Netlify',
					logo: Netlify
				},
				{
					name: 'Github Pages',
					logo: GithubPages
				},
				{
					name: 'Cloudflare',
					logo: CloudFlare
				}
			]
		},
		{
			title: 'Otras',
			primary: false,
			skills: [
				{
					name: 'OpenRouter',
					logo: Openrouter
				},
				{
					name: 'Figma',
					logo: Figma
				},

				{
					name: 'UX/UI',
					logo: UxUi
				},
				{
					name: 'SEO',
					logo: Seo
				},
				{
					name: 'Github',
					logo: Github
				}
			]
		}
	];

	let frontendSkill = $state(true);
	let backendSkill = $state(false);
	let deploymentSkill = $state(false);
	let otherSkill = $state(false);

	const showFrontendSkills = () => {
		frontendSkill = true;
		backendSkill = false;
		deploymentSkill = false;
		otherSkill = false;
	};
	const showBackendSkills = () => {
		frontendSkill = false;
		backendSkill = true;
		deploymentSkill = false;
		otherSkill = false;
	};
	const showDeploymentSkills = () => {
		frontendSkill = false;
		backendSkill = false;
		deploymentSkill = true;
		otherSkill = false;
	};
	const showOtherSkills = () => {
		frontendSkill = false;
		backendSkill = false;
		deploymentSkill = false;
		otherSkill = true;
	};

	const classActiveSkill = {
		active:
			'my-border my-bg my-shadow flex items-center gap-2 rounded-xl border-2 px-4 py-3 font-bold',
		inactive:
			'my-border bg-white my-shadow flex items-center gap-2 rounded-xl border-2 px-4 py-3 font-bold'
	};
</script>

<div class="container mx-auto">
	<header class="my-shadow my-border my-bg relative mb-12 rounded-xl border-2 px-8 py-6">
		<h2 class="heading-2 relative">Habilidades</h2>
	</header>

	<!-- Sección de habilidades principales con carrusel -->
	<section class="space-y-8">
		<!-- Navegación por pestañas -->
		<nav class="flex flex-wrap justify-center gap-4">
			<button
				class={frontendSkill ? classActiveSkill.active : classActiveSkill.inactive}
				onclick={showFrontendSkills}
			>
				<Code size={18} />
				Frontend
			</button>
			<button
				class={backendSkill ? classActiveSkill.active : classActiveSkill.inactive}
				onclick={showBackendSkills}
			>
				<Database size={18} />
				Backend
			</button>
			<button
				class={deploymentSkill ? classActiveSkill.active : classActiveSkill.inactive}
				onclick={showDeploymentSkills}
			>
				<Rocket size={18} />
				Deployment
			</button>
			<button
				class={otherSkill ? classActiveSkill.active : classActiveSkill.inactive}
				onclick={showOtherSkills}
			>
				<PocketKnife size={18} />
				Otras
			</button>
		</nav>

		<section class="my-component-bg my-border my-shadow relative rounded-xl border-2 p-8">
			<!-- Título dinámico de la sección -->
			<h3 class="mb-6 text-xl font-bold">
				{#if frontendSkill}
					<section in:blur class="flex items-center gap-2">
						<Code size={20} class="text-green-700" />
						<span>Desarrollo <mark class="bg-transparent text-green-700">Frontend</mark></span>
					</section>
				{:else if backendSkill}
					<section in:blur class="flex items-center gap-2">
						<Database size={20} class="text-green-700" />
						<span>Servicios <mark class="bg-transparent text-green-700">Backend</mark></span>
					</section>
				{:else if deploymentSkill}
					<section in:blur class="flex items-center gap-2">
						<Rocket size={20} class="text-green-700" />
						<span>Plataformas de <mark class="bg-transparent text-green-700">Despliegue</mark></span
						>
					</section>
				{:else if otherSkill}
					<section in:blur class="flex items-center gap-2">
						<PocketKnife size={20} class="text-green-700" />
						<span
							>Herramientas <mark class="bg-transparent text-green-700">Complementarias</mark></span
						>
					</section>
				{/if}
			</h3>

			<!-- Contenido dinámico según la pestaña seleccionada -->
			{#if frontendSkill}
				<ul
					class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3"
					role="list"
					aria-label="Habilidades de Frontend"
					in:blur
				>
					{#each skillGroups[0].skills as skill}
						<li>
							<article
								class="my-effect my-shadow my-border flex flex-col items-center rounded-xl border-2 p-4 text-center"
							>
								<header class="mb-6 flex h-10 w-10 md:h-16 md:w-16">
									<img src={skill.logo} alt={skill.name} aria-hidden="true" class="w-full" />
								</header>

								<footer class="w-full">
									<h3 class="text-sm font-bold md:text-lg">{skill.name}</h3>
								</footer>
							</article>
						</li>
					{/each}
				</ul>
			{:else if backendSkill}
				<ul
					class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3"
					role="list"
					aria-label="Habilidades de Frontend"
					in:blur
				>
					{#each skillGroups[1].skills as skill}
						<li>
							<article
								class="my-effect my-shadow my-border flex flex-col items-center rounded-xl border-2 p-4 text-center"
							>
								<header class="mb-6 flex h-10 w-10 md:h-16 md:w-16">
									<img src={skill.logo} alt={skill.name} aria-hidden="true" class="w-full" />
								</header>

								<footer class="w-full">
									<h3 class="text-sm font-bold md:text-lg">{skill.name}</h3>
								</footer>
							</article>
						</li>
					{/each}
				</ul>
			{:else if deploymentSkill}
				<ul
					class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3"
					role="list"
					aria-label="Habilidades de Frontend"
					in:blur
				>
					{#each skillGroups[2].skills as skill}
						<li>
							<article
								class="my-effect my-shadow my-border flex flex-col items-center rounded-xl border-2 p-4 text-center"
							>
								<header class="mb-6 flex h-10 w-10 md:h-16 md:w-16">
									<img src={skill.logo} alt={skill.name} aria-hidden="true" class="w-full" />
								</header>

								<footer class="w-full">
									<h3 class="text-sm font-bold md:text-lg">{skill.name}</h3>
								</footer>
							</article>
						</li>
					{/each}
				</ul>
			{:else if otherSkill}
				<ul
					class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3"
					role="list"
					aria-label="Habilidades de Frontend"
					in:blur
				>
					{#each skillGroups[3].skills as skill}
						<li>
							<article
								class="my-effect my-shadow my-border flex flex-col items-center rounded-xl border-2 p-4 text-center"
							>
								<header class="mb-6 flex h-10 w-10 md:h-16 md:w-16">
									<img src={skill.logo} alt={skill.name} aria-hidden="true" class="w-full" />
								</header>

								<footer class="w-full">
									<h3 class="text-sm font-bold md:text-lg">{skill.name}</h3>
								</footer>
							</article>
						</li>
					{/each}
				</ul>
			{/if}

			<!-- Texto descriptivo -->
			<footer class="mt-10 border-t border-neutral-100 pt-6">
				<blockquote class="relative flex flex-col gap-4 pl-6 md:pl-8">
					<!-- Línea decorativa -->
					<div class="absolute inset-y-0 left-0 flex items-center">
						<div class="h-full w-2 rounded-full bg-green-500"></div>
					</div>

					<!-- Contenido dinámico con transición -->
					{#if frontendSkill}
						<div in:blur>
							<h4 class="mb-2 text-base font-bold md:text-lg">Desarrollo Frontend</h4>
							<p class="text-sm text-gray-700 md:text-base">
								<strong class="font-semibold text-green-700"
									>Especializado en interfaces modernas y responsivas
								</strong>
								con
								<span class="font-medium">HTML</span>,
								<span class="font-medium">JavaScript</span>
								y
								<span class="font-medium">TypeScript</span>. Creo experiencias web rápidas y
								accesibles usando
								<span class="font-medium">SvelteKit</span> y <span class="font-medium">Astro</span>,
								con estilos optimizados mediante <span class="font-medium">Tailwind CSS</span>.
							</p>
						</div>
					{:else if backendSkill}
						<div in:blur>
							<h4 class="mb-2 text-base font-bold md:text-lg">Servicios Backend</h4>
							<p class="text-sm text-gray-700 md:text-base">
								<strong class="font-semibold text-green-700"
									>Implementación avanzada de Supabase</strong
								>
								para crear servicios backend completos. Experiencia en el uso de
								<span class="font-medium">PostgreSQL</span> y módulos de Supabase como
								<span class="font-medium">Database</span>, <span class="font-medium">Auth</span>,
								<span class="font-medium">Realtime</span> y <span class="font-medium">Vector</span> para
								aplicaciones escalables.
							</p>
						</div>
					{:else if deploymentSkill}
						<div in:blur>
							<h4 class="mb-2 text-base font-bold md:text-lg">Plataformas de Despliegue</h4>
							<p class="text-sm text-gray-700 md:text-base">
								<strong class="font-semibold text-green-700">Automatización de despliegues</strong>
								en plataformas como <span class="font-medium">Vercel</span>,
								<span class="font-medium">Netlify</span>,
								<span class="font-medium">GitHub Pages</span> y
								<span class="font-medium">Cloudflare</span>. Configuración de CI/CD para garantizar
								implementaciones continuas y optimización del rendimiento.
							</p>
						</div>
					{:else if otherSkill}
						<div in:blur={{ duration: 300 }}>
							<h4 class="mb-2 text-base font-bold md:text-lg">Herramientas Complementarias</h4>
							<p class="text-sm text-gray-700 md:text-base">
								<strong class="font-semibold text-green-700"
									>Dominio de herramientas esenciales</strong
								>
								para un desarrollo completo. Utilizo <span class="font-medium">Figma</span> para
								diseño UX/UI, implemento estrategias de <span class="font-medium">SEO</span>,
								integro <span class="font-medium">OpenRouter</span>
								para IA y gestiono proyectos con <span class="font-medium">GitHub</span> para control
								de versiones.
							</p>
						</div>
					{/if}
				</blockquote>
			</footer>
		</section>
	</section>
</div>
