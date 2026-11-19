<script lang="ts">
	import type { Profile } from "#lib/data/profile.ts";

	let { profile }: { profile: Profile } = $props();
</script>

<header class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<p class="text-sm font-medium tracking-wide text-accent uppercase">{profile.title}</p>
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
		<p class="text-muted">{profile.aliases}</p>
	</div>

	<div class="flex flex-col gap-4 leading-relaxed text-foreground/90">
		{#each profile.about as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</div>

	<nav aria-label="Social links">
		<ul class="flex flex-wrap gap-x-5 gap-y-2">
			{#each profile.links as link (link.url)}
				<li>
					<a class="text-muted transition-colors hover:text-accent" href={link.url} rel="me noopener" target="_blank">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
