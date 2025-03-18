<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let { mobileMenu } = $props();

	let isMenuOpen = $state(false);

	const menuItems = $state([
		{ href: '#servicios', text: 'Servicios' },
		{ href: '#proyectos', text: 'Proyectos' },
		{ href: '#testimonios', text: 'Testimonios' },
		{ href: '#contacto', text: 'Contacto' }
	]);
</script>

<header>
	<!-- Desktop Menu -->
	<nav class="hidden h-full items-center gap-6 md:flex">
		<ul class="flex gap-6">
			{#each menuItems as item}
				<li>
					<a href={item.href} class="p relative block rounded-lg px-4 py-2 font-bold">
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Mobile Controls -->
	<div class="flex items-center md:hidden">
		<button
			type="button"
			class="my-border my-shadow my-bg my-transition rounded-xl border-2 p-2"
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
			onclick={mobileMenu}
		>
			{#if isMenuOpen}
				<X size={30} strokeWidth={2} class="my-stroke" aria-hidden="true" />
			{:else}
				<Menu size={30} strokeWidth={2} class="my-stroke" aria-hidden="true" />
			{/if}
		</button>
	</div>
</header>
