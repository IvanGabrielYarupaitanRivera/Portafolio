<script lang="ts">
	import { SunMoon } from 'lucide-svelte';

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button
	on:click={toggleTheme}
	class="relative rounded-3xl border-2 border-sky-600 p-2 hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-x-0 active:translate-y-0 dark:border-sky-400"
	aria-label="Cambiar tema"
>
	<SunMoon
		size={24}
		strokeWidth={2}
		class="stroke-slate-800  
               dark:stroke-slate-50"
	/>
</button>
