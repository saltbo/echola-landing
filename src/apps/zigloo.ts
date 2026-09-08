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
      "content": "# Zigloo Support\n\n## Get started\n\n1. Sign in to Zigloo.\n2. Add a WebDAV connection and select folders to scan.\n3. Open a video and select an English subtitle track.\n4. Open learning from the player, then request a subtitle explanation.\n5. Choose Resume video to continue watching.\n\n## My library cannot connect\n\nCheck the connection address, credentials, network access and folder permissions. Confirm you can access the folder through your WebDAV provider. Never include credentials or private media URLs in a support report.\n\n## Subtitles or explanations are unavailable\n\nSelect a supported text subtitle track. Try an external subtitle file or available online subtitle. Learning depends on available subtitle context; a newly opened video may not have decoded neighboring lines yet. Online searches and AI explanations require network access.\n\n## Watch progress differs on another device\n\nConfirm both devices use the same account with sync enabled and network access. The same media source must be available on both. Video files and learning records are not synchronized.\n\n## Report a beta issue\n\nIf you received the iOS beta through TestFlight, use its feedback option. Include the app version, device model, expected behavior and steps to reproduce the issue. Remove personal information from screenshots and never include passwords or private media links.\n\n## Contact\n\nZigloo is operated by Bo Yan, an independent developer. For support, privacy questions or account-related requests, email [saltbo@outlook.com](mailto:saltbo@outlook.com). Include your app version and a description of the issue. Do not send your password, WebDAV credentials or private video links.\n",
      "draft": false
    },
    "privacy": {
      "title": "Privacy Policy",
      "draft": false,
      "content": "# Zigloo Privacy Policy\n\n**Effective date: September 8, 2026.**\n\nZigloo is operated by **Bo Yan**, an independent developer. Contact: [saltbo@outlook.com](mailto:saltbo@outlook.com).\n\nThis policy applies to Zigloo and its related services, including TestFlight versions. We process information to provide playback, account authentication, synchronization, media lookup, subtitle services and English learning.\n\n## Account and authentication\n\nZigloo uses [Realmroot](https://id.realmroot.dev) to sign you in. Account and installation identifiers authenticate requests and associate data with your account. Profile information supplied by Realmroot, such as your display name or email, may appear in the app. Realmroot also operates its own account service.\n\n## Media sources and synchronization\n\nZigloo uses your WebDAV address and credentials to browse and play files from your storage. Your storage provider receives those access requests.\n\nWith account sync enabled, synchronized data includes WebDAV connections, favorites, watch progress and supported preferences. **WebDAV usernames, passwords and secret connection headers are included in encrypted synchronization data; they are not stored exclusively on your device.** Video files, scraped file indexes and learning records are not synchronized. Searches and learning requests transmit the information described below.\n\n## Metadata and online subtitles\n\nMedia matching and subtitle searches send relevant titles, media identifiers, file facts or search terms to services used by Zigloo, including TMDB and OpenSubtitles. Downloaded subtitles may be cached in private Cloudflare storage to serve subtitle requests. Your media stays with the storage source you choose.\n\n## AI-assisted learning\n\nWith your permission, learning requests send the selected subtitle, available nearby lines, relevant media context and a pseudonymous account safety identifier to OpenAI through Zigloo's backend. The identifier is derived from your account and is not anonymous data. Opening learning or manually selecting another sentence can request an explanation. Automatic subtitle updates during playback do not by themselves request explanations.\n\nYou may decline this sharing and avoid online learning while continuing to use unrelated playback features. Do not submit confidential information or text you are not authorized to share. The integration disables response storage through OpenAI's response-storage option; this does not eliminate provider security or operational retention. AI explanations can be incorrect.\n\n## Purchases and service providers\n\nApple processes App Store payments. RevenueCat processes account-linked purchase identifiers, subscription status and entitlements to validate purchases and restore access. Zigloo does not receive your full payment card details.\n\nCloudflare hosts backend processing and storage. Realmroot provides authentication; OpenAI processes explanations; TMDB and OpenSubtitles support lookup; your WebDAV provider handles media access. These providers process information needed for their services and have their own privacy practices. We do not sell your personal information.\n\nUsage counters and operational records help authorize access, enforce limits, investigate problems and protect the service. Infrastructure providers may process IP addresses and request information when handling traffic. Information may be processed outside your country. Where required, applicable legal safeguards govern international processing.\n\n## Security and retention\n\nZigloo uses protected credential storage and encrypted synchronization for sensitive connection data. These safeguards do not eliminate all security risks. Protect your device and credentials and use secure storage connections.\n\nWe retain account and synchronized data while needed to provide your account and requested services. Local data remains until removed or cleared by the app. Cached data may be replaced or removed during service operation. Operational and transaction records may be retained as needed for security, accounting, dispute resolution or legal obligations. When information is no longer needed for these purposes, we delete or de-identify it. Provider logs and backups follow their own retention cycles; deleting active records does not imply immediate removal from every backup.\n\n## Your choices, data requests and deletion\n\nOpen Manage your Realmroot account in Zigloo to access [Realmroot account settings](https://id.realmroot.dev). To request access, correction, a copy or deletion of **Zigloo service data**, email [saltbo@outlook.com](mailto:saltbo@outlook.com) from your account email and describe your request. We may verify ownership to protect your data and will respond within applicable legal deadlines, explaining any records we must retain.\n\nSigning out, clearing local history or uninstalling does not itself delete server-side records. Deleting Zigloo data does not delete your media from your WebDAV provider. Account deletion does not cancel an Apple subscription; manage subscriptions separately in your Apple Account settings.\n\nDepending on applicable law, you may also request restriction of processing, object to processing, withdraw consent or contact a privacy authority. We process information to provide the services you request, with consent where required, for legitimate service and security purposes where permitted, and to meet legal obligations. Contact us to exercise your rights.\n\n## Children\n\nZigloo is not directed to children under 13 or a higher minimum age required by local law. We do not knowingly collect their personal information without legally required consent. Contact us if you believe a child has provided personal information so we can investigate and remove it where required.\n\n## Changes and contact\n\nWe update the effective date when this policy changes and provide notice of material changes where required. For privacy requests, contact Bo Yan at [saltbo@outlook.com](mailto:saltbo@outlook.com). See [Zigloo Support](/zigloo/support/) for troubleshooting.\n"
    },
    "terms": {
      "title": "Terms of Service",
      "draft": false,
      "content": "# Zigloo Terms of Service\n\n**Effective date: September 8, 2026.**\n\nZigloo is operated by **Bo Yan**, an independent developer. Contact: [saltbo@outlook.com](mailto:saltbo@outlook.com).\n\nThese Terms govern your use of Zigloo and its related services. By using Zigloo, you agree to these Terms. If you do not agree, do not use the service.\n\n## Service and eligibility\n\nZigloo plays your own videos and provides subtitle-based English learning. It does not supply a film or television catalog or grant rights to third-party content. Features depend on your platform, file format and service availability. An account is required. Remote storage, synchronization, online subtitle searches and AI explanations require network access.\n\nYou must be at least 13 and meet any higher minimum age required in your country. If you are below the age of legal majority, a parent or guardian must agree to these Terms and supervise your use.\n\n## Your account and content\n\nProvide accurate account information and protect your credentials. You are responsible for activity you authorize and the storage sources you connect. You retain your rights in your content. Only access or process content you are entitled to use. Do not bypass access controls, infringe others' rights, distribute malicious files, impersonate others or evade service limits. These restrictions do not remove non-waivable legal rights.\n\n## AI learning and third-party services\n\nAI explanations may be incorrect, incomplete or unsuitable. They are learning assistance, not authoritative translations or a guarantee of learning progress. Requests share subtitle text and context as described in the [Privacy Policy](/zigloo/privacy/). Do not submit information you lack permission to share.\n\nStorage, authentication, metadata, subtitle, hosting and AI providers have their own terms and limits. You are responsible for storage and connectivity charges you accept. Outages or provider changes may affect features. Compatibility with every provider, file or subtitle is not guaranteed. Keep independent copies of important data; Zigloo is not a backup service.\n\n## Subscriptions and billing\n\nZigloo is free to download and offers optional auto-renewing Zigloo Pro subscriptions. The purchase screen shows the price in your currency, billing period, included features, limits and any trial or promotional conditions before confirmation.\n\nApple charges your Apple Account when you confirm a purchase. Subscriptions renew automatically unless cancelled at least 24 hours before the current period ends. Renewal is charged within the 24 hours before that period ends. Manage or cancel subscriptions in your Apple Account subscription settings. Cancellation stops future renewal; access normally continues until the paid period ends. Any unused free-trial portion is forfeited when you purchase a subscription, where applicable.\n\nUse Restore Purchases with the Apple Account used for the purchase to restore eligible access. Request refunds for Apple purchases through [Apple](https://reportaproblem.apple.com/), subject to store rules and applicable consumer law. Deleting the app or your Zigloo or Realmroot account does not cancel your subscription. Price changes follow applicable Apple notice and consent rules and consumer law.\n\nFor App Store copies, the [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) governs the app license. These Terms describe related Zigloo services and do not restrict rights under that license or applicable consumer law. TestFlight versions are provided for testing and may differ from the App Store release.\n\n## Privacy and ending use\n\nThe [Privacy Policy](/zigloo/privacy/) explains data processing. You may stop using Zigloo at any time. Open Manage your Realmroot account in Zigloo to access your identity account settings. To request deletion of Zigloo service data, email [saltbo@outlook.com](mailto:saltbo@outlook.com) from your account email. We may verify ownership and retain records required by law as described in the Privacy Policy. Your WebDAV media remains with your storage provider.\n\n## Service restrictions and changes\n\nWe may restrict access to address misuse, security incidents, legal requirements or discontinuation. We will provide notice and an opportunity to resolve an issue where appropriate, except where immediate action is necessary for security or required by law. Contact us to question a restriction. Applicable consumer and data-access rights remain in effect.\n\nMaterial changes will carry an updated effective date and notice where required. Changes do not retroactively remove rights relating to completed purchases. If you disagree with a change, you may stop using the service and cancel future renewals.\n\n## Responsibility and consumer rights\n\nZigloo is provided as available; uninterrupted or error-free operation is not promised. Verify important information and retain independent copies. Nothing here excludes liability or limits warranties, remedies or rights that cannot lawfully be excluded. These Terms do not require arbitration or prevent you from seeking remedies in courts available under applicable law.\n\n## Contact\n\nFor service and account questions, contact Bo Yan at [saltbo@outlook.com](mailto:saltbo@outlook.com). Never send passwords or private media links. See [Zigloo Support](/zigloo/support/) for troubleshooting.\n"
    }
  },
  "title": "Zigloo — Watch in English. Learn from every line.",
  "pageDescription": "Turn your own English videos into learning moments with subtitle explanations, WebDAV playback and synced watch progress. Currently in private beta.",
  "sections": {
    "screenshots": false,
    "reviews": false
  }
} satisfies AppDefinition;
