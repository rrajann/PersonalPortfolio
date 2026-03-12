export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Rabbit holes", href: "#rabbit-holes" },
  { label: "Built", href: "#built" },
];

export const RABBIT_HOLES_SECTION = {
  title: "Random recent rabbit holes I fell into",
};

export const PROFILE = {
  name: "Rajan Sapkota",
  initials: "RS",
  role: "Building Kadu Care, studying Computer Science + Business at UBC.",
  context:
    "Kadu Care builds AI systems that automate clinical workflows.",
  lastUpdated: "12 Mar 2026",
  location: "Vancouver",
};

export const POSITIONING = {
  title: "How I build",
  paragraph:
    "Most days I am writing and shipping software for Kadu Care. I work across product design, frontend, backend, model integration, and infrastructure, while thinking about how AI products actually fit into clinical workflows, incentives, and healthcare systems. I care about software a clinician can use reliably and with peace of mind. I am early in my career and figuring things out as I go.",
};

export const CURRENT_FOCUS = {
  title: "Current focus",
  company: "Kadu Care",
  companyUrl: "https://kaducare.com",
  paragraphs: [
    "We scribe medical documentation and automate insurance forms. In current deployments, this has cut admin time by around 50%.",
    "A lot of the work is behavioral, not just technical. Physicians are often resistant to changing habits, even when a new workflow is faster after the first week. So we build around existing routines and earn trust with consistent outputs.",
    "We have also put real effort into Spanish medical terminology so notes capture medication names and conditions correctly in markets where generic scribes often fail.",
  ],
};

export const RABBIT_HOLES = [
  {
    text: "Your personal identity is a product of your pattern loving mind.",
  },
  {
    text: "How the US dollar became the global reserve currency.",
  },
  {
    text: "AI 2027.",
    href: "https://ai-2027.com/",
  },
  {
    text: "Why runners willingly suffer.",
  },
  {
    text: "Advaita Vedanta and the problem of the self.",
  },
  {
    text: "Ethical emotivism.",
  },
];

export const BUILT_SYSTEMS = {
  title: "Things I have built",
  intro:
    "Recent work I have shipped for real clinical use cases.",
  items: [
    {
      name: "Hands-Free Pathology Controls",
      description:
        "Built wake-word and voice controls ('Hola Kadu' / 'Hey Kadu') so pathologists can run recording, template switching, and patient assignment without touching a laptop. Easily the most satisfying feature once it finally worked.",
    },
    {
      name: "Spanish Clinical Correction Pipeline",
      description:
        "Engineered a Spanish clinical correction pipeline that normalizes medication and condition terminology with high precision, sharply reducing spelling drift and clinical misinterpretation in generated notes. It has become one of our clearest product moats in Spanish-speaking markets.",
    },
    {
      name: "Compliance and Access Architecture",
      description:
        "Centralized reads/writes and audit trails, then added ABAC plus org-scoped and personal-scoped auth to keep the platform HIPAA and NOM standards aligned.",
    },
  ],
};

export const EXTERNAL_LINKS = [
  { label: "Kadu Care", href: "https://kaducare.com", external: true },
  { label: "GitHub", href: "https://github.com/rrajann", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajansapkota/",
    external: true,
  },
  { label: "Email", href: "mailto:rs.rajansapkota@gmail.com", external: false },
  { label: "Resume", href: "/resume.pdf", external: true },
];
