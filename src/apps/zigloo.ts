import type { AppDefinition } from '../lib/apps';
export default {
  "slug": "zigloo",
  "appData": {
    "name": "Zigloo",
    "description": "Watch in English. Learn from every line. Bring your own videos, follow the subtitles, and pause to explore a sentence or an unfamiliar word—then carry on watching. Zigloo is currently in private beta.",
    "logo": "/assets/zigloo/icon.png",
    "storeLinks": {
      "apple": "",
      "google": ""
    },
    "keywords": [
      "Zigloo",
      "English",
      "WebDAV",
      "subtitles",
      "video learning"
    ],
    "socialLinks": [],
    "version": "1.0.0",
    "minimumOS": "13.0"
  },
  "storeDataConfig": {
    "fetchRealData": false,
    "appStoreAppId": 6809477515
  },
  "features": [
    {
      "title": "Your library, ready to watch",
      "description": "Connect your WebDAV storage, choose folders to scan, and browse your own movies and series in one place.",
      "icon": "FiMonitor"
    },
    {
      "title": "Understand the whole sentence",
      "description": "Open learning from the player to pause on the current English subtitle. Request an AI explanation of its meaning and structure, with available nearby lines for context.",
      "icon": "FiBook"
    },
    {
      "title": "Explore words in context",
      "description": "Review useful words and expressions alongside the sentence translation and structure explanation. Vocabulary is selected from the subtitle context, so you can study the line without leaving the player.",
      "icon": "FiBook"
    },
    {
      "title": "Subtitles that work with you",
      "description": "Choose supported embedded or external subtitles, adjust their appearance and timing, or search for available online subtitles. Availability depends on the video and service.",
      "icon": "FiGlobe"
    },
    {
      "title": "Study, then keep watching",
      "description": "Move between available subtitle lines while studying. Resume video closes the learning panel and continues playback that learning paused.",
      "icon": "FiBook"
    },
    {
      "title": "Pick up where you left off",
      "description": "With account sync enabled, keep watch progress, favorites, WebDAV sources and supported preferences available across signed-in devices. Videos and learning records are not uploaded by sync.",
      "icon": "FiGlobe"
    }
  ],
  "faqs": [
    {
      "question": "How do I get started?",
      "answer": "Sign in, add your WebDAV connection, choose a media folder, and open a video. Select an English subtitle track, then open learning from the player to explore a line."
    },
    {
      "question": "Does Zigloo include movies or TV shows?",
      "answer": "No. Zigloo plays media you provide and does not supply a streaming catalog. You must have permission to access and use your videos and subtitles."
    },
    {
      "question": "What can I learn from a subtitle?",
      "answer": "Request an explanation with a translation, useful vocabulary and sentence structure. Explanations use available subtitle context. AI can make mistakes; treat its answers as learning assistance rather than an authoritative reference."
    },
    {
      "question": "Can I use embedded subtitles?",
      "answer": "Supported text subtitles decoded by the player can provide learning context. External subtitle files and selected online subtitles are also supported. Available context varies by track and what the player has decoded."
    },
    {
      "question": "Do I need an account or an internet connection?",
      "answer": "An account is required. Remote WebDAV storage, cloud sync, online subtitle searches and AI explanations require network access. Availability also depends on your media source."
    },
    {
      "question": "What syncs between my devices?",
      "answer": "Supported account data includes WebDAV connections, watch progress, favorites and selected preferences. WebDAV credentials are included in encrypted sync data. Video files, scraped file indexes and learning records are not synchronized."
    },
    {
      "question": "What happens when I request an AI explanation?",
      "answer": "When you request learning, Zigloo sends the selected subtitle text, available surrounding lines, relevant media context and a pseudonymous account safety identifier to OpenAI to generate an explanation. Opening learning or manually choosing another sentence can request an explanation; automatic subtitle updates during playback do not."
    },
    {
      "question": "Can I download Zigloo now?",
      "answer": "Zigloo is in private beta. A public download is not available yet. Public download links will appear here when the app is released."
    }
  ],
  "reviews": [],
  "screenshots": {
    "iphone": [],
    "ipad": []
  },
  "documents": {
    "support": {
      "title": "Support",
      "content": "# Zigloo Support\n\n## Get started\n\n1. Sign in to Zigloo.\n2. Add a WebDAV connection and select folders to scan.\n3. Open a video and select an English subtitle track.\n4. Open learning from the player, then request a subtitle explanation.\n5. Choose Resume video to continue watching.\n\n## My library cannot connect\n\nCheck the connection address, credentials, network access and folder permissions. Confirm you can access the folder through your WebDAV provider. Never include credentials or private media URLs in a support report.\n\n## Subtitles or explanations are unavailable\n\nSelect a supported text subtitle track. Try an external subtitle file or available online subtitle. Learning depends on available subtitle context; a newly opened video may not have decoded neighboring lines yet. Online searches and AI explanations require network access.\n\n## Watch progress differs on another device\n\nConfirm both devices use the same account with sync enabled and network access. The same media source must be available on both. Video files and learning records are not synchronized.\n\n## Report a beta issue\n\nIf you received the iOS beta through TestFlight, use its feedback option. Include the app version, device model, expected behavior and steps to reproduce the issue. Remove personal information from screenshots and never include passwords or private media links.\n\nA public support contact will be added before general release.\n",
      "draft": true
    },
    "privacy": {
      "title": "Privacy Policy",
      "content": "# Zigloo Privacy Policy\n\n**Draft updated: September 7, 2026.** This draft describes the private beta. It is not the final privacy notice: the legal operator, privacy contact, retention periods and account deletion procedure still require confirmation before public release.\n\n## Scope and purpose\n\nZigloo is a video player with subtitle-based English learning tools. It processes information to sign you in, connect your media sources, play videos, synchronize supported account data, find media metadata and subtitles, and generate learning explanations. Your storage provider and services you use separately have their own privacy practices.\n\n## Account and device information\n\nZigloo uses the configured identity service for sign-in. Account and installation identifiers authenticate requests, separate accounts and associate synchronized records with your account. Profile information supplied by the identity service, such as a display name or email address, may be displayed in the app.\n\n## Media sources and synchronization\n\nZigloo uses the WebDAV address and credentials you enter to browse and play files from your storage. Your storage provider receives the requests needed to access those files.\n\nWhen account sync is enabled, supported synchronized information includes WebDAV connections, favorites, watch progress and selected preferences. **WebDAV usernames, passwords and secret connection headers are included in encrypted synchronization data; they are not necessarily stored only on your device.**\n\nVideo files, scraped file indexes and learning records are not part of account synchronization. This does not mean all media-related information remains on your device: searches and learning requests send the information described below.\n\n## Metadata and online subtitles\n\nMedia matching and subtitle searches send relevant titles, media identifiers, file facts or search terms to services used by Zigloo. Current integrations include TMDB and OpenSubtitles. Downloaded online subtitles may be cached in private Cloudflare storage to serve subtitle requests. These providers have their own terms and privacy practices.\n\n## AI-assisted learning\n\nFor an explanation, Zigloo sends the selected subtitle, available nearby lines, relevant media context and a pseudonymous account safety identifier to OpenAI through Zigloo's backend. This identifier is derived from your account and should not be treated as anonymous data.\n\nOpening learning or manually selecting another sentence can request an explanation. Automatic subtitle updates during playback do not by themselves request new explanations. Avoid using AI learning with confidential subtitles or information you are not authorized to share.\n\nThe integration requests that OpenAI not store the response through its response-storage option. This does not establish zero retention across provider security logs or infrastructure. AI explanations may contain mistakes.\n\n## Service providers and operational data\n\nZigloo uses usage counters and operational records to authorize access, enforce usage limits and operate the service. Infrastructure providers may process network and request information when handling traffic.\n\nCloudflare hosts backend processing and storage. OpenAI processes explanations. TMDB and OpenSubtitles support media and subtitle lookup. Your WebDAV provider processes storage access. The final notice must also identify the configured account identity provider and any additional release providers, including payment providers if paid plans are enabled.\n\nInformation may be processed outside your country depending on the services and infrastructure involved. Transfer arrangements must be confirmed for the release territories before this notice is finalized.\n\n## Security and retention\n\nZigloo uses protected credential storage and encrypted synchronization for sensitive connection data. These safeguards do not mean every request is end-to-end encrypted or eliminate all security risks. Protect your device, account and storage credentials, and use secure storage connections where available.\n\nAccount records, synchronized settings, subtitle caches and operational logs have different storage needs. Exact retention periods, backup handling and provider retention are being verified. This draft does not promise a fixed deletion deadline or zero retention.\n\n## Your choices and rights\n\nYou choose which media sources to connect and whether to use online learning. Local data and synchronized data must be considered separately. Signing out, uninstalling the app or clearing local history does not itself delete your account or all server-side records.\n\nA complete account deletion procedure and public privacy request channel have not yet been finalized. They must be published and supported by a working process before release; this draft does not claim that in-app account deletion is currently available.\n\nDepending on applicable law, you may have rights to access, correct, delete or obtain a copy of your information, restrict or object to processing, withdraw consent, or contact a relevant authority. The final notice will explain how to make a request and any verification needed to protect your information.\n\n## Children\n\nZigloo does not supply a curated children's media catalog. Parents and guardians should consider the media sources and online services used by a child. Release age eligibility and any requirements for children's data remain to be confirmed; this draft does not establish a children's service or a parental-consent process.\n\n## Changes and contact\n\nThis draft's date appears above. Material changes to the final notice will be explained with an updated date and notice where required.\n\nSee [Zigloo Support](/zigloo/support/) for beta troubleshooting. The operator's legal name and a reachable privacy email will be added here before the final notice takes effect.\n",
      "draft": true
    },
    "terms": {
      "title": "Terms of Service",
      "content": "# Zigloo Terms of Service\n\n**Draft updated: September 7, 2026.** These terms are prepared for review during the private beta, not as the final agreement. The legal service provider, contact information, release eligibility and commercial terms must be confirmed before they take effect.\n\n## What Zigloo provides\n\nZigloo helps you play your own videos, manage supported media sources and study English subtitle lines. It does not provide a film or television catalog, a streaming subscription, or permission to use third-party content.\n\nFeatures depend on your platform, device, file format and service availability. The beta requires an account. Remote storage, synchronization, online subtitle searches and AI explanations require network access and access to the relevant service.\n\n## Your account\n\nUse accurate account information and protect your credentials. Do not access another person's account without authorization. You are responsible for the storage sources you connect and activity you authorize through your account. Never include passwords or private media links in support reports.\n\nThe final release will specify age eligibility and any required parental or guardian consent. This draft does not authorize use contrary to applicable age or capacity requirements.\n\n## Your media and content rights\n\nYou retain the rights you have in your content. Using Zigloo does not transfer ownership of your videos or grant rights to third-party films, artwork, metadata or subtitles.\n\nOnly access, download or process content when you have the necessary rights or other lawful permission. Connecting a source does not make its contents lawful to use. Do not bypass access controls or infringe copyright, privacy or other rights.\n\nMetadata and online subtitles may be incomplete or incorrect. Their appearance in the app does not imply that Zigloo owns or licenses the underlying media for you.\n\n## AI learning\n\nAI explanations can contain errors, omit context or produce unsuitable text. They are learning assistance, not authoritative translations, professional advice or a guarantee of learning progress. Check important explanations against reliable references.\n\nRequests may send subtitle text and related context to an external AI provider, as described in the [Privacy Policy](/zigloo/privacy/). Do not submit information you lack permission to process or share.\n\n## Acceptable use\n\nDo not interfere with the service, attempt unauthorized access, distribute malicious files, impersonate others or evade access controls and usage limits. Do not use Zigloo for unlawful activity or to violate another person's rights.\n\nThese restrictions do not remove non-waivable rights under applicable law, including rights concerning interoperability or security research.\n\n## Third-party services\n\nZigloo relies on storage, authentication, hosting, metadata, subtitle and AI services. Separate provider terms and limits may apply. You remain responsible for storage and connectivity charges you agree to with those providers.\n\nOutages, interface changes or revoked access may affect features. Compatibility with every provider, file or subtitle track is not guaranteed.\n\n## Beta availability and paid features\n\nZigloo is currently in private beta. Features may change or be interrupted during testing. Keep independent copies of important information and media; Zigloo is not a backup service.\n\nNo subscription price, renewal period or paid entitlement is established by this draft. If paid plans are offered, prices, billing periods, renewal behavior, cancellation methods and included limits must be shown before purchase. Purchases are also subject to the relevant store's terms and applicable consumer rights. These terms do not remove refund rights provided by law or the store.\n\n## Privacy and ending use\n\nThe [Privacy Policy](/zigloo/privacy/) explains the data involved in using Zigloo. You can stop using the app at any time. Signing out or uninstalling does not itself delete server-side account information. Removing an app does not necessarily cancel a store subscription.\n\nAccount deletion instructions and a verified request channel will be included before public release. This draft does not represent an unfinished deletion process as available.\n\n## Service restrictions and changes\n\nAccess may need to be restricted to address misuse, security incidents, legal obligations or service discontinuation. Final suspension and termination terms must respect applicable notice, consumer and data-access obligations.\n\nMaterial changes to the final terms will be identified by an updated date and communicated where required. This draft does not establish an unrestricted right to retroactively change completed purchases.\n\n## Responsibility and consumer rights\n\nThe beta is provided for evaluation; uninterrupted or error-free operation is not promised. Verify content and retain independent copies of information that matters to you.\n\nNothing here excludes liability or limits warranties, remedies or rights that cannot lawfully be excluded. No binding liability cap, arbitration requirement, governing-law choice or court jurisdiction has been selected in this draft. Those details depend on the operator and release territories.\n\n## Contact\n\nSee [Zigloo Support](/zigloo/support/) for beta troubleshooting. The operator's legal name and public contact email must be added here before these terms become the final agreement.\n",
      "draft": true
    }
  },
  "title": "Zigloo — Watch in English. Learn from every line.",
  "pageDescription": "Turn your own English videos into learning moments with subtitle explanations, WebDAV playback and synced watch progress. Currently in private beta.",
  "sections": {
    "screenshots": false,
    "reviews": false
  }
} satisfies AppDefinition;
