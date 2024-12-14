<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="border-b-2 border-black dark:border-white">
	<nav class="container mx-auto px-4 py-6" aria-label="navegación principal">
		<div class="flex items-center justify-between">
			<a
				href="/"
				class="font-cabinet border-2 border-black px-4
                       py-2 text-xl font-bold text-black
                       hover:-translate-y-0.5 hover:translate-x-0.5
                       active:translate-x-0 active:translate-y-0
                       dark:border-white dark:text-white"
			>
				Ivan
			</a>
			<ThemeToggle />
		</div>
	</nav>
</header>
