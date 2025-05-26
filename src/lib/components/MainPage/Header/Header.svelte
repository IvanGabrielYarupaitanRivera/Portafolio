<script lang="ts">
	import { blur } from 'svelte/transition';
	import NavMenu from './NavMenu.svelte';
	import { X } from 'lucide-svelte';

	let isCloseMenuByNav = $state(false);
	let showMobileMenu = $state(false);

	const menuItems = $state([
		{ href: '/#servicios', text: 'Servicios' },
		{ href: '/proyectos', text: 'Proyectos' },
		{ href: '/#testimonios', text: 'Testimonios' },
		{ href: '/#contacto', text: 'Contacto' }
	]);

	function toggleMenu() {
		showMobileMenu = !showMobileMenu;
	}
</script>

<section class="sticky top-2 z-30 container mx-auto mt-2">
	<header
		class="my-shadow my-component-bg my-border mr-4 ml-3 rounded-xl border-2 pt-4 pr-8 pb-6 pl-6"
	>
		<nav class="flex justify-between" aria-label="navegación principal ">
			<a
				href="/"
				class="my-border heading-3 my-shadow my-bg my-transition top-0 right-0 left-0 flex items-center rounded-xl border-2 px-4 py-4"
				aria-label="Página principal - Vanchi"
			>
				<span class="leading-[0.6]">Vanchi</span>
			</a>

			<NavMenu mobileMenu={toggleMenu} />
		</nav>
	</header>
</section>

{#if showMobileMenu}
	<nav
		id="mobile-menu"
		aria-label="Menú móvil"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xl md:hidden"
		transition:blur
	>
		<div
			class="my-shadow my-border relative rounded-xl border-2 bg-white"
			in:blur={{ duration: 300 }}
			out:blur={{ duration: isCloseMenuByNav ? 300 : 0 }}
		>
			<button
				type="button"
				class=" my-bg my-transition my-border my-shadow absolute -top-6 -right-6 rounded-xl border-2 p-2"
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
							class="p relative block rounded-lg px-4 py-2 font-bold"
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
{/if}
