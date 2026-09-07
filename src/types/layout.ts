import type { SocialLink } from "./content";
import type { StoreData } from "./store";

export interface LayoutWithAppDataProps {
 homeHref?: string;
 keywords?: readonly string[];
 socialLinks?: SocialLink[];
 noindex?: boolean;
	title: string;
	description?: string;
	appData?: Partial<StoreData> & {
		name: string;
		logo: string;
		description: string;
		storeLinks: { apple: string; google: string };
	};
}

export interface AppHeroProps {
	title: string;
	description: string;
	logo: string;
	storeLinks: { apple: string; google: string };
	rating?: { score: number; count: string };
	ageRating?: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
}

export interface FloatingNavbarProps {
 homeHref?: string;
	logo: string;
	title: string;
	storeLinks: { apple: string; google: string };
	socialLinks: SocialLink[];
}
