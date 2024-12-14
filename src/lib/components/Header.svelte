<script lang="ts">
	import NavMenu from './NavMenu.svelte';
</script>

<header class="rounded-3xl border-b-2 border-sky-900 dark:border-sky-300">
	<nav class="container mx-auto px-4 py-6" aria-label="navegación principal">
		<div class="flex justify-between">
			<a
				href="/"
				class="font-cabinet rounded-3xl border-2 border-sky-900 bg-orange-400 px-4 py-2
					   text-xl font-bold text-slate-800 hover:-translate-y-0.5
					   hover:translate-x-0.5 hover:bg-orange-300 active:translate-x-0 active:translate-y-0
					   dark:border-sky-300 dark:bg-orange-600 dark:text-slate-50
					    dark:hover:bg-orange-700"
			>
				Ivan Gabriel
			</a>

			<NavMenu />
		</div>
	</nav>
</header>
