<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-zinc-300 dark:bg-zinc-950">
	<!-- Header con navegación -->
	<header class="border-b-2 border-black dark:border-white">
		<nav class="container mx-auto px-4 py-6" aria-label="navegación principal">
			<div class="flex items-center justify-between">
				<a
					href="/"
					class="font-cabinet border-2 border-black px-4
                           py-2 text-xl font-bold text-black
						    
						   hover:-translate-y-0.5
						   hover:translate-x-0.5
						   active:translate-x-0
						   active:translate-y-0 dark:border-white
                           dark:text-white"
				>
					Ivan
				</a>
				<ThemeToggle />
			</div>
		</nav>
	</header>

	<!-- Contenido principal -->
	<main class="container mx-auto px-4 py-8">
		<div class="border-2 border-black p-8 dark:border-white">
			{@render children()}
		</div>
	</main>

	<!-- Footer -->
	<footer class="container mx-auto border-t-2 border-black px-4 py-6 dark:border-white">
		<p class=" text-center text-zinc-700 dark:text-zinc-300">
			© {new Date().getFullYear()} - Creado con
			<span class="inline-block hover:-translate-y-1">💖</span>
		</p>
	</footer>
</div>
