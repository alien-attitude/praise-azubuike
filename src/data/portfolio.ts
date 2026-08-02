
import type { PortfolioData } from "../types/portfolio";

/**
 * Single source of truth for all portfolio content.
 * Content is derived from docs/portfolio-details.md and structured into typed
 * objects here so UI components never touch raw markdown.
 *
 * Images and external links are intentionally left blank — populate later.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: "Praise Ozioma Azubuike",
    title: "Result-driven Virtual Assistant",
    tagline: "A professional portfolio showing real work, systems, and projects supported." ,
    intro:
    "",
    summary:
    "Think of me as your right-hand lady that works behind the scenes making sure everything runs in order. I specialize in documentation, research, task tracking, administrative, " +
        "and customer support, bringing structure, consistency, and proactive follow-through to every team I work with.",
    profileImage: "/praise/photo.jpeg",
    contact: {
      email: "thepraiseazubuike@gmail.com ",
      location: "West Africa Time Zone",
      availability: "Available to work across all time zones"
    },
    social: {
      github: "",
      linkedin: "",
      portfolio: "",
      website: "",
      resume: ""
    },
    services: [
    "Administrative Support",
    "Data Entry & Documentation",
    "Team Support & Follow-ups",
    "Calendar & Email Management",
    "Internet & Market Research",
    "CRM & Customer Support Tasks",
    "Travel Planning & Presentation",
    "Workspace Organization (Drive, Notion, Folders)",
    "Onboarding Documentation & SOP Writing",
    "Light Design (Canva)",
    "Email Marketing"]

  },

  experience: [
  {
    id: "exp-vaa",
    position: "Virtual Assistant & Customer Service",
    company: "VAA Global Tech",
    period: "December 2024 – February 2025",
    responsibilities: [
    "Provided end-to-end virtual assistance across documentation, scheduling, and administrative support.",
    "Handled customer service enquiries with prompt, empathetic follow-through.",
    "Maintained organized systems and consistent follow-ups to keep operations running smoothly."]

  },
  {
    id: "exp-alx",
    position: "Virtual Assistant",
    company: "ALX",
    period: "July 2024 – August 2024",
    responsibilities: [
    "Completed intensive virtual assistant training covering admin, research, and productivity tooling.",
    "Applied structured workflows and task-tracking systems to real-world assignments."]

  }],


  education: [
  {
    id: "edu-vaa",
    institution: "VAA Global Tech",
    degree: "Virtual Assistant & Customer Service",
    duration: "December 2024 – February 2025",
    description:
    "Hands-on training in virtual assistance and customer service operations."
  },
  {
    id: "edu-alx",
    institution: "ALX",
    degree: "Virtual Assistant",
    duration: "July 2024 – August 2024",
    description:
    "Foundational virtual assistant program focused on admin, research, and workflow systems."
  }],


  projects: [
  {
    id: "proj-market-research",
    title: "Market Research Documentation",
    shortDescription:
    "Targeted research into emerging German tech, delivering verified insights on high-value companies.",
    description:
    "Led targeted research into emerging German tech and adjacent industries, delivering verified insights on promising companies for business growth. Applied analytical " +
        "research methods and decision-mapping strategies to identify organisations with high strategic value and expansion potential.",
    categories: [
    "Web Research",
    "Data Accuracy",
    "Data Validation",
    "Spreadsheet Management"],

    tags: ["Research", "Data", "Documentation"],
    roles: ["Lead Researcher", "Data Manager", "Content Writer", "Copywriter"],
    results: [
    "Produced a verified database of high-quality leads.",
    "Successfully identified key decision-makers, providing accurate information that supported targeted business growth strategies."],

    technologies: [],
    images: ["/praise/market_research/1.png", "/praise/market_research/2.png"],
    featuredImage: "",
    projectUrl: "https://docs.google.com/spreadsheets/d/1Wgpqh8dfyu95Ad8LmtNTroiOJrMs_Mdp/edit?gid=903761916#gid=903761916",
    notionUrl: ""
  },
  {
    id: "proj-schoolbase",
    title: "School Base (Pitch Deck)",
    shortDescription:
    "Investor-ready pitch deck and communication strategy for a school management platform.",
    description:
    "SchoolBase is a school management app that helps administrators and teachers handle attendance, student records, timetables, assignments, and fee tracking in one platform. " +
        "Created an investor-ready pitch deck, built a communication strategy, and carried out detailed product and competitor analysis.",
    categories: ["Pitch Deck", "Product Analysis", "Communication Strategy"],
    tags: ["Presentation", "Strategy", "Research"],
    roles: [
    "Created an investor-ready pitch deck",
    "Built a communication strategy",
    "Carried out detailed product and competitor analysis"],

    results: [
    "Produced a professional grant-ready presentation that effectively showcased School Base's strengths and established its competitive market position."],

    technologies: [],
    images: ["/praise/school_base/1.png", "/praise/school_base/3.png", "/praise/school_base/5.png"],
    featuredImage: "",
    projectUrl: "https://www.canva.com/design/DAG6k3DUj8Y/VgMrNSId9uOu6tH2g3_6jg/edit",
    notionUrl: ""
  },
  {
    id: "proj-qa-audit",
    title: "Quality Assurance Audit – Lings Cars",
    shortDescription:
    "Comprehensive 43-point QA audit of LingsCars.com covering accessibility, usability, and performance.",
    description:
    "Conducted a comprehensive quality assurance audit of LingsCars.com, identifying graphic inconsistencies, ineffective colour choices, and poor font presentation. " +
        "Delivered a detailed 43-point audit report that assessed accessibility, mobile responsiveness, design consistency, usability, performance, SEO, and content clarity.",
    categories: [
    "QA Testing",
    "Client-friendly Writing",
    "Accessibility",
    "Bug Reporting"],

    tags: ["QA", "Accessibility", "Reporting"],
    roles: ["Manual Testing", "Error Documentation", "DevTools Inspection"],
    results: [
    "Delivered a detailed 43-row audit report covering SEO, design consistency, and usability, with clear findings to support website improvement and a better user experience."],

    technologies: [],
    images: ["/praise/quality_assurance/1.png", "/praise/quality_assurance/2.png", "/praise/quality_assurance/3.png"],
    featuredImage: "",
    projectUrl: "https://docs.google.com/spreadsheets/d/1WDym4eC9unO-izRmQWHT1R5HtBmGcuPK/edit?gid=1138203373#gid=1138203373",
    notionUrl: ""
  },
  {
    id: "proj-travel-itinerary",
    title: "6-Country Destination Travel Itinerary",
    shortDescription:
    "Fully structured international itinerary for a Fortune 500 CEO across six countries.",
    description:
    "Designed a fully structured international travel itinerary for a Fortune 500 CEO covering London,  Dubai, Singapore, Berlin, Nairobi, Sao Paulo, Granda, Chiang Rai, Pokhra for June 1, 2026 to July 2, 2026 (32 days) \n" +
        "Planned a seamless, stress-free multi-country journey with optimized routes, coordinated logistics, and well-scheduled transitions across all destinations to ensure efficiency, safety, and smooth connectivity throughout the trip.\n",
    categories: [
    "Critical Thinking",
    "Deep Research",
    "Crisis Management",
    "Logistics"],

    tags: ["Logistics", "Research", "Planning"],
    roles: [
    "Itinerary Planning",
    "Route Optimisation",
    "Booking & Logistics",
    "Visa eligibility checks",
    "Travel clearance verification",
    "Immigration compliance checks",
    "Entry documentation review"],

    results: [
    "Eliminated unnecessary backtracking, saving over 10 hours of travel time.",
    "Resolved North Korea access requirements successfully.",
    "Coordinated and secured a government meeting in St. Helena."],

    technologies: [],
    images: ["/praise/travel_planner/2.png", "/praise/travel_planner/1.png"],
    featuredImage: "",
    projectUrl: "https://app.notion.com/p/Travel-Planner-3504e800347880d081a0e1e37b782463",
    notionUrl: "https://app.notion.com/p/Travel-Planner-3504e800347880d081a0e1e37b782463"
  },
  {
    id: "proj-file-management",
    title: "File Management System",
    shortDescription:
    "Built and maintained an organised team Google Drive with zero missed files.",
    description:
    "Built and maintained a well-organised general team Google Drive folder that contains all documents created and used by the team. Resulted in no missed files and a reliable single" +
        " source of truth for the whole team.",
    categories: ["Structure Design", "Permission Management", "Maintenance"],
    tags: ["Organization", "Systems", "Admin"],
    roles: ["Structure Design", "Permission Management", "Maintenance"],
    results: [
    "Reduced version mistakes.",
    "Saved hundreds of hours of searching."],

    technologies: [],
    images: ["/praise/file_management/1.png", "/praise/file_management/2.png"],
    featuredImage: "",
    projectUrl: "",
    notionUrl: ""
  },
  {
    id: "proj-chowtime",
    title: "Chowtime (Investor Pitch Deck)",
    shortDescription:
    "Investor-ready pitch deck for a Nigerian meal delivery concept for students and professionals.",
    description:
    "Chowtime is a food business plan created to solve the food problem students, corps members, and professionals face. The goal is to make fresh, affordable, and consistently " +
        "delicious Nigerian meals accessible to every student, corper, and busy professional — delivered directly to their door so that food is never a problem, regardless of budget or schedule. The investor-ready pitch deck covered the full product development process: research, structure, user pain points, product solution, user experience, and competitive analysis.",
    categories: ["Pitch Deck", "Product Development", "Competitive Analysis"],
    tags: ["Presentation", "Strategy", "Research"],
    roles: [
    "Developed investor-ready pitch deck",
    "Developed 90-day roadmap",
    "Product & competitive research"],

    results: [
    "A polished pitch deck suitable for grant applications.",
    "Competitive market positioning clearly highlighted."],

    technologies: [],
    images: ["/praise/chowtime/1.png", "/praise/chowtime/2.png", "/praise/chowtime/3.png", "/praise/chowtime/4.png"],
    featuredImage: "",
    projectUrl: "https://www.canva.com/design/DAHJ_AvHUP8/GUFiIij57s_IGtcR8_Y2UQ/edit",
    notionUrl: "https://app.notion.com/p/Chowtime-Operational-Manual-3624e8003478802786c5de80b462dbbf#3624e8003478803da84bc53721aa9a9b"
  },
  {
    id: "proj-email-marketing",
    title: "Email Marketing Onboarding Sequence",
    shortDescription:
    "Multi-stage onboarding email sequence built on customer psychology to boost activation.",
    description:
    "Analyzed the onboarding journey to identify potential psychological, communication, and trust barriers affecting onboarding completion. Designed and developed an advanced, multi-stage " +
        "email onboarding sequence tailored to user behavior and engagement patterns, applying customer psychology principles including trust-building, objection handling, personalization, " +
        "and behavioral triggers to improve user activation.",
    categories: ["Email Marketing", "Customer Psychology", "Onboarding"],
    tags: ["Marketing", "Strategy", "Automation"],
    roles: [
    "Analyzed the onboarding journey for psychological and trust barriers",
    "Designed a multi-stage email onboarding sequence",
    "Applied customer psychology principles to improve activation",
    "Optimized segmentation, sequencing, timing, and calls-to-action"],

    results: [
    "Increased the likelihood of onboarding completion through a strategically sequenced campaign.",
    "Strengthened customer trust through personalized messaging and social proof.",
    "Improved engagement with higher open rates, click-through rates, and participation."],

    technologies: [],
    images: ["/praise/email_marketing/1.png", "/praise/email_marketing/2.png", "/praise/email_marketing/3.png"],
    featuredImage: "",
    projectUrl: "",
    notionUrl: ""
  },
    {
      id: "proj-ai-automation",
      title: "AI Automation Workflows",
      shortDescription:
          "AI-powered customer communication and booking automations using ManyChat and Zapier.",
      description:
          "Designed and implemented AI-powered customer communication workflows using ManyChat and Zapier to automate customer interactions. Built an Instagram Comment-to-DM automation that " +
          "instantly engaged leads, an automated client booking system connecting Google Forms, confirmation emails, and Google Sheets, and produced comprehensive SOPs and walkthrough videos to " +
          "support system adoption and maintenance.",
      categories: ["AI Automation", "Workflow Design", "Documentation"],
      tags: ["Automation", "Systems", "Documentation"],
      roles: [
        "Designed AI-powered customer communication workflows",
        "Built Instagram Comment-to-DM automation",
        "Developed automated client booking system",
        "Structured clean, scalable databases",
        "Conducted end-to-end testing and troubleshooting",
        "Produced SOPs, documentation, and walkthrough videos"],

      results: [
        "Reduced manual customer support by automating FAQ responses.",
        "Increased operational efficiency by automating booking confirmations and client data management.",
        "Eliminated missed client enquiries through automated communication workflows.",
        "Improved data accuracy and delivered scalable automation systems."],

      technologies: ["ManyChat", "Zapier", "Google Forms", "Google Sheets"],
      images: ["/praise/ai_automation/1.png", "/praise/ai_automation/2.png", "/praise/ai_automation/3.png"],
      featuredImage: "",
      projectUrl: "",
      notionUrl: ""
    },
    {
      id: "proj-lead-management-system",
      title: "Lead Management System",
      shortDescription:
          "A branded Airtable-based CRM and lead management system with automated workflows for lead tracking, qualification, and follow-up.",
      description:
          "Designed and implemented a lead management system using Airtable to centralise business leads from multiple acquisition channels. The solution featured a structured sales pipeline, " +
          "automated follow-up reminders, lead qualification, custom dashboards, and workflow automation to improve sales operations, visibility, and team collaboration.",
      categories: [
        "CRM",
        "Sales Automation",
        "Workflow Automation"
      ],
      tags: [
        "Lead Management",
        "CRM",
        "Airtable",
        "Automation",
        "Sales Pipeline",
        "Lead Qualification",
        "Dashboard",
        "Business Operations"
      ],
      roles: [
        "Designed and implemented a branded Airtable CRM system to centralise and manage leads from multiple acquisition channels.",
        "Built a structured sales pipeline with clearly defined lead stages, qualification criteria, and follow-up processes.",
        "Configured Airtable Automations to streamline lead tracking, automate follow-up reminders, and improve response times.",
        "Created custom Airtable views, filters, and dashboards to provide real-time visibility into lead status and sales activity.",
        "Organised and maintained accurate CRM records for over 15 business leads, ensuring data consistency and accessibility.",
        "Improved sales operations by introducing lead ownership, priority indicators, and structured follow-up tracking.",
        "Documented and presented the lead management workflow through a professional Loom walkthrough to guide new team members."
      ],
      results: [
        "Built a fully operational Airtable CRM and lead management system capable of supporting real-world business operations.",
        "Automated key stages of the lead management process, reducing manual follow-up effort and improving workflow efficiency.",
        "Established a centralised lead database that improved visibility, accountability, and collaboration across the sales process.",
        "Implemented lead qualification and priority tracking, enabling faster identification of high-value opportunities.",
        "Reduced the risk of missed or duplicated follow-ups by creating automated reminders and a standardised lead progression workflow."
      ],
      technologies: [
        "Airtable",
        "Airtable Automations",
        "Loom"
      ],
      images: ["/praise/lead_manage/1.png", "/praise/lead_manage/2.png", "/praise/lead_manage/3.png", "/praise/lead_manage/4.png"],
      featuredImage: "",
      projectUrl: "https://airtable.com/appNBjbNM65jliEhA/shrow645hvbFkMoEc",
      notionUrl: ""
    }
  ],


  tools: [
  {
    id: "tools-productivity",
    category: "Productivity & Admin",
    tools: [
    "Microsoft Office Suite",
    "Google Workspace",
    "Airtable",
    "Notion",
    "Trello",
    "Asana",
    "Monday.com",
    "Todoist",
    "ClickUp",
    "Buffer",
    "AI",
    "Klaviyo"]

  },
  {
    id: "tools-communication",
    category: "Communication",
    tools: ["Slack", "Teams", "Zoom", "Meet", "Calendly"]
  },
  {
    id: "tools-design",
    category: "Design",
    tools: ["Canva (Light design)"]
  },
  {
    id: "tools-crm",
    category: "CRM",
    tools: ["Zoho", "Salesforce"]
  },
  {
    id: "tools-email",
    category: "Email Marketing",
    tools: ["Brevo", "MailerLite"]
  },
  {
    id: "tools-automation",
    category: "Automation",
    tools: ["Zapier", "ManyChat"]
  }],


  testimonials: [
  {
    id: "testimonial-1",
    quote:
    "Praise brought structure to our chaos. Nothing fell through the cracks and our documentation has never been cleaner.",
    name: "Anu",
    position: "Team Lead",
    company: "Plus Tenders"
  },
  {
    id: "testimonial-2",
    quote:
    "Reliable, proactive, and detail-obsessed. The systems she set up saved our team hours every single week.",
    name: "Oluwaseun",
    position: "Assistant Team Lead",
    company: "Plus Tenders"
  },
  {
    id: "testimonial-3",
    quote:
    "From research to follow-ups, everything was handled with care and professionalism. A true right-hand support.",
    name: "Wisdom",
    position: "Founder",
    company: "Midas Marketing"
  }],

  certifications: [
    {
      id: "cert-alx-va",
      name: "Virtual Assistant Certificate",
      issuer: "ALX",
      date: "September 2024",
      images: "/praise/cert/1.jpg"
    },
    {
      id: "cert-vaa-customer-service",
      name: "Virtual Assistant & Customer Service",
      issuer: "VAA Global",
      date: "January 2025",
      images: "/praise/cert/2.png"
    },
    {
      id: "cert-tech-up-girls-digital-skills",
      name: "Basic Digital Skills",
      issuer: "Tech-up Girls Bootcamp",
      date: "",
      images: "/praise/cert/3.png"
    }
  ],


  faqs: [
  {
    id: "faq-deadlines",
    question: "Do you work with tight deadlines?",
    answer:
    "Yes, provided expectations are clearly defined from the outset."
  },
  {
    id: "faq-multitask",
    question: "Can you handle multiple tasks at once?",
    answer:
    "Yes, I prioritise and manage multiple tasks smoothly to ensure nothing is missed."
  },
  {
    id: "faq-international",
    question: "Do you work with international clients?",
    answer:
    "Absolutely, I collaborate effectively with clients across different time zones."
  },
  {
    id: "faq-systems",
    question: "Can you create systems for clients?",
    answer:
    "Yes — boards, trackers, folders, SOPs, and templates."
  },
  {
    id: "faq-nda",
    question: "Do you sign NDAs or confidentiality agreements?",
    answer:
    "Certainly. I strictly work under NDAs and fully respect client confidentiality. I am happy to sign any agreement."
  }],


  gains: [
  "More time to lead.",
  "Zero missed priorities.",
  "Streamlined operations.",
  "Professional stakeholder management.",
  "Reliable follow-through.",
  "Confidential executive support.",
  "Peace of mind."],


  navigation: [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "tools", label: "Tools" },
  { id: "certifications", label: "Certifications" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" }]

};