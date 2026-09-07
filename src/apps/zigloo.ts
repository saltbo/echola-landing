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
      "content": "# Zigloo Privacy Policy\n\nThis policy is being prepared and is not yet a published legal notice.\n\nThe privacy review covers account identifiers, library and playback synchronization, WebDAV credentials, and subtitle context sent for AI-assisted explanations. Data retention, account deletion, service providers, and contact details must be confirmed before publication.",
      "draft": true
    },
    "terms": {
      "title": "Terms of Service",
      "content": "# Zigloo Terms of Service\n\nTerms are being prepared before public release.\n\nZigloo plays media supplied by its users. It does not provide a film or television catalog. You must have permission to access your media. AI-generated learning explanations may contain mistakes.",
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
