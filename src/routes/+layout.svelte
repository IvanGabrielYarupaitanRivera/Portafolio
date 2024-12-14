<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="min-h-screen bg-gray-200 dark:bg-gray-900">
	<!-- Header con navegación -->
	<header>
		<nav class="container mx-auto px-4 py-4" aria-label="navegación principal">
			<div class="flex items-center justify-between">
				<a href="/" class="text-xl font-bold text-gray-800 dark:text-white"> Ivan </a>
				<ThemeToggle />
			</div>
		</nav>
	</header>

	<!-- Contenido principal -->
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="container mx-auto px-4 py-6 text-gray-600 dark:text-gray-400">
		<p class="text-center">© {new Date().getFullYear()} - Creado con 💖</p>
	</footer>
</div>
