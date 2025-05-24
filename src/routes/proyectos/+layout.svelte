<script lang="ts">
	import Header from '$lib/components/MainPage/Header/Header.svelte';

	let { children } = $props();
</script>

<Header />

{@render children()}
