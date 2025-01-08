<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	let isMenuOpen = $state(false);
	let isCloseMenuByNav = $state(false);

	const menuItems = [
		{ href: '/', text: 'Inicio' },
		{ href: '/practicando', text: 'Practicando' }
	];

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	const isCurrentPage = $derived((href: string) => $page.url.pathname === href);
</script>

<header>
	<!-- Desktop Menu -->
	<div class="hidden h-full items-center gap-6 md:flex">
		<ul class="flex gap-6">
			{#each menuItems as item}
				<li>
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
				</li>
			{/each}
		</ul>
	</div>

	<!-- Mobile Controls -->
	<div class="flex items-center gap-4 md:hidden">
		<button
			type="button"
			class="my-border my-effect my-shadow my-bg border-2 p-2"
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
			onclick={() => {
				toggleMenu();
				isCloseMenuByNav = true;
			}}
		>
			{#if isMenuOpen}
				<X size={30} strokeWidth={2} class="my-stroke" />
			{:else}
				<Menu size={30} strokeWidth={2} class="my-stroke" />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<nav
			id="mobile-menu"
			aria-label="Menú móvil"
			class="my-border my-component-bg absolute left-0 right-0 top-24 z-10 -mt-2 border-b-2 pb-4 pt-4 md:hidden"
			in:slide={{ duration: 300 }}
			out:slide={{ duration: isCloseMenuByNav ? 500 : 0 }}
		>
			<ul class="container mx-auto flex flex-col gap-4 px-4 pb-4 pt-1">
				{#each menuItems as item}
					<li>
						<a
							onclick={() => {
								toggleMenu();
								isCloseMenuByNav = false;
							}}
							href={item.href}
							aria-current={isCurrentPage(item.href) ? 'page' : undefined}
							class="relative px-1 py-2 font-bold
                            {isCurrentPage(item.href)
								? 'text-green-800 underline decoration-4 underline-offset-8 dark:text-green-400'
								: 'text-neutral-500 dark:text-neutral-200'}"
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	::view-transition-old(nav-indicator),
	::view-transition-new(nav-indicator) {
		height: 4px;
	}
</style>
