<script lang="ts">
	import type { Experience } from "#lib/data/experience.ts";
	import GameIcon from "./GameIcon.svelte";

	let { entries }: { entries: Experience[] } = $props();
</script>

<div class="divide-y divide-border">
	{#each entries as entry (entry.organization)}
		<article class="flex flex-col gap-3 py-6 first:pt-0 last:pb-0 sm:py-8">
			<header class="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 wrap-anywhere">
				<h3 class="font-display text-xl leading-tight font-bold sm:text-2xl">
					{#if entry.url}
						<a
							class="underline decoration-muted/60 underline-offset-4 hover:text-accent hover:decoration-accent"
							href={entry.url}
							rel="noopener"
							target="_blank"
						>
							{entry.organization}
						</a>
					{:else}
						{entry.organization}
					{/if}
				</h3>
				<p class="min-w-0 text-sm font-medium">
					<span aria-hidden="true" class="text-accent">&bull;&nbsp;</span>{entry.role}
				</p>
				{#if entry.period}
					<p class="min-w-0 text-sm text-muted tabular-nums">
						<span aria-hidden="true" class="text-accent">&bull;&nbsp;</span>{entry.period}
					</p>
				{/if}
			</header>

			{#if entry.highlights?.length}
				<ul class="flex list-disc flex-col gap-1 pl-5 leading-relaxed text-muted wrap-anywhere marker:text-accent">
					{#each entry.highlights as highlight (highlight)}
						<li>{highlight}</li>
					{/each}
				</ul>
			{/if}

			{#if entry.items.length > 0}
				<ul role="list" class="mt-1 border-t border-border sm:ml-3">
					{#each entry.items as item (item.name)}
						<li
							class={[
								"group relative flex items-start gap-3 border-b border-border px-2 py-2.5 last:border-b-0 sm:gap-4",
								item.url && "focus-within:bg-surface hover:bg-surface",
							]}
						>
							<GameIcon {item} class="size-14 rounded-sm text-lg sm:size-16" />
							<div class="min-w-0 self-center wrap-anywhere">
								<h4 class="font-semibold">
									{#if item.url}
										<a
											class="underline decoration-muted/60 underline-offset-4 after:absolute after:inset-0 group-hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-accent"
											href={item.url}
											rel="noopener"
											target="_blank"
										>
											{item.name}
										</a>
									{:else}
										{item.name}
									{/if}
								</h4>
								{#if item.role}
									<p class="text-sm text-muted">{item.role}</p>
								{/if}
								{#if item.description}
									<p class="mt-1 leading-relaxed text-muted">{item.description}</p>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			{/if}
		</article>
	{/each}
</div>
