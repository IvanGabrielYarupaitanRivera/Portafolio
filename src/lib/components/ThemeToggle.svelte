<script lang="ts">
	import { SunMoon } from 'lucide-svelte';

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button
	on:click={toggleTheme}
	class="relative border-2 border-black
           hover:-translate-y-0.5 hover:translate-x-0.5
           active:translate-x-0 active:translate-y-0
           dark:border-white"
	aria-label="Cambiar tema"
>
	<div class="relative p-2 hover:rotate-12 hover:scale-110">
		<SunMoon class="stroke-black dark:stroke-white" size={24} strokeWidth={2}></SunMoon>
	</div>
</button>
