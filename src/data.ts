import { Project, Experience } from './types';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Brain,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import React from 'react';

export const personalInfo = {
  name: "SHEHRYAR KHAN",
  email: "shehryar3551@gmail.com",
  phone: "+92 316 5441061",
  location: "Islamabad, Pakistan",
  linkedin: "http://www.linkedin.com/in/shehryar-khan3551",
  github: "#",
};

export const aboutStats = {
  cgpa: "3.2",
  languagesCount: "5+",
};

export const features = [
  { title: "Software Architecture", icon: 'Code2', desc: "Designing scalable, high-performance systems with clean code." },
  { title: "Data Intelligence", icon: 'Database', desc: "Transforming raw data into strategic, actionable business insights." },
  { title: "Predictive Analytics", icon: 'BarChart3', desc: "Leveraging Machine Learning to forecast trends and user behaviors." },
  { title: "Intelligent Automation", icon: 'Brain', desc: "Streamlining complex operations with custom AI-driven workflows." },
];

export const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "PHP", "R", "SQL", "Java", "C++", "HTML/CSS", "Flutter/Dart"]
  },
  {
    title: "Databases & Auth",
    skills: ["MongoDB", "PostgreSQL", "JWT Authentication", "Google OAuth"]
  },
  {
    title: "AI & Automation",
    skills: ["Scikit-learn", "Pandas", "NumPy", "LLMs", "n8n Automation"]
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Google Data Studio"]
  },
  {
    title: "Backend & APIs",
    skills: ["RESTful APIs", "CRUD Operations", "Flask", "Postman"]
  },
  {
    title: "Tools",
    skills: ["Git/GitHub", "VS Code", "Jupyter", "Google Colab", "Excel"]
  }
];

export const experiences: Experience[] = [
  {
    company: "FutureWave Technology Agency",
    role: "Founder",
    period: "Present",
    location: "Islamabad, PK",
    description: [
      "Founding and scaling a digital agency focused on high-performance web architecture and strategic SEO.",
      "Architecting complex automation workflows and integrating advanced AI models into business processes.",
      "Directing cross-functional teams to deliver sophisticated digital products for a global clientele."
    ]
  },
  {
    company: "Soft IT Land",
    role: "WordPress & Frontend Developer",
    period: "4+ Years",
    location: "Islamabad, PK",
    description: [
      "Architected high-traffic responsive platforms, leveraging modern frontend stacks and WordPress ecosystems to drive user engagement.",
      "Orchestrated comprehensive SEO strategies and technical performance optimizations.",
      "Bridged the gap between complex UI/UX requirements and high-performance code implementations."
    ]
  },
  {
    company: "Freelance (Fiverr & Upwork)",
    role: "Web Developer & SEO Specialist",
    period: "Ongoing",
    location: "Remote",
    description: [
      "Consulted for international clients, delivering bespoke web development and comprehensive SEO audits to maximize digital footprint.",
      "Built business websites, landing pages, and conducted comprehensive SEO audits.",
      "Maintained high client satisfaction ratings through quality delivery."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "MediBot – AI Medical Assistant",
    description: "An advanced healthcare ecosystem integrating Machine Learning for disease prediction and LLM-based conversational AI for symptom analysis.",
    tags: ["Flutter", "Python/Flask", "ML", "LLM", "n8n", "MongoDB", "JWT"],
    image: "https://picsum.photos/seed/medibot/1200/800",
    link: "#",
    github: "#",
    techStack: "Final Year Project"
  },
  {
    title: "Real-Time Financial Data Pipeline",
    description: "A high-frequency data pipeline engineered to monitor crypto and equity markets, featuring real-time visualization and automated alerting systems.",
    tags: ["Python", "Power BI", "n8n", "Telegram Bot", "REST APIs"],
    image: "https://picsum.photos/seed/finance/1200/800",
    link: "#",
    github: "#",
    techStack: "Data Engineering"
  },
  {
    title: "Real Estate Market Insights",
    description: "A comprehensive market intelligence tool that scrapes and analyzes regional real estate data, providing interactive visualizations for investment strategy.",
    tags: ["Python", "BeautifulSoup", "Power BI", "CSV"],
    image: "https://picsum.photos/seed/realestate/1200/800",
    link: "#",
    github: "#",
    techStack: "Data Analytics"
  }
];

export const certifications = [
  "Business Analysis & Process Management – Coursera",
  "Introduction to Data Analysis using Microsoft Excel – Coursera",
  "SEO with Squarespace – Coursera",
  "WordPress Website Development – Coursera",
  "Foundations of Emerging Technologies – Dubai Future Foundation",
  "Google Ads Apps Certification – Google Skillshop",
  "Google Analytics – Google Skillshop",
  "Microsoft Power BI – Excel Basement",
  "Python for Data Analysis – Great Learning"
];

export const languages = ["English (Fluent)", "Urdu (Native)", "Pashto (Fluent)", "Hindi (Fluent)"];
