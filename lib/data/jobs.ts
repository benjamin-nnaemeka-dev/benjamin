export interface Job {
  id: string;
  tabLabel: string;
  title: string;
  company: string;
  url?: string;
  range: string;
  duties: string[];
  certificate?: {
    name: string;
    url: string;
  };
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
      "Built Cliqpay, an Android app and backend for utility bills, airtime, and cashback. (Pre launch)",
    ],
  },
  {
    id: "techsphere",
    tabLabel: "TechSphere",
    title: "AI Automation Engineering",
    company: "TechSphere Academy",
    url: "https://tsacademyonline.com",
    range: "2026",
    duties: [
      "Learned prompt engineering and workflow automation using Zapier, Make, and n8n.",
      "Built AI automation systems including AI support agents, gym subscription and management systems, and other business workflows.",
      "Led a team of 25 AI automation engineers to build an automated phone ordering and reservation system for a local restaurant in 2 days.",
      "Built the system with Vapi, n8n, Supabase, and a React dashboard for orders, reservations, escalations, call logs, and transcripts.",
      "Graduated with Distinction and was recognized as the best student in the AI Automation Engineering cohort.",
    ],
    certificate: {
      name: "AI Automation Engineering",
      url: "https://i.ibb.co/5XQFJ1MS/TS-Academy-Certificate-6963.png",
    },
  },
  {
    id: "niit",
    tabLabel: "NIIT",
    title: "Diploma in Java Technologies",
    company: "NIIT",
    url: "https://niit.com",
    range: "2025",
    duties: [
      "Started with core Java, then moved into Android development with Android Studio.",
      "Built Android apps using Java, the Android SDK, Firebase, and SQL.",
      "Learned core Android concepts including OOP, interfaces, abstraction, and multithreading.",
      "Built and connected apps to local databases and Firebase backends.",
    ],
    certificate: {
      name: "Diploma in Java Technologies",
      url: "https://i.ibb.co/FLbKQzCn/NIIT-Certificate.png",
    },
  },
  {
    id: "dollars-de-don",
    tabLabel: "Dollars De Don",
    title: "Operations Manager",
    company: "Dollars De Don Digital Services Limited",
    url: "",
    range: "2021 - 2024",
    duties: [
      "Progressed from System Operator to Operations Manager, taking on more responsibility for the daily running of the business.",
      "Managed customer services, printing, computer operations, digital services, staffing, and day-to-day business activities.",
      "Trained and supervised staff and students on computer operations, digital tools, and customer service.",
      "Handled client requests, business records, financial reporting, and service delivery.",
      "Improved daily operations and increased the business's capacity without adding more staff.",
    ],
  },
];
