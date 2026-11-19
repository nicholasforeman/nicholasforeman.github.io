export type WorkKind = "developed" | "tested" | "other";

export type WorkItem = {
	name: string;
	kind: WorkKind;
	description?: string;
	url?: string;
};

export type Experience = {
	organization: string;
	role: string;
	period?: string;
	url?: string;
	items: WorkItem[];
};

// Newest first. Periods and items are left empty until Nicholas supplies them.
export const experience: Experience[] = [
	{
		organization: "Gamefam",
		role: "Programmer III",
		url: "https://gamefam.com",
		items: [],
	},
	{
		organization: "Supersocial",
		role: "Senior Gameplay Engineer",
		url: "https://www.roblox.com/communities/32689135/Supersocial",
		items: [],
	},
	{
		organization: "Manticore Games",
		role: "Gameplay Engineer",
		url: "https://www.manticoregames.com",
		items: [],
	},
];
