<script lang="ts">
	import NavMenu from './NavMenu.svelte';
</script>

<header class="my-border my-component-bg relative z-20 border-b-2">
	<nav class="container mx-auto px-4 py-6" aria-label="navegación principal">
		<div class="flex justify-between">
			<a href="/" class="my-border my-bg heading-3 my-effect my-shadow border-2 px-4 py-2">
				Ivan Gabriel
			</a>

			<NavMenu />
		</div>
	</nav>
</header>
