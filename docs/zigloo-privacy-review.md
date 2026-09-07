# Zigloo privacy and release preparation

Status: technical draft; not the published privacy policy. Screenshot preparation is deferred by the product owner.

## Verified data flows

| Data | Purpose and recipient | Evidence |
| --- | --- | --- |
| Account identity and installation identity | Authentication through the configured OIDC provider; account isolation and sync | Zigloo `server/auth_config.ts`, cloud sync architecture |
| WebDAV connection and credentials | Connect to user storage; credentials included in encrypted account sync | `docs/architecture.md`, `spec/cloud_sync.feature` |
| Favorites, watch progress and supported preferences | Account synchronization in Cloudflare D1 | cloud sync specification |
| Subtitle text, nearby cues, media context and a hashed account safety identifier | AI explanation via OpenAI Responses API | `server/adapters/providers/openai_learning.ts`, `server/usecases/learning_explanations.ts` |
| Media title/file facts and subtitle queries | Matching through TMDB and OpenSubtitles | architecture metadata and subtitle flows |
| Downloaded online subtitles | Private R2 cache by provider file reference | `server/adapters/gateways/subtitle_files.ts` |
| AI usage counters and operational logs | Quota enforcement and service operation | learning use case and Worker configuration |

Video files, scraped indexes and learning records are not part of account sync.
`store: false` is configured for AI responses; this alone does not establish zero
retention throughout the provider chain. The subtitle R2 writer has no code-level
expiry; bucket lifecycle and other provider retention must be verified separately.

## Draft policy structure

1. Identify the operator and a reachable privacy/support contact.
2. Describe account, device, sync, connection, media-query, subtitle and AI data.
3. Explain use for authentication, playback, sync, metadata, explanations,
   security and usage limits.
4. Name the configured identity provider, Cloudflare, OpenAI, TMDB and
   OpenSubtitles; explain which data each receives and link their policies.
5. Explain encrypted sync and that device clearing differs from account deletion.
6. State actual retention and deletion rules after the operator has confirmed
   them and account deletion has a working implementation.
7. Explain user controls, support requests, policy changes and applicable rights.

## Required owner information

- Legal operator name and email authorized for public support/privacy requests.
- Account/data deletion policy and intended retention, including backups and logs.
- First-release price/territories and review contact/access/test media.
- Confirmation of required rights for third-party metadata, artwork and subtitles.

## Product gaps requiring implementation before submission

- In-app account deletion: no complete deletion workflow was found. Clearing
  history or signing out must not be presented as deletion.
- Explicit permission before sending user data to third-party AI: a session-scoped
  consent dialog is now implemented locally in the native project. It is not yet
  part of the uploaded TestFlight build; device/release acceptance remains pending.
- In-app policy/support entry points: About currently only shows version/build.

Do not label these resolved through website copy alone. The native project has
concurrent billing changes; no billing/server files were modified in this work.

## Sources

- [Apple review guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Account deletion requirements](https://developer.apple.com/support/offering-account-deletion-in-your-app)
- [App Privacy details](https://developer.apple.com/app-store/app-privacy-details/)
