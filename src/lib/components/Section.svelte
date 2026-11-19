<script lang="ts">
	import type { Snippet } from "svelte";

	let { id, title, children }: { id: string; title: string; children: Snippet } = $props();
</script>

<section {id} aria-labelledby="{id}-title" class="flex flex-col gap-5 border-t border-border pt-4 sm:gap-6 sm:pt-5">
	<h2 id="{id}-title" class="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
	{@render children()}
</section>
