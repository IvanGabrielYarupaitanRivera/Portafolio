<script lang="ts">
	let { size = 24, color = 'currentColor', class: className = '' } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 256 256"
	class={className}
>
	<path
		fill={color}
		d="m240.49 144.49l-32 32a12 12 0 0 1-17-17L203 148h-78l-48 48h19a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l48-48V53L96.49 64.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L132 53v71h71l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"
	/>
</svg>
