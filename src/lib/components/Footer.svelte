<script>
	import { Github, LinkedinIcon } from 'lucide-svelte';
</script>

<footer class="my-component-bg my-border mt-16 border-t-2 px-4 py-6">
	<div class="mx-auto flex flex-col items-center gap-4">
		<div class="flex gap-6">
			<a
				href="https://github.com/IvanGabrielYarupaitanRivera"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visita mi perfil de GitHub"
			>
				<Github class="my-stroke" size={24} />
				<span class="sr-only">GitHub</span>
			</a>

			<a
				href="https://www.linkedin.com/in/ivan-yarupaitan-rivera/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Visita mi perfil de LinkedIn"
			>
				<LinkedinIcon class="my-stroke" size={24} />
				<span class="sr-only">LinkedIn</span>
			</a>
		</div>
		<p class="p text-center">
			© {new Date().getFullYear()} - Creado con
			<span class="inline-block hover:-translate-y-1">💖</span>
		</p>
	</div>
</footer>
