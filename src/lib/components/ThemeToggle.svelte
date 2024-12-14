<script lang="ts">
	import { onMount } from 'svelte';

	let isDark = false;

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
		isDark = !isDark;
	}
</script>

<button
	on:click={toggleTheme}
	class="relative border-2 border-black p-2
         hover:-translate-y-0.5 hover:translate-x-0.5
         active:translate-x-0 active:translate-y-0
         dark:border-white"
	aria-label="Cambiar tema"
>
	<div class="text-xl">
		{#if isDark}
			☀️
		{:else}
			🌙
		{/if}
	</div>
</button>
