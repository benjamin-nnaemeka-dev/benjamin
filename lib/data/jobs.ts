export interface Job {
  id: string;
  tabLabel: string;
  title: string;
  company: string;
  url: string;
  range: string;
  duties: string[];
}

export const jobs: Job[] = [
  {
    id: "apexly",
    tabLabel: "APEXLY",
    title: "Founder & Lead Engineer",
    company: "APEXLY",
    url: "https://getapexly.com",
    range: "2026 - Present",
    duties: [
      "Built and operate Idyntic, an identity lookup and verification service used by 250+ businesses across Nigeria.",
      "Built Cliqpay, an Android app and backend for utility bills, airtime, and wallet transfers.",
      "Implemented idempotent payment reconciliation and transaction locks to handle webhook retries and avoid race conditions.",
    ],
  },
  {
    id: "techsphere",
    tabLabel: "TechSphere",
    title: "Engineering Lead",
    company: "TechSphere Academy",
    url: "https://techsphere.ng",
    range: "2025",
    duties: [
      "Led a team of 25 engineers building an automated phone ordering and reservation system for a local restaurant.",
      "Connected Vapi webhooks with n8n and Supabase to log call transcripts, extract order items, and manage table reservations.",
      "Graduated top of the software engineering cohort.",
    ],
  },
  {
    id: "niit",
    tabLabel: "NIIT",
    title: "Java & Mobile Systems",
    company: "NIIT",
    url: "https://niit.com",
    range: "2024",
    duties: [
      "Completed intensive coursework in Java Technologies and Mobile Systems, graduating with Distinction.",
      "Built Android apps using Java, the Android SDK, and Room database for local persistence.",
      "Designed SQL relational schemas and connected apps to Firebase cloud backends.",
      "Focused on object-oriented programming, design patterns, and multithreading.",
    ],
  },
];
