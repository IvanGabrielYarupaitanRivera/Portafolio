<script lang="ts">
	import HeroSection from './HeroSection.svelte';
	import Technologies from './Technologies.svelte';
</script>

<div class="relative z-10 px-8 py-36 md:px-36">
	<!-- Fondo decorativo -->
	<!-- <div
		class="absolute inset-0 z-0 -my-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#0369A1_100%)]"
	></div> -->

	<HeroSection></HeroSection>
</div>

<div class="my-border relative z-10 border-t-2 px-8 py-6 md:px-24">
	<Technologies></Technologies>
</div>
