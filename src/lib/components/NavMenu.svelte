<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';

	let { mobileMenu } = $props();

	let isMenuOpen = $state(false);

	const menuItems = [
		{ href: '#proyectos', text: 'Proyectos' },
		{ href: '#habilidades', text: 'Habilidades' },
		{ href: '#contacto', text: 'Contacto' }
	];

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	const isCurrentPage = $derived((href: string) => $page.url.pathname === href);
</script>

<header class="  ">
	<!-- Desktop Menu -->
	<div class="hidden h-full items-center gap-6 md:flex">
		<ul class="flex gap-6">
			{#each menuItems as item}
				<li>
					<a href={item.href} class="my-effect p relative block rounded-lg px-4 py-2 font-bold">
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Mobile Controls -->
	<div class="flex items-center md:hidden">
		<button
			type="button"
			class="my-border my-effect my-shadow my-bg rounded-xl border-2 p-2"
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
			onclick={mobileMenu}
		>
			{#if isMenuOpen}
				<X size={30} strokeWidth={2} class="my-stroke" />
			{:else}
				<Menu size={30} strokeWidth={2} class="my-stroke" />
			{/if}
		</button>
	</div>
</header>
