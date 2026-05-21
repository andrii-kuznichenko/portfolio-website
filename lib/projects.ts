export type ProjectStatus = "live" | "wip" | "planned";

export interface Project {
  id: string;
  number: string;
  status: ProjectStatus;
  stack: string[];
  done: string[];
  nextUp: string[];
  links: {
    live?: string;
    github?: string;
  };
  period: string;
}

export const projects: Project[] = [
  {
    id: "marketplace",
    number: "01",
    status: "wip",
    stack: ["Next.js 14", "TypeScript", "Postgres", "Prisma", "JWT Auth", "Tailwind", "Vercel"],
    done: [
      "Auth (JWT + sessions)",
      "Listings CRUD",
      "Responsive UI",
      "Deployed on Vercel",
    ],
    nextUp: ["Search & filters", "Tests (Vitest)", "User messaging", "Image optimization"],
    links: {
      live: undefined,
      github: undefined,
    },
    period: "2023 — present",
  },
  {
    id: "jim-stanes",
    number: "02",
    status: "live",
    stack: ["React", "Framer Motion", "Vercel", "Custom domain", "SEO optimised"],
    done: [
      "Artwork grid",
      "Page transitions",
      "SEO & open graph meta",
      "Live on custom domain",
    ],
    nextUp: [],
    links: {
      live: undefined,
      github: undefined,
    },
    period: "2024",
  },
  {
    id: "restaurant-saas",
    number: "03",
    status: "wip",
    stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Auth.js"],
    done: ["Table management UI", "Menu builder"],
    nextUp: [
      "App Router refactor",
      "Reservations system",
      "Multi-tenant isolation",
      "Analytics dashboard",
    ],
    links: {
      github: undefined,
    },
    period: "2023 — present",
  },
  {
    id: "animation2d",
    number: "04",
    status: "planned",
    stack: ["Framer Motion", "GSAP", "Lottie", "React", "Canvas"],
    done: [],
    nextUp: [],
    links: {},
    period: "Planned",
  },
];
