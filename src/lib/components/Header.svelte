<script lang="ts">
	import NavMenu from './NavMenu.svelte';
</script>

<header class="my-border my-component-bg z-20 border-b-2">
	<nav class="container mx-auto pb-6 pl-4 pr-6 pt-4" aria-label="navegación principal">
		<div class="flex justify-between">
			<a href="/" class="my-border my-bg heading-3 my-effect my-shadow border-2 px-4 py-2">
				Ivan Gabriel
			</a>

			<NavMenu />
		</div>
	</nav>
</header>
