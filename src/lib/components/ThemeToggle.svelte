<script lang="ts">
	function toggleTheme() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<button onclick={toggleTheme} class="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">🌓</button>
