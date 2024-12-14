<script lang="ts">
	import { SunMoon } from 'lucide-svelte';

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button
	onclick={toggleTheme}
	class=" rounded-3xl border-2 border-sky-900 bg-orange-400 p-2 hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-orange-300 active:translate-x-0 active:translate-y-0 dark:border-sky-100 dark:bg-orange-600 dark:hover:bg-orange-700"
	aria-label="Cambiar tema"
>
	<SunMoon
		size={24}
		strokeWidth={2}
		class="stroke-slate-800  
               dark:stroke-slate-50"
	></SunMoon>
</button>
