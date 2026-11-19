export type WorkKind = "developed" | "tested" | "other";

export type WorkItem = {
	name: string;
	kind: WorkKind;
	role?: string;
	description?: string;
	icon?: string;
	url?: string;
};

export type Experience = {
	organization: string;
	role: string;
	period?: string;
	highlights?: string[];
	url?: string;
	items: WorkItem[];
};

// Newest first. Professional roles come from the resume, community roles from the Roblox Talent Hub work history.
// Gamefam sits above Supersocial because the Supersocial role falls inside the Gamefam rehire gap, matching the resume.
export const experience: Experience[] = [
	{
		organization: "Azutreo",
		role: "Founder",
		period: "2017 - Present",
		highlights: [
			"Independently designing, building, publishing, and maintaining several Roblox games",
			"Building automated workflows around AI coding agents, including cross-provider code review and agent access rules",
		],
		items: [
			{
				name: "Squishy Merge Tycoon",
				kind: "developed",
				role: "Founder",
				icon: "/games/squishy-merge-tycoon.png",
				url: "https://www.roblox.com/games/95279272515211",
			},
			{
				name: "Clean the Mansion!",
				kind: "developed",
				role: "Founder",
				icon: "/games/clean-the-mansion.png",
				url: "https://www.roblox.com/games/134108294478152",
			},
			{
				name: "Battleground Rivals",
				kind: "developed",
				role: "Founder",
				icon: "/games/battleground-rivals.png",
				url: "https://www.roblox.com/games/91946222530575",
			},
			{
				name: "Heaven Line Simulator",
				kind: "developed",
				role: "Founder",
				icon: "/games/heaven-line-simulator.png",
				url: "https://www.roblox.com/games/106628058766619",
			},
			{
				name: "Roblox Fight Club",
				kind: "developed",
				role: "Founder",
				icon: "/games/roblox-fight-club.png",
				url: "https://www.roblox.com/games/766364417",
			},
		],
	},
	{
		organization: "Gamefam",
		role: "Programmer III",
		period: "Oct 2022 - Aug 2024, Jan 2025 - Oct 2025",
		url: "https://gamefam.com",
		highlights: [
			"Partnered daily with producers and product managers on engineering estimates, feature planning, and technical docs, coordinating each release with other departments",
			"Helped increase D1 Retention (+60%), D7 Retention (+130%), Average Playtime (+40%), and Payer Conversion Rates (+25%) by working directly with analytics, product, design, and marketing to iterate upon content for players",
			"Maintained low error and crash rates, efficient memory use, and high frame rates across supported devices",
			'Oversaw engineering for live brand integrations, including the Super Bowl (NFL, Nickelodeon), Teenage Mutant Ninja Turtles (Paramount, Playmates), and "The Hunt: First Edition" (Roblox)',
		],
		items: [
			{
				name: "Car Dealership Tycoon",
				kind: "developed",
				role: "Lead Programmer, LiveOps",
				description:
					"Provided technical direction and mentorship to three programmers through code review to ship LiveOps updates every weekend, and worked with brands on in-game integrations. 2.5B+ visits, 20K+ peak CCU.",
				icon: "/games/car-dealership-tycoon.png",
				url: "https://www.roblox.com/games/1554960397",
			},
			{
				name: "SpongeBob Simulator",
				kind: "developed",
				role: "Co-Creator, Senior Programmer",
				description:
					"Officially licensed by Paramount. Built the core player-facing systems, including inventory, pets, fusion, quests, seasons, bosses, and server-validated pet trading, and shipped weekly updates that generated millions in revenue. 73M+ visits, 22K+ peak CCU.",
				icon: "/games/spongebob-simulator.png",
				url: "https://www.roblox.com/games/14696958202",
			},
			{
				name: "Sonic Speed Simulator",
				kind: "developed",
				role: "Programmer",
				description:
					"Officially licensed by SEGA. Refactored major gameplay systems during a live overhaul, including leveling and rebirths, inventory, pet and trail fusion, upgrades, and player stats. 1.5B+ visits, 19K+ peak CCU.",
				icon: "/games/sonic-speed-simulator.png",
				url: "https://www.roblox.com/games/9049840490",
			},
		],
	},
	{
		organization: "Supersocial",
		role: "Senior Gameplay Engineer",
		period: "Aug 2024 - Dec 2024",
		url: "https://www.roblox.com/communities/32689135/Supersocial",
		highlights: [
			"Built and rapidly iterated on brand experiences and proof-of-concept games on a small specialist team",
			"Advocated for player-first design that also improved revenue and engagement across the portfolio, building and iterating quickly based on emerging platform trends and performance analytics",
		],
		items: [
			{
				name: "The Emote Shop",
				kind: "developed",
				role: "Senior Gameplay Engineer",
				icon: "/games/the-emote-shop.png",
				url: "https://www.roblox.com/games/105392350798611",
			},
			{
				name: "Haunted Mansion Line Simulator",
				kind: "developed",
				role: "Senior Gameplay Engineer",
				icon: "/games/haunted-mansion-line-simulator.png",
				url: "https://www.roblox.com/games/79509547719933",
			},
		],
	},
	{
		organization: "FNAF Online",
		role: "Lead Developer",
		period: "Dec 2020 - Mar 2023",
		url: "https://www.roblox.com/communities/6289160",
		highlights: [
			"Lead operations and staff",
			"Lead development team",
			"Design and program game",
			"Create and implement new features",
			"Designed user interface",
			"Create plugins to ease development for other team members",
			"Manage and moderate Discord server",
			"Moderate game for rule breakers",
		],
		items: [
			{
				name: "FNAF Online",
				kind: "developed",
				role: "Lead Developer",
				icon: "/games/fnaf-online.png",
				url: "https://www.roblox.com/games/5043294598",
			},
		],
	},
	{
		organization: "Manticore Games",
		role: "Gameplay & Systems Engineer",
		period: "Aug 2020 - Jul 2021",
		url: "https://www.manticoregames.com",
		highlights: [
			"Created educational content, utilities, modules, and tools to help creators learn the platform",
			"Verified upcoming releases, wrote code examples for new API entries, and presented new features to users",
		],
		items: [
			{
				name: "Phillip the Pig",
				kind: "developed",
				role: "Gameplay & Systems Engineer",
				description: "A D&D game brought to life for the PAX 2020 Panel of Legends in Manticore's Core platform.",
			},
		],
	},
	{
		organization: "Music Box Games",
		role: "Lead Developer, Programming",
		period: "Jan 2019 - Jan 2025",
		url: "https://www.roblox.com/communities/4698621",
		highlights: [
			"Design and program game",
			"Create and implement new features",
			"Designed user interface",
			"Create plugins to ease development for other team members",
			"Manage and moderate Discord server",
			"Moderate game for rule breakers",
		],
		items: [
			{
				name: "Freddy's Ultimate Roleplay",
				kind: "developed",
				role: "Lead Developer, Programming",
				icon: "/games/freddys-ultimate-roleplay.png",
			},
			{
				name: "Waterpark Paradise",
				kind: "developed",
				role: "Lead Developer, Programming",
				icon: "/games/waterpark-paradise.png",
				url: "https://www.roblox.com/games/3363124861",
			},
		],
	},
	{
		organization: "Aegis International",
		role: "Board of Directors, Programmer",
		period: "Oct 2018 - Feb 2019",
		url: "https://www.roblox.com/communities/2744682",
		highlights: [
			"Manage divisions (sub-groups of personnel)",
			"Program new features for the game",
			"Moderate the Discord server and game",
		],
		items: [
			{
				name: "Day of Dusk: The Border",
				kind: "developed",
				role: "Programmer",
				icon: "/games/the-border.png",
				url: "https://www.roblox.com/games/1927139201",
			},
		],
	},
	{
		organization: "Teethyz Dentist",
		role: "Bot Developer",
		period: "Feb 2018 - Apr 2023",
		url: "https://www.roblox.com/communities/2957840",
		highlights: [
			"Assisted with various different tasks within the dentistry and bug fixes",
			"Created two different bots for the group and games: a generic ranking bot and a training-specific promotion bot",
			"Began work on version 3 of the dentistry before moving off",
		],
		items: [
			{
				name: "Run a Dentist",
				kind: "other",
				role: "Bot Developer",
				icon: "/games/run-a-dentist.png",
				url: "https://www.roblox.com/games/542016179",
			},
		],
	},
	{
		organization: "Roblox Quality Assurance",
		role: "Volunteer Quality Assurance Tester",
		period: "Feb 2018 - Apr 2022",
		url: "https://www.roblox.com/communities/3055661",
		highlights: [
			"Tested official Roblox events and partner games such as Egg Hunts, Bloxy Awards, Lil Nas X Concert, Aquaman, Wonder Woman, Metaverse Champions, Stranger Things, and Ralph Lauren",
			"Tested featured games, and community games when requested",
			"Program ended by Roblox on April 21, 2022",
		],
		items: [],
	},
	{
		organization: "Fume Salon",
		role: "Co-Owner",
		period: "Sep 2017 - Dec 2018",
		highlights: [
			"Discontinued/Deleted",
			"Manage and moderate Discord server",
			"Program and design game",
			"Manage high-ranking staff and personnel",
			"Communicate with allies/affiliates",
		],
		items: [],
	},
	{
		organization: "Hidden Developers",
		role: "Lead Public Relations",
		period: "Sep 2017 - Mar 2018",
		url: "https://www.roblox.com/communities/2627479",
		highlights: [
			"Host events with the community, such as game jams, competitions, and karaoke nights",
			"Moderate Discord server",
			"Accept and decline applications for roles",
			"Lead team of event hosts",
		],
		items: [],
	},
	{
		organization: "Koala Cafe",
		role: "Programmer",
		period: "Jul 2017 - Dec 2018",
		url: "https://www.roblox.com/communities/937709",
		highlights: ["Create and implement new features", "Moderate Discord server"],
		items: [
			{
				name: "Koala Cafe",
				kind: "developed",
				role: "Programmer",
				icon: "/games/koala-cafe.png",
				url: "https://www.roblox.com/games/961426258",
			},
		],
	},
	{
		organization: "The Pony Project",
		role: "Lead Developer, Programming",
		period: "Jan 2017 - Feb 2018",
		url: "https://www.roblox.com/communities/851605",
		highlights: [
			"Create and implement new features",
			"Design and create a new and improved version of the game with increased performance and organization",
		],
		items: [
			{
				name: "The 2D Multiverse RP",
				kind: "developed",
				role: "Lead Developer",
				icon: "/games/the-2d-multiverse-rp.png",
				url: "https://www.roblox.com/games/253293579",
			},
		],
	},
];
