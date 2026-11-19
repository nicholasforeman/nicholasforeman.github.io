<script lang="ts">
	import type { Experience, WorkKind } from "#lib/data/experience.ts";

	let { entries }: { entries: Experience[] } = $props();

	const kindLabels: Record<WorkKind, string> = {
		developed: "Developed",
		tested: "Tested",
		other: "Contributed",
	};
</script>

<ol class="flex flex-col gap-10 border-l border-border">
	{#each entries as entry (entry.organization)}
		<li class="relative flex flex-col gap-4 pl-6">
			<span aria-hidden="true" class="absolute top-2 -left-1.5 size-3 rounded-full border-2 border-accent bg-background"></span>

			<div class="flex flex-col gap-1">
				<h3 class="text-lg font-semibold">
					{#if entry.url}
						<a class="transition-colors hover:text-accent" href={entry.url} rel="noopener" target="_blank">{entry.organization}</a>
					{:else}
						{entry.organization}
					{/if}
				</h3>
				<p class="text-muted">
					{entry.role}{#if entry.period}<span aria-hidden="true"> &middot; </span><span class="sr-only">, </span>{entry.period}{/if}
				</p>
			</div>

			{#if entry.items.length > 0}
				<ul class="flex flex-col gap-3">
					{#each entry.items as item (item.name)}
						<li class="rounded-lg border border-border bg-surface p-4">
							<div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
								<h4 class="font-medium">
									{#if item.url}
										<a class="transition-colors hover:text-accent" href={item.url} rel="noopener" target="_blank">{item.name}</a>
									{:else}
										{item.name}
									{/if}
								</h4>
								<span class="text-xs tracking-wide text-muted uppercase">{kindLabels[item.kind]}</span>
							</div>
							{#if item.description}
								<p class="mt-2 text-sm leading-relaxed text-foreground/80">{item.description}</p>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		</li>
	{/each}
</ol>
