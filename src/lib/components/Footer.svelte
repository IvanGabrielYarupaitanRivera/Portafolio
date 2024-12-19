<script>
	import { Github, LinkedinIcon } from 'lucide-svelte';
</script>

<footer class="my-component-bg my-border border-t-2 px-4 py-6">
	<div class="mx-auto flex flex-col items-center gap-4">
		<div class="flex gap-6">
			<a href="/">
				<Github class="my-stroke" size={20} />
			</a>
			<a href="/">
				<LinkedinIcon class="my-stroke" size={20} />
			</a>
		</div>
		<p class="p text-center">
			© {new Date().getFullYear()} - Creado con
			<span class="inline-block hover:-translate-y-1">💖</span>
		</p>
	</div>
</footer>
