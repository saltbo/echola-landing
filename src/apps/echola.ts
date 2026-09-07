import { appData, storeDataConfig } from '../data';
import { features } from '../components/features/data';
import { faqs } from '../components/faq/data';
import { reviews } from '../components/reviews/data';
import { screenshots } from '../components/screenshots/data';
import privacy from '../pages/privacy/privacy.md?raw';
import terms from '../pages/terms/terms.md?raw';
import type { AppDefinition } from '../lib/apps';
export default { slug: 'echola', appData, storeDataConfig, features, faqs, reviews, screenshots,
 documents: { privacy: { title: 'Privacy Policy', content: privacy }, terms: { title: 'Terms of Service', content: terms } }
} satisfies AppDefinition;
