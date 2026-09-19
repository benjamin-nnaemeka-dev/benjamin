export interface FeaturedProject {
  title: string;
  description: string;
  tech: string[];
  external: string;
  github?: string;
  docs?: string;
  image: string;
}

export interface OtherProject {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Idyntic",
    description:
      "A service for retrieving and verifying NIN and BVN records, with an identity API for businesses and developers. Built for business centres and digital service providers across Nigeria.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "BudPay", "Tailwind CSS"],
    external: "https://idyntic.getapexly.com",
    docs: "https://idyntic.getapexly.com/developers/docs",
    image: "/projects/idyntic.png",
  },
  {
    title: "Cliqpay",
    description:
      "A mobile bill payment app for airtime, data, electricity, cable TV, utility payments, virtual wallet funding, and cashback.",
    tech: ["Kotlin", "Android SDK", "Firebase", "Cloud Functions", "Paging 3"],
    external: "https://cliqpay.getapexly.com",
    image: "/projects/cliqpay.png",
  },
  {
    title: "Apexly",
    description:
      "The software company I use to build and operate my own products and software projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vapi", "Playwright"],
    external: "https://getapexly.com",
    image: "/projects/apexly.png",
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Nexus Dunning",
    description:
      "A payment recovery tool that helps businesses follow up on failed Paystack payments and retry them automatically.",
    tech: ["Next.js", "TypeScript", "n8n", "Supabase", "Resend"],
    github: "https://github.com/benjamin-nnaemeka-dev/nexus-dunning",
    external: "https://nexus-dunning.benjamin-nnaemeka.dev",
  },
  {
    title: "LinkUp",
    description:
      "An Android tool for managing and automating LinkedIn connection requests from list of profile urls.",
    tech: ["Kotlin", "Jetpack Compose", "AccessibilityService", "Coroutines"],
    github: "https://github.com/benjamin-nnaemeka-dev/linkup",
  },
  {
    title: "Mama Tee's Kitchen",
    description:
      "A restaurant ordering system that takes phone orders and reservations and presents them in a dashboard for staff.",
    tech: ["React", "TypeScript", "Vapi", "n8n", "Supabase"],
    github: "https://github.com/benjamin-nnaemeka-dev/mama-tees-kitchen",
    external: "https://mama-tees-kitchen.vercel.app",
  },
  {
    title: "FormBot",
    description:
      "A browser automation tool that fills and submits Google Forms using Playwright and Gemini-3-flash-preview via an OpenAI-compatible client.",
    tech: ["Playwright", "Node.js", "Express", "Gemini AI"],
    github: "https://github.com/benjamin-nnaemeka-dev/form-bot",
  },
];
