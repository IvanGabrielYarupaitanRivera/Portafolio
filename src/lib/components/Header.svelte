<script lang="ts">
	import { blur, fly } from 'svelte/transition';
	import NavMenu from './NavMenu.svelte';
	import { page } from '$app/stores';
	import { X } from 'lucide-svelte';
	let isCloseMenuByNav = $state(false);

	let showMobileMenu = $state(false);

	const menuItems = [
		{ href: '#proyectos', text: 'Proyectos' },
		{ href: '#contacto', text: 'Contacto' }
	];

	const toggleMenu = () => (showMobileMenu = !showMobileMenu);
</script>

<header
	class="my-shadow my-component-bg my-border container sticky top-4 z-20 m-4 mx-auto rounded-xl border-2 pb-6 pl-6 pr-8 pt-4 backdrop-blur-xl"
>
	<nav class="flex justify-between" aria-label="navegación principal">
		<a
			href="/"
			class="my-border my-bg heading-3 my-effect my-shadow left-0 right-0 top-0 flex items-center rounded-xl border-2 px-4 py-4"
		>
			<span class="leading-[0.6]">Vanchi</span>
		</a>

		<NavMenu mobileMenu={toggleMenu} />
	</nav>
</header>

{#if showMobileMenu}
	<nav
		id="mobile-menu"
		aria-label="Menú móvil"
		class="fixed inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-xl md:hidden"
		transition:blur={{ duration: 300 }}
	>
		<div
			class="my-shadow my-border relative rounded-xl border-2 bg-white"
			in:fly={{ y: -50, duration: 300 }}
			out:fly={{ y: -50, duration: isCloseMenuByNav ? 300 : 0 }}
		>
			<button
				type="button"
				class="my-effect my-bg my-border my-shadow absolute -right-6 -top-6 rounded-xl border-2 p-2"
				aria-label="Cerrar menú"
				onclick={() => {
					toggleMenu();
					isCloseMenuByNav = true;
				}}
			>
				<X size={30} strokeWidth={2} class="my-stroke" />
			</button>

			<ul class="flex flex-col gap-4 p-6">
				{#each menuItems as item}
					<li>
						<a
							onclick={() => {
								showMobileMenu = false;
							}}
							href={item.href}
							class="my-effect : 'text-neutral-500 '} relative block rounded-lg px-4 py-2 font-bold hover:bg-green-600"
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
{/if}
