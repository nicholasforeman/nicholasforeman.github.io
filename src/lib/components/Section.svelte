<script lang="ts">
	import type { Snippet } from "svelte";

	let { id, title, children }: { id: string; title: string; children: Snippet } = $props();
</script>

<section {id} aria-labelledby="{id}-title" class="flex flex-col gap-6">
	<h2 id="{id}-title" class="text-2xl font-semibold tracking-tight">{title}</h2>
	{@render children()}
</section>
