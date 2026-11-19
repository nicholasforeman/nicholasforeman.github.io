<script lang="ts">
	import type { Profile } from "#lib/data/profile.ts";

	let { profile }: { profile: Profile } = $props();
</script>

<header class="border-b border-border bg-surface">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-24 md:grid-cols-5 md:items-end md:gap-12 lg:py-28">
		<div class="flex flex-col gap-6 md:col-span-2">
			<div>
				<h1 class="font-display text-5xl leading-none font-extrabold tracking-tight wrap-anywhere sm:text-6xl lg:text-7xl">
					{profile.name}
				</h1>
				<p class="mt-4 text-xl font-semibold text-accent sm:text-2xl">{profile.title}</p>
				<p class="mt-1 text-muted">{profile.aliases}</p>
			</div>

			<nav aria-label="Social links">
				<ul class="flex flex-wrap gap-x-5 gap-y-1">
					{#each profile.links as link (link.url)}
						<li>
							<a
								class="inline-block py-1.5 font-medium text-accent underline decoration-muted/60 underline-offset-4 hover:decoration-accent"
								href={link.url}
								rel="me noopener"
								target="_blank"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="flex min-w-0 flex-col gap-4 leading-relaxed text-muted wrap-anywhere md:col-span-3">
			{#each profile.about as paragraph (paragraph)}
				<p class="first:text-xl first:leading-relaxed first:font-medium first:text-foreground">{paragraph}</p>
			{/each}
		</div>
	</div>
</header>
