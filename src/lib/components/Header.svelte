<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="rounded-3xl border-b-2 border-blue-950 dark:border-orange-100">
	<nav class="container mx-auto px-4 py-6" aria-label="navegación principal">
		<div class="flex items-center justify-between">
			<a
				href="/"
				class="font-cabinet rounded-3xl border-2 border-blue-950 px-4
					   py-2 text-xl font-bold text-blue-950
					   hover:-translate-y-0.5 hover:translate-x-0.5
					   active:translate-x-0 active:translate-y-0
					   dark:border-orange-100 dark:text-orange-50"
			>
				Ivan
			</a>
			<ThemeToggle />
		</div>
	</nav>
</header>
