<script lang="ts">
	let { size = 24, color = 'currentColor', class: className = '' } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	class={className}
>
	<path fill={color} d="M23 21.648H1L12 2.352z" />
</svg>
