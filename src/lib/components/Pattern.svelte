<div class="grid-pattern absolute inset-0 z-0 opacity-10"></div>

<style>
	:global(:root) {
		--grid-color: rgb(34 197 94);
	}

	.grid-pattern {
		background-size: 48px 48px;

		background-image: linear-gradient(to right, var(--grid-color) 1px, transparent 3px),
			linear-gradient(to bottom, var(--grid-color) 1px, transparent 3px);
	}
</style>
