# andrii.dev — Personal Portfolio

Fullstack developer portfolio for Andrii Kuznichenko. Built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, next-intl, and custom Magic UI components.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.38.0
- **i18n**: next-intl 4.11.0 (EN / DE / UA)
- **UI primitives**: shadcn/ui (base-nova)
- **Magic UI components**: custom implementations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app redirects to `/en` automatically.

## Pages

| Route | Description |
|-------|-------------|
| `/en` | Home page |
| `/en/projects` | Projects listing |
| `/de` | Home page (German) |
| `/de/projects` | Projects listing (German) |
| `/ua` | Home page (Ukrainian) |
| `/ua/projects` | Projects listing (Ukrainian) |

## Project Structure

```
app/
  layout.tsx           # Root layout (fonts, dark class)
  page.tsx             # Redirects to /en
  [locale]/
    layout.tsx         # Locale layout (NextIntlClientProvider)
    page.tsx           # Home page
    projects/
      page.tsx         # Projects page
components/
  magicui/             # Custom Magic UI component implementations
    typing-animation.tsx
    text-reveal.tsx
    meteors.tsx
    border-beam.tsx
    shimmer-button.tsx
    animated-shiny-text.tsx
    marquee.tsx
    number-ticker.tsx
    blur-fade.tsx
    dot-pattern.tsx
  ui/                  # shadcn/ui primitives
    button.tsx
    badge.tsx
  Nav.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Education.tsx
  Stack.tsx
  ProjectsPreview.tsx
  Footer.tsx
  projects/
    ProjectCard.tsx    # Individual project card
    FilterTabs.tsx     # Animated filter tabs
i18n/
  routing.ts           # next-intl locale routing config
  request.ts           # next-intl server request config
  navigation.ts        # Typed navigation helpers
lib/
  projects.ts          # Project data (types + array)
  utils.ts             # cn() helper
messages/
  en.json              # English translations
  de.json              # German translations
  ua.json              # Ukrainian translations
middleware.ts          # next-intl locale middleware
```

## Adding Translations

Edit the files in `messages/` to update copy. All keys must exist in all three files.

```json
{
  "nav": {
    "home": "Home",
    "projects": "Projects"
  }
}
```

To add a new locale:

1. Add the locale to `i18n/routing.ts`:
   ```ts
   locales: ['en', 'de', 'ua', 'fr'],
   ```

2. Create `messages/fr.json` with all keys translated.

3. Add the locale to the `LOCALES` array in `components/Nav.tsx`.

## Adding a Project

Edit `lib/projects.ts` and add an entry to the `projects` array:

```ts
{
  id: "my-project",
  number: "05",
  title: "My Project",
  subtitle: "Short description",
  description: "Longer description...",
  status: "wip",          // "live" | "wip" | "planned"
  stack: ["Next.js", "TypeScript"],
  done: ["Feature A"],
  nextUp: ["Feature B"],
  links: { live: "https://...", github: "https://..." },
  period: "2025",
}
```

## Scripts

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```
