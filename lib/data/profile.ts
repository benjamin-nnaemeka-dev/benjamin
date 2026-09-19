export interface ProfileData {
  name: string;
  tagline: string;
  subTagline: string;
  email: string;
  avatar: string;
  heroBio: string;
  aboutParagraphs: string[];
  skills: string[];
  socials: {
    name: string;
    url: string;
  }[];
  resume: string;
}

export const profile: ProfileData = {
  name: "Benjamin Nnaemeka",
  tagline: "I build things for mobile and web.",
  subTagline:
    "Software engineer building Android apps, web products, and automation tools. Founder of APEXLY, creating identity verification solutions for Nigerian businesses.",
  email: "hi@benjamin-nnaemeka.dev",
  avatar: "/profile/profile-photo.png",
  heroBio:
    'I\'m a software engineer and founder of <a href="https://getapexly.com" target="_blank" rel="noopener noreferrer" class="text-green hover:underline">APEXLY</a>. I build Android apps, web products, backend systems, and automation tools.',
  aboutParagraphs: [
    "Hello! I'm Benjamin. I build software for Android and the web. I work with Kotlin, Jetpack Compose, TypeScript, PostgreSQL, and workflow automation.",
    'I run <a href="https://getapexly.com" target="_blank" rel="noopener noreferrer" class="text-green hover:underline">APEXLY</a>, where I build and operate products including <a href="https://idyntic.getapexly.com" target="_blank" rel="noopener noreferrer" class="text-green hover:underline">Idyntic</a>, an identity verification platform used by businesses across Nigeria. I started building with Sketchware, later trained in Java and Android development at NIIT, and expanded into web development and AI automation by building real products.',
  ],
  skills: [
    "Kotlin & Jetpack Compose",
    "Android SDK & Coroutines",
    "MVVM & MVI Architecture",
    "Firebase & Cloud Functions",
    "Next.js & TypeScript",
    "PostgreSQL & Supabase",
    "Node.js & REST APIs",
    "AI Automation & n8n",
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/benjamin-nnaemeka-dev" },
    { name: "LinkedIn", url: "https://linkedin.com/in/benjamin-nnaemeka" },
    { name: "Apexly", url: "https://getapexly.com" },
    { name: "Email", url: "mailto:hi@benjamin-nnaemeka.dev" },
  ],
  resume: "/resume/Benjamin Nnaemeka.pdf",
};
