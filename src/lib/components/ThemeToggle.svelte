<script lang="ts">
	import { SunMoon } from 'lucide-svelte';

	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button
	onclick={toggleTheme}
	class="my-border my-bg my-effect my-shadow border-2 p-2"
	aria-label="Cambiar tema"
>
	<SunMoon size={30} strokeWidth={2} class="my-stroke"></SunMoon>
</button>
