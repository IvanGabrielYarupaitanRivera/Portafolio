<script>
	import { Github, LinkedinIcon } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="my-component-bg my-border z-30 border-t-2 px-4 py-6">
	<div class="mx-auto flex flex-col items-center gap-4">
		<div class="flex gap-6">
			<a
				href="https://github.com/IvanGabrielYarupaitanRivera"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visita mi perfil de GitHub"
				class="hover:scale-110"
			>
				<Github class="my-stroke" size={24} />
				<span class="sr-only">GitHub</span>
			</a>

			<a
				href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visita mi perfil de LinkedIn"
				class="hover:scale-110"
			>
				<LinkedinIcon class="my-stroke" size={24} />
				<span class="sr-only">LinkedIn</span>
			</a>
		</div>
		<p class="p text-center">
			© {currentYear} - Creado con
			<span class="inline-block hover:-translate-y-1">💖</span>
		</p>
	</div>
</footer>
