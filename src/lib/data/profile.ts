export type Link = {
	label: string;
	url: string;
};

export type Profile = {
	name: string;
	aliases: string;
	title: string;
	about: string[];
	links: Link[];
};

export const profile: Profile = {
	name: "Nicholas Foreman",
	aliases: "also known as Azutreo or Azu",
	title: "Game Developer",
	about: [
		"I make games on Roblox, built on my own Luau framework and Rojo toolchain. My specialty is Luau: gameplay systems, client/server replication, and data and economy design.",
		"I love digging into game engine internals, algorithms, and frameworks, and I build my own tooling around them, from 3D assets in Blender to desktop apps in Rust and Tauri and web services in Go and Svelte. I also spend a lot of time with machine learning and LLM agents.",
		"Outside of code, I have experience in project management, community management, quality assurance, and IT/cybersecurity, and I am interested in business, law, and finance.",
	],
	links: [
		{ label: "GitHub", url: "https://github.com/nicholasforeman" },
		{ label: "LinkedIn", url: "https://linkedin.com/in/nicholas-foreman" },
		{ label: "Roblox", url: "https://roblox.com/users/9221415/profile" },
		{ label: "X", url: "https://x.com/azutreo" },
		{ label: "Instagram", url: "https://instagram.com/azutreo/" },
	],
};
