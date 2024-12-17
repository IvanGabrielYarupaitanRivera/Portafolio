<script lang="ts">
	import { SquareDashedBottomCode } from 'lucide-svelte';
</script>

<section class="relative z-10">
	<!-- Ícono hero -->
	<div class="mb-8 flex justify-center">
		<div class="my-bg my-effect border-4 border-green-900 p-3 dark:border-green-100">
			<SquareDashedBottomCode size={50} strokeWidth={2} class="my-stroke"></SquareDashedBottomCode>
		</div>
	</div>

	<!-- Texto principal -->
	<div class="flex flex-col items-center gap-6 text-center">
		<h1 class="heading-1">
			Hola, soy <span class="text-sky-800 dark:text-sky-400">Ivan Gabriel</span>
		</h1>

		<p class="p">Desarrollador Full Stack apasionado por crear experiencias web excepcionales</p>

		<div class="flex flex-wrap justify-center gap-4">
			<a href="#proyectos" class="my-effect my-border my-bg p border-2 px-6 py-3 font-bold">
				Ver Proyectos
			</a>
			<a href="#contacto" class=" my-border p my-effect border-2 px-6 py-3 font-bold">
				Contáctame
			</a>
		</div>
	</div>
</section>
