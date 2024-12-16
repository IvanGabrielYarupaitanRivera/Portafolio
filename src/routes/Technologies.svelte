<script lang="ts">
	const technologies = [
		//html, tailwind, typescript, svelte, supabase, vercel
		{
			name: 'HTML',
			logo: '/logos/Logo-de-HTML.webp'
		},
		{
			name: 'Tailwind CSS',
			logo: '/logos/Logo-de-Tailwind.webp'
		},
		{
			name: 'TypeScript',
			logo: '/logos/Logo-de-Typescript.webp'
		},
		{
			name: 'SvelteKit',
			logo: '/logos/Logo-de-Svelte.webp'
		},
		{
			name: 'Supabase',
			logo: '/logos/Logo-de-Supabase.webp'
		},
		{
			name: 'Vercel',
			logo: '/logos/Logo-de-Vercel.webp'
		}
	];
</script>

<section class="py-16">
	<h2 class="heading-2">Tecnologías que domino</h2>

	<div class="mt-4 flex flex-row flex-wrap justify-center gap-6">
		{#each technologies as tech}
			<div
				class="flex w-32 flex-col items-center gap-2 rounded-xl border-2 border-sky-900 py-4 text-center hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 md:w-44 md:gap-4 dark:border-sky-100"
			>
				<div class="flex h-16 w-16 items-center justify-center md:h-24 md:w-24">
					<img src={tech.logo} alt={tech.name} />
				</div>
				<p class="p">{tech.name}</p>
			</div>
		{/each}
	</div>
</section>
