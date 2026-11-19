<script lang="ts">
	import type { SkillGroup } from "#lib/data/skills.ts";

	let { groups }: { groups: SkillGroup[] } = $props();
</script>

<div class="divide-y divide-border">
	{#each groups as group (group.name)}
		<div class="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:gap-4">
			<h3 class="font-display font-semibold sm:w-40 sm:shrink-0 sm:pt-1">{group.name}</h3>
			<ul role="list" class="flex min-w-0 flex-wrap gap-1.5">
				{#each group.skills as skill (skill.label)}
					<li class="max-w-full">
						<a
							class="block rounded-sm bg-surface px-2 py-1 text-sm wrap-anywhere underline decoration-muted/60 underline-offset-3 hover:text-accent hover:decoration-accent"
							href={skill.url}
							rel="noopener"
							target="_blank"
						>
							{skill.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
