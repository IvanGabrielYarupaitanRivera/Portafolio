<script lang="ts">
	import { blur, fly } from 'svelte/transition';
	import NavMenu from './NavMenu.svelte';
	import { X } from 'lucide-svelte';
	let isCloseMenuByNav = $state(false);

	let showMobileMenu = $state(false);

	const menuItems = [
		{ href: '#proyectos', text: 'Proyectos' },
		{ href: '#habilidades', text: 'Habilidades' },
		{ href: '#contacto', text: 'Contacto' }
	];

	const toggleMenu = () => (showMobileMenu = !showMobileMenu);
</script>

<section class="container sticky top-2 z-30 mx-auto mt-2">
	<header
		class="my-shadow my-component-bg my-border ml-3 mr-4 rounded-xl border-2 pb-6 pl-6 pr-8 pt-4"
	>
		<nav class="flex justify-between" aria-label="navegación principal ">
			<a
				href="/"
				class="my-border heading-3 my-shadow left-0 right-0 top-0 flex items-center rounded-xl border-2 bg-green-500 px-4 py-4 hover:bg-green-500"
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
							class="my-effect p relative block rounded-lg px-4 py-2 font-bold"
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
{/if}
