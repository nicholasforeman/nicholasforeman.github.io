<script lang="ts">
	import type { SkillGroup } from "#lib/data/skills.ts";

	let { groups }: { groups: SkillGroup[] } = $props();
</script>

<div class="flex flex-col gap-5">
	{#each groups as group (group.name)}
		<div class="flex flex-col gap-2">
			<h3 class="text-sm font-medium text-muted">{group.name}</h3>
			<ul class="flex flex-wrap gap-2">
				{#each group.skills as skill (skill.label)}
					<li>
						<a
							class="block rounded-md border border-border bg-surface px-2.5 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
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
