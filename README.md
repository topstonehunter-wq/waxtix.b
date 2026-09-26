# Waxtix v2

Built from the 26 September 2026 Waxtix PDF requirements.

## Included
- Home: short videos <= 60s, search, like, share, comment, download
- News: written news + photos field
- Upload: videos only, client-side 60s validation
- Chat: foundation for direct messages, groups and status
- Profile: edit profile, followers/following/viewers area, menu and account
- Optional sign-in for browsing; sign-in required for user actions
- Email/password, Google OAuth and phone OTP through Supabase Auth
- Supabase database + public video Storage
- Render static deployment
- No translation or text-to-speech, per the latest PDF

## Setup
1. Create a Supabase project.
2. Supabase SQL Editor: paste and run `schema.sql`.
3. In Supabase Authentication > Providers, enable Email, Google and Phone as desired. Configure Google/phone provider credentials as required by Supabase.
4. In Render, create a Static Site from this GitHub repo.
5. Build command: `npm install && npm run build`.
6. Publish directory: `dist`.
7. Environment variables:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_PUBLISHABLE_KEY` = your Supabase publishable key (`sb_publishable_...`)
8. Deploy.

Never put a Supabase service-role/secret key in frontend code.
