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
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M19.463 3.994c-2.682-1.645-5.023-.983-6.429.073c-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.011 7.219 2.35 4.537 3.994C1.018 6.152.222 13.274 8.34 19.283c1.546 1.144 2.319 1.716 3.66 1.716s2.114-.572 3.66-1.716c8.118-6.009 7.322-13.13 3.803-15.29M12 9v6m-3-3h6"
		color="currentColor"
	/>
</svg>
