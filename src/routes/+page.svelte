<script lang="ts">
	import Hero from "#lib/components/Hero.svelte";
	import Section from "#lib/components/Section.svelte";
	import Skills from "#lib/components/Skills.svelte";
	import Timeline from "#lib/components/Timeline.svelte";
	import { experience } from "#lib/data/experience.ts";
	import { profile } from "#lib/data/profile.ts";
	import { skillGroups } from "#lib/data/skills.ts";

	const description = `${profile.name}, ${profile.title}. Skills and experience.`;
</script>

<svelte:head>
	<title>{profile.name}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={profile.name} />
	<meta property="og:description" content={description} />
</svelte:head>

<Hero {profile} />

<main class="mx-auto flex max-w-7xl flex-col gap-11 px-4 pt-12 pb-16 sm:gap-14 sm:px-8 sm:pt-16 sm:pb-24">
	<Section id="skills" title="Skills">
		<Skills groups={skillGroups} />
	</Section>

	<Section id="experience" title="Experience">
		<Timeline entries={experience} />
	</Section>
</main>
