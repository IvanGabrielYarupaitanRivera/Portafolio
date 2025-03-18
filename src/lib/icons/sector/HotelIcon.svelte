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
	<path
		fill={color}
		d="M2 19q-.425 0-.712-.288T1 18V5q0-.425.288-.712T2 4t.713.288T3 5v9h8V8q0-.825.588-1.412T13 6h6q1.65 0 2.825 1.175T23 10v8q0 .425-.288.713T22 19t-.712-.288T21 18v-2H3v2q0 .425-.288.713T2 19m5-6q-1.25 0-2.125-.875T4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13"
	/>
</svg>
