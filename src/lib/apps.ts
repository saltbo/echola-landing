import type { AppHeroProps } from '../types/layout';
import type { Feature, FAQ, Review, SocialLink } from '../types/content';
import type { Screenshots } from '../types/screenshots';
export interface AppDefinition {
 slug: string;
 title?: string;
 pageDescription?: string;
 sections?: { screenshots?: boolean; reviews?: boolean };
 appData: Omit<AppHeroProps, 'title'> & { name: string; keywords: readonly string[]; socialLinks: SocialLink[] };
 storeDataConfig: { fetchRealData: boolean; appStoreAppId: number };
 features: Feature[]; faqs: FAQ[]; reviews: Review[]; screenshots: Screenshots;
 documents: Record<string, { title: string; content: string; draft?: boolean }>;
}
const modules = import.meta.glob<{ default: AppDefinition }>('../apps/*.ts', { eager: true });
export const apps = Object.entries(modules).map(([file, { default: app }]) => {
 if (!/^[a-z][a-z0-9-]*$/.test(app.slug) || ['privacy', 'terms', 'assets', '404'].includes(app.slug) || !file.endsWith(`/${app.slug}.ts`)) throw new Error(`Invalid app slug in ${file}`);
 for (const name of Object.keys(app.documents)) if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`Invalid document path in ${file}`);
 return app;
});
