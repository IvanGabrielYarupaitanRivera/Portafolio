<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import Technologies from './Technologies.svelte';
</script>

<div class="relative z-10 px-8 py-36 md:px-36">
	<!-- Fondo decorativo -->
	<div
		class="absolute inset-0 z-0 -my-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#0369A1_100%)]"
	></div>

	<HeroSection></HeroSection>
</div>

<div
	class="relative z-10 rounded-3xl border-t-2 border-sky-900 bg-sky-50 px-8 py-6 md:px-24 dark:border-sky-100 dark:bg-neutral-900"
>
	<Technologies></Technologies>
</div>
