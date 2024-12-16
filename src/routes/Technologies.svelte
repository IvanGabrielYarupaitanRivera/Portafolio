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

<section class="">
	<h2 class="heading-2">Tecnologías que uso</h2>

	<div class="mt-8 flex flex-row flex-wrap justify-center gap-6 md:gap-8">
		{#each technologies as tech}
			<div
				class="flex w-32 flex-col items-center gap-2 rounded-3xl border-2 border-sky-900 bg-white px-2 pb-4 pt-6
				 
				hover:-translate-y-1
                hover:translate-x-1 active:translate-x-0 active:translate-y-0 md:w-44
                md:gap-4 md:px-4 md:pb-6 md:pt-8 dark:border-sky-100
                 dark:bg-neutral-800
                "
			>
				<div class="  h-16 w-16 md:h-24 md:w-24">
					<img src={tech.logo} alt={tech.name} />
				</div>
				<p class="p">{tech.name}</p>
			</div>
		{/each}
	</div>
</section>
