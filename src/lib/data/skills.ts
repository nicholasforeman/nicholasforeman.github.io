import type { Link } from "./profile";

export type SkillGroup = {
	name: string;
	skills: Link[];
};

export const skillGroups: SkillGroup[] = [
	{
		name: "Languages",
		skills: [
			{ label: "Luau", url: "https://luau.org" },
			{ label: "Lua", url: "https://www.lua.org" },
			{ label: "TypeScript", url: "https://www.typescriptlang.org" },
			{ label: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
			{ label: "Rust", url: "https://rust-lang.org" },
			{ label: "Go", url: "https://go.dev" },
			{ label: "Python", url: "https://www.python.org" },
			{ label: "C", url: "https://en.cppreference.com/c" },
			{ label: "C++", url: "https://isocpp.org" },
			{ label: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
			{ label: "Java", url: "https://dev.java" },
			{ label: "Swift", url: "https://www.swift.org" },
			{ label: "Kotlin", url: "https://kotlinlang.org" },
		],
	},
	{
		name: "Roblox",
		skills: [
			{ label: "Roblox Studio", url: "https://create.roblox.com" },
			{ label: "Rojo", url: "https://github.com/rojo-rbx/rojo" },
			{ label: "Rokit", url: "https://github.com/rojo-rbx/rokit" },
			{ label: "Wally", url: "https://github.com/UpliftGames/wally" },
			{ label: "React-Luau", url: "https://github.com/jsdotlua/react-lua" },
			{ label: "Lune", url: "https://github.com/lune-org/lune" },
			{ label: "StyLua", url: "https://github.com/JohnnyMorganz/StyLua" },
			{ label: "Selene", url: "https://github.com/Kampfkarren/selene" },
			{ label: "luau-lsp", url: "https://github.com/JohnnyMorganz/luau-lsp" },
			{ label: "Asphalt", url: "https://github.com/jackTabsCode/asphalt" },
			{ label: "Moonwave", url: "https://github.com/evaera/moonwave" },
		],
	},
	{
		name: "Game Development",
		skills: [
			{ label: "Unreal Engine", url: "https://www.unrealengine.com" },
			{ label: "Unity", url: "https://unity.com" },
			{ label: "Godot", url: "https://godotengine.org" },
		],
	},
	{
		name: "Agents",
		skills: [
			{ label: "T3 Code", url: "https://t3.codes" },
			{ label: "Claude Code", url: "https://claude.com/product/claude-code" },
			{ label: "Codex", url: "https://developers.openai.com/codex" },
			{ label: "Antigravity", url: "https://antigravity.google" },
			{ label: "Muse", url: "https://developer.meta.com/ai/products/muse-code/" },
			{ label: "Grok", url: "https://x.ai/cli" },
			{ label: "MCP", url: "https://modelcontextprotocol.io" },
			{ label: "CodeRabbit", url: "https://www.coderabbit.ai" },
			{ label: "Macroscope", url: "https://macroscope.com" },
		],
	},
	{
		name: "Cloud Hosting",
		skills: [
			{ label: "Fly.io", url: "https://fly.io" },
			{ label: "Railway", url: "https://railway.com" },
			{ label: "Render", url: "https://render.com" },
			{ label: "Hetzner", url: "https://www.hetzner.com" },
			{ label: "DigitalOcean", url: "https://www.digitalocean.com" },
			{ label: "AWS", url: "https://aws.amazon.com" },
			{ label: "Oracle Cloud", url: "https://www.oracle.com/cloud/" },
			{ label: "Netlify", url: "https://www.netlify.com" },
			{ label: "Vercel", url: "https://vercel.com" },
		],
	},
	{
		name: "Databases",
		skills: [
			{ label: "Postgres", url: "https://www.postgresql.org" },
			{ label: "SQLite", url: "https://sqlite.org" },
			{ label: "Supabase", url: "https://supabase.com" },
			{ label: "Redis", url: "https://redis.io" },
			{ label: "sqlc", url: "https://github.com/sqlc-dev/sqlc" },
			{ label: "goose", url: "https://github.com/pressly/goose" },
			{ label: "sqlx", url: "https://github.com/transact-rs/sqlx" },
		],
	},
	{
		name: "Backend",
		skills: [
			{ label: "Docker", url: "https://www.docker.com" },
			{ label: "Bun", url: "https://bun.sh" },
			{ label: "River", url: "https://riverqueue.com" },
			{ label: "Infisical", url: "https://infisical.com" },
			{ label: "GitHub Actions", url: "https://github.com/features/actions" },
			{ label: "Sentry", url: "https://sentry.io" },
			{ label: "PostHog", url: "https://posthog.com" },
		],
	},
	{
		name: "Desktop & Mobile",
		skills: [
			{ label: "Tauri", url: "https://tauri.app" },
			{ label: "Cargo", url: "https://doc.rust-lang.org/cargo/" },
			{ label: "egui", url: "https://www.egui.rs" },
			{ label: "WinUI", url: "https://learn.microsoft.com/en-us/windows/apps/winui/" },
			{ label: "Qt", url: "https://www.qt.io" },
			{ label: "SwiftUI", url: "https://developer.apple.com/swiftui/" },
			{ label: "Electron", url: "https://www.electronjs.org" },
			{ label: "Flutter", url: "https://flutter.dev" },
			{ label: "React Native", url: "https://reactnative.dev" },
			{ label: "Expo", url: "https://expo.dev" },
			{ label: "Compose", url: "https://www.jetbrains.com/compose-multiplatform/" },
		],
	},
	{
		name: "Web",
		skills: [
			{ label: "Svelte", url: "https://svelte.dev" },
			{ label: "SvelteKit", url: "https://svelte.dev/docs/kit" },
			{ label: "Vue", url: "https://vuejs.org" },
			{ label: "React", url: "https://react.dev" },
			{ label: "Tailwind", url: "https://tailwindcss.com" },
			{ label: "Vite", url: "https://vite.dev" },
			{ label: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
			{ label: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
		],
	},
	{
		name: "Tools",
		skills: [
			{ label: "Git", url: "https://git-scm.com" },
			{ label: "Blender", url: "https://www.blender.org" },
			{ label: "VS Code", url: "https://code.visualstudio.com" },
			{ label: "Cursor", url: "https://cursor.com" },
			{ label: "Visual Studio", url: "https://visualstudio.microsoft.com" },
			{ label: "Zed", url: "https://zed.dev" },
			{ label: "JetBrains", url: "https://www.jetbrains.com" },
			{ label: "GitHub", url: "https://github.com" },
			{ label: "Notion", url: "https://www.notion.com" },
			{ label: "Obsidian", url: "https://obsidian.md" },
			{ label: "Figma", url: "https://www.figma.com" },
			{ label: "Affinity", url: "https://www.affinity.studio" },
		],
	},
];
