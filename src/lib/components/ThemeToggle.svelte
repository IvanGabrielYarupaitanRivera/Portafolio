<script lang="ts">
	import { SunMoon } from 'lucide-svelte';

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button
	on:click={toggleTheme}
	class="relative rounded-3xl border-2 border-sky-600 p-2 hover:-translate-y-0.5
             
           hover:translate-x-0.5 hover:border-orange-600

            hover:bg-orange-600/10
           active:translate-x-0 active:translate-y-0
           dark:border-sky-400
           dark:hover:border-orange-500 dark:hover:bg-orange-500/10"
	aria-label="Cambiar tema"
>
	<SunMoon
		size={24}
		strokeWidth={2}
		class="stroke-slate-800 transition-colors duration-300
               dark:stroke-slate-50"
	/>
</button>
