import { socialLinks } from "@social/data";

/**
 * Main app configuration
 * 
 * All core app settings in one place:
 * - Basic info: name, description, logo
 * - Store links: App Store and Google Play
 * - Version info: rating, age rating, version, OS requirements
 * - SEO: keywords for search optimization
 * - Social media: imported from components/social/data.ts
 */


export const storeDataConfig = {
	/** Set to true to fetch real data from App Store */
	fetchRealData: true,
	
	/** Numeric App ID (without "id" prefix) - find in App Store URL */
	appStoreAppId: 6757395298,
} as const;


export const appData = {
	/** Your app name (displayed everywhere) */
	name: "Echola",

	/** Brief app description (hero section + SEO) */
	description:
		"Your shadowing companion for language learning. Listen to native speakers, repeat aloud, and get AI-powered feedback to improve your pronunciation and fluency.",

	/** Path to your app logo/icon */
	logo: "/assets/favicon.png",

	/** SEO keywords for search visibility */
	keywords: ["english", "shadowing", "speaking", "pronunciation", "language learning", "read aloud", "fluency", "listening practice", "vocabulary", "iOS app"],

	/** App store download links */
	storeLinks: {
		apple: "https://apps.apple.com/app/id6757395298",
		google: "#",
	},

	/** App rating and reviews */
	rating: {
		score: 4.8,
		count: "100+",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	ageRating: "4+",

	/** App version */
	version: "0.2.0",

	/** Minimum iOS version required */
	minimumOS: "17.0",

	/** Last update date */
	releaseDate: "Feb 25, 2026",

	/** Social media links */
	socialLinks,
} as const;
