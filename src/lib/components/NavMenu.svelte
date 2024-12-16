<script lang="ts">
	import { slide } from 'svelte/transition';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';

	let isMenuOpen = $state(false);

	const menuItems = [
		{ href: '/', text: 'Inicio' },
		/* 
		{ href: '/proyectos', text: 'Proyectos' },
		{ href: '/sobre-mi', text: 'Sobre Mí' },
		{ href: '/contacto', text: 'Contacto' },
		*/
		{ href: '/practicando', text: 'Practicando' }
	];

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	const isCurrentPage = $derived((href: string) => $page.url.pathname === href);
</script>

<div class="flex items-center justify-between">
	<!-- Desktop Menu -->
	<div class="hidden items-center gap-6 md:flex">
		{#each menuItems as item}
			<a
				href={item.href}
				class="text-slate-800 hover:text-orange-600
			   dark:text-slate-50 dark:hover:text-orange-400
			   {isCurrentPage(item.href) ? 'text-orange-400 dark:text-orange-600' : ''}"
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
                       dark:border-sky-100"
			aria-expanded={isMenuOpen}
			onclick={toggleMenu}
		>
			<span class="sr-only">
				{isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
			</span>

			{#if isMenuOpen}
				<div transition:slide={{ duration: 500 }}>
					<X size={24} strokeWidth={2} class="stroke-slate-800 dark:stroke-slate-50" />
				</div>
			{:else}
				<div transition:slide={{ duration: 500 }}>
					<Menu size={24} strokeWidth={2} class="stroke-slate-800 dark:stroke-slate-50" />
				</div>
			{/if}
		</button>
	</div>
</div>

<!-- Mobile Menu -->
{#if isMenuOpen}
	<div
		id="mobile-menu"
		class="absolute left-0 right-0 top-24 z-10 -mt-6 rounded-b-3xl border-b-2
	   border-sky-900 bg-white pb-4 pt-8 md:hidden
	   dark:border-sky-100 dark:bg-neutral-800"
		transition:slide={{ duration: 500 }}
	>
		<div class="container mx-auto flex flex-col gap-4 px-4 pb-2">
			{#each menuItems as item}
				<a
					href={item.href}
					class="text-slate-800 hover:text-orange-600
				   dark:text-slate-50 dark:hover:text-orange-500
				   {isCurrentPage(item.href) ? 'text-orange-400 dark:text-orange-600' : ''}"
					onclick={toggleMenu}
				>
					{item.text}
				</a>
			{/each}
		</div>
	</div>
{/if}
