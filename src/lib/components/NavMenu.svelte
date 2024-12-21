<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);

	const menuItems = [
		{ href: '/', text: 'Inicio' },
		{ href: '/practicando', text: 'Practicando' }
	];

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	const isCurrentPage = $derived((href: string) => $page.url.pathname === href);
</script>

<div class="flex items-center justify-between" id="nav-list">
	<!-- Desktop Menu -->
	<div class="hidden items-center gap-6 md:flex">
		<nav class="relative flex gap-6">
			{#each menuItems as item}
				<a
					href={item.href}
					aria-current={isCurrentPage(item.href) ? 'page' : undefined}
					class="relative px-1 py-2 font-bold
                        {isCurrentPage(item.href)
						? 'text-green-800 dark:text-green-400'
						: 'text-neutral-500 dark:text-neutral-200'}"
				>
					{item.text}
					{#if isCurrentPage(item.href)}
						<div
							class="absolute bottom-0 left-0 h-[4px] w-full bg-green-800"
							style:view-transition-name="nav-indicator"
						></div>
					{/if}
				</a>
			{/each}
		</nav>
		<ThemeToggle />
	</div>

	<!-- Mobile Menu Button -->
	<div class="flex items-center gap-4 md:hidden">
		<ThemeToggle />

		<button
			type="button"
			class="my-border my-effect my-shadow border-2 p-2"
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
		class="my-border my-component-bg absolute left-0 right-0 top-24 z-10 -mt-2 border-b-2 pb-4 pt-4 md:hidden"
		in:slide={{ duration: 300 }}
	>
		<nav class="container mx-auto flex flex-col gap-4 px-4 pb-2">
			{#each menuItems as item}
				<a
					href={item.href}
					aria-current={isCurrentPage(item.href) ? 'page' : undefined}
					class="relative px-1 py-2 font-bold
				{isCurrentPage(item.href)
						? 'text-green-800 underline decoration-4 underline-offset-8 dark:text-green-400'
						: 'text-neutral-500 dark:text-neutral-200'}"
					onclick={toggleMenu}
				>
					{item.text}
				</a>
			{/each}
		</nav>
	</div>
{/if}

<style>
	/* Asegurarse que tanto el elemento antiguo como el nuevo tengan la misma altura */
	::view-transition-old(nav-indicator),
	::view-transition-new(nav-indicator) {
		height: 4px;
	}
</style>
