<!-- NavMenu.svelte -->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';

	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	const menuItems = [
		{ href: '/', text: 'Inicio' },
		{ href: '/proyectos', text: 'Proyectos' },
		{ href: '/sobre-mi', text: 'Sobre Mí' },
		{ href: '/contacto', text: 'Contacto' }
	];
</script>

<div class="flex items-center justify-between">
	<!-- Desktop Menu -->
	<div class="hidden items-center gap-6 md:flex">
		{#each menuItems as item}
			<a
				href={item.href}
				class="text-slate-800 hover:text-orange-600
                           dark:text-slate-50 dark:hover:text-orange-500"
			>
				{item.text}
			</a>
		{/each}
		<ThemeToggle />
	</div>

	<!-- Mobile Menu Button -->
	<div class="flex items-center gap-4 md:hidden">
		<ThemeToggle />

		<button
			type="button"
			class="  rounded-3xl border-2 border-sky-900 p-2
                       hover:-translate-y-0.5 hover:translate-x-0.5
                       active:translate-x-0 active:translate-y-0
                       dark:border-sky-300"
			aria-controls="navbar-dropdown"
			aria-expanded={isMenuOpen}
			on:click={toggleMenu}
		>
			<span class="sr-only">
				{isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
			</span>

			{#if isMenuOpen}
				<X size={24} strokeWidth={2} class="stroke-slate-800 dark:stroke-slate-50" />
			{:else}
				<Menu size={24} strokeWidth={2} class="stroke-slate-800 dark:stroke-slate-50" />
			{/if}
		</button>
	</div>
</div>

<!-- Mobile Menu -->
{#if isMenuOpen}
	<div
		class="absolute left-0 right-0 top-20 rounded-3xl border-b-2 border-sky-900
                   bg-sky-50 py-4 md:hidden
                   dark:border-sky-300 dark:bg-slate-900"
		transition:slide
	>
		<div class="container mx-auto flex flex-col gap-4 px-4">
			{#each menuItems as item}
				<a
					href={item.href}
					class="text-slate-800 hover:text-orange-600
                           dark:text-slate-50 dark:hover:text-orange-500"
					on:click={toggleMenu}
				>
					{item.text}
				</a>
			{/each}
		</div>
	</div>
{/if}
