<script lang="ts">
	import type { WorkItem } from "#lib/data/experience.ts";

	let { item, class: className = "" }: { item: WorkItem; class?: string } = $props();

	const initials = $derived(
		item.name
			.split(" ")
			.slice(0, 2)
			.map((word) => word[0])
			.join(""),
	);

	const hue = $derived(255 + ([...item.name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 45));
</script>

{#if item.icon}
	<img class="shrink-0 bg-surface object-cover {className}" src={item.icon} alt="" loading="lazy" />
{:else}
	<div
		aria-hidden="true"
		class="flex shrink-0 items-center justify-center font-display font-bold text-foreground {className}"
		style="background: oklch(0.35 0.08 {hue});"
	>
		{initials}
	</div>
{/if}
