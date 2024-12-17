<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);

	const menuItems = [
		{ href: '/', text: 'Inicio' },
		{ href: '/blog', text: 'Blog' }
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
				class=" font-bold hover:text-green-500
			    dark:hover:text-green-500
			   {isCurrentPage(item.href)
					? ' text-green-800 underline underline-offset-8 dark:text-green-600'
					: 'text-neutral-500 dark:text-neutral-200'}"
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
			class="my-border my-effect border-2 p-2"
			aria-expanded={isMenuOpen}
			onclick={toggleMenu}
		>
			<span class="sr-only">
				{isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
			</span>

			{#if isMenuOpen}
				<div>
					<X size={24} strokeWidth={2} class="my-stroke" />
				</div>
			{:else}
				<div>
					<Menu size={24} strokeWidth={2} class="my-stroke" />
				</div>
			{/if}
		</button>
	</div>
</div>

<!-- Mobile Menu -->
{#if isMenuOpen}
	<div
		id="mobile-menu"
		class="my-border my-component-bg absolute left-0 right-0 top-24 z-10 border-b-2 pb-4 md:hidden"
		transition:slide={{ duration: 500 }}
	>
		<div class="container mx-auto flex flex-col gap-4 px-4 pb-2">
			{#each menuItems as item}
				<a
					href={item.href}
					class=" font-bold hover:text-green-500
			    dark:hover:text-green-500
			   {isCurrentPage(item.href)
						? ' text-green-800 underline underline-offset-8 dark:text-green-600'
						: 'text-neutral-500 dark:text-neutral-200'}"
					onclick={toggleMenu}
				>
					{item.text}
				</a>
			{/each}
		</div>
	</div>
{/if}
