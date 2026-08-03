import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  Brain,
  Cloud,
  Database,
  Globe,
  Layers,
  Server,
  ShieldCheck,
  Wrench,
  Workflow,
} from "lucide-react";

export const PROFILE = {
  name: "Vishnu Vardhan",
  headline:
    "Scale 0 → 100 | Agentic AI Engineer | Ex-SDE Intern | AI Agents | LLMs | Multi-Agent Systems | Python | LangGraph | LangChain | MCP | FastAPI | RAG | Vector DB | React.js | BCA ’26",
  roles: [
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "LLM Engineer",
    "Automation Engineer",
  ],
  email: "vishnudev4518@gmail.com",
  phone: "+91 9182177915",
  whatsapp: "https://wa.me/919182177915",
  github: "https://github.com/vishnu915",
  linkedin: "https://www.linkedin.com/in/repana-vishnu-vardhan-26795b316/",
  location: "Bengaluru, Karnataka, India",
};

export const CERTIFICATIONS = [
  {
    title: "Java Programming",
    issuer: "MindLuster",
    href: "https://drive.google.com/file/d/1jRZ9k3YJxyi45Ui10vn2jrItZ-hOjLkD/view?usp=sharing",
  },
  {
    title: "SQL Skill Certification",
    issuer: "One Roadmap",
    href: "https://oneroadmap.io/skills/sql/certificate/CERT-F5AE24F3",
  },
  {
    title: "Python Skill Certification",
    issuer: "One Roadmap",
    href: "https://oneroadmap.io/skills/python/certificate/CERT-08E14D3B",
  },
  {
    title: "Data Science vs ML vs AI",
    issuer: "Scaler School of Technology",
    href: "https://moonshot.scaler.com/s/sl/0L7AfXZP1e",
  },
  {
    title: "Python Skill Assessment",
    issuer: "Scaler School of Technology",
    href: "https://moonshot.scaler.com/s/li/5-7IQpVt6H",
  },
];

export const AWARDS = [
  {
    title: "Best College Website Developer",
    issuer: "Aditya Degree College",
    year: "2025",
    text: "Awarded for excellence in website development.",
  },
];

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export const STATS = [
  { value: 1, suffix: "", label: "Year Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 5, suffix: "", label: "Internships" },
  { value: 100, suffix: "%", label: "Passion" },
];

export const TIMELINE = [
  {
    year: "2023",
    title: "Started the journey",
    text: "Fell in love with Python, algorithms and shipping small tools that solve real problems.",
  },
  {
    year: "2024",
    title: "Full stack foundations",
    text: "Built production-grade apps with React, FastAPI and MySQL across multiple internships.",
  },
  {
    year: "2025",
    title: "Agentic AI focus",
    text: "Designed multi-agent systems with LangGraph, MCP tooling and RAG pipelines over vector stores.",
  },
  {
    year: "2026",
    title: "BCA graduate",
    text: "Graduating with a portfolio of autonomous agents deployed to real users.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Aditya Degree College, B. Kotha Kota",
    period: "Completed: July 2026",
  },
  {
    degree: "Intermediate (Commerce Stream)",
    institution: "Sunku Usha Gowthami Memorial Junior College, B. Kotha Kota",
    period: "Completed: 2023",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "PTM ZPHS High School",
    period: "Completed: 2021",
  },
];

export type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

export type Skill = { name: string; level: SkillLevel };

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: Braces,
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
    ],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
    ],
  },
  {
    category: "Frameworks",
    icon: Server,
    skills: [
      { name: "Flask", level: "Intermediate" },
      { name: "Django", level: "Beginner" },
      { name: "FastAPI", level: "Intermediate" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "MongoDB", level: "Beginner" },
      { name: "Pinecone", level: "Intermediate" },
      { name: "FAISS", level: "Intermediate" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Deep Learning", level: "Intermediate" },
      { name: "NLP", level: "Intermediate" },
      { name: "Computer Vision", level: "Intermediate" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "Supervised Learning", level: "Intermediate" },
      { name: "Unsupervised Learning", level: "Intermediate" },
      { name: "Feature Engineering", level: "Intermediate" },
      { name: "Model Evaluation", level: "Intermediate" },
      { name: "Model Optimization", level: "Intermediate" },
      { name: "LLMs", level: "Intermediate" },
      { name: "OpenAI GPT", level: "Intermediate" },
      { name: "Google Gemini", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Intermediate" },
      { name: "LangChain", level: "Intermediate" },
      { name: "LangGraph", level: "Intermediate" },
      { name: "RAG", level: "Intermediate" },
      { name: "Vector Embeddings", level: "Intermediate" },
      { name: "AI Agents", level: "Intermediate" },
      { name: "Agentic Systems", level: "Intermediate" },
      { name: "Multi-LLM Orchestration", level: "Intermediate" },
      { name: "MCP", level: "Intermediate" },
      { name: "Routing Strategies", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Jupyter", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" },
      { name: "IntelliJ IDEA", level: "Intermediate" },
      { name: "MySQL Workbench", level: "Intermediate" },
      { name: "Jira", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Beginner" },
      { name: "Jenkins", level: "Beginner" },
      { name: "CI/CD", level: "Beginner" },
    ],
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    skills: [
      { name: "Azure", level: "Beginner" },
      { name: "AWS", level: "Intermediate" },
    ],
  },
  {
    category: "Other Skills",
    icon: ShieldCheck,
    skills: [
      { name: "Software Design", level: "Intermediate" },
      { name: "Application Security", level: "Intermediate" },
      { name: "Integration & Deployment", level: "Intermediate" },
      { name: "Documentation", level: "Intermediate" },
      { name: "Software Architecture", level: "Intermediate" },
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "The Developers Arena",
    role: "SDE Intern",
    location: "Bengaluru, Karnataka, India",
    duration: "Nov 2025 – May 2026",
    certificate:
      "https://drive.google.com/file/d/1a3kJci5vF8crSeUrbq5oDgO89fSRuQH-/view?usp=sharing",
    achievements: [
      "Architected 6+ production-grade REST APIs with Flask and FastAPI using modular MVC design patterns, enabling seamless third-party integrations and reducing average response latency by 30% across live client deployments.",
      "Built end-to-end AI backend pipelines integrating OpenAI/Gemini LLMs, LangChain agents, and RAG with Pinecone/ChromaDB vector stores, delivering intelligent document Q&A, semantic search, and automated reasoning features.",
      "Engineered optimized MySQL schemas with normalized table design, composite indexing, and stored procedures, reducing query execution time by 40% while maintaining reliable performance under concurrent workloads.",
      "Scaled API throughput by integrating Apache Kafka, Redis caching, Celery task queues, and connection pooling to improve real-time data processing and backend performance.",
      "Secured backend services using JWT/OAuth2 authentication, RBAC, AES-256 encryption, and parameterized queries, ensuring robust API security and reliable access control.",
      "Automated ML data preprocessing pipelines with Pandas and NumPy across 50K+ records, streamlining feature engineering and reducing model training preparation time by 35%.",
      "Refactored monolithic backend into Dockerized microservices with Kafka-based messaging and RESTful APIs, enabling scalable deployments and reducing downtime.",
      "Collaborated in Agile/Scrum teams using Git, GitHub, and Jira, consistently delivering high-quality software across backend, AI/ML, QA, and DevOps workflows.",
    ],
  },
  {
    company: "Infotact Solutions",
    role: "SDE Intern",
    location: "Bengaluru, Karnataka, India",
    duration: "3 Month Internship",
    certificate:
      "https://drive.google.com/file/d/1PHuKZhlqX4MTh6z0QzVNFmCJrThKpr8m/view?usp=sharing",
    achievements: [
      "Architected a multi-agent research and content generation pipeline in Python using LangChain and LangGraph, orchestrating specialized AI agents for web research, summarization, and content generation within a stateful Agentic AI workflow.",
      "Built autonomous multi-step reasoning workflows using LangGraph state machines with tool calling, agent-to-agent task delegation, and memory management for intelligent AI execution.",
      "Integrated OpenAI and Claude LLM APIs with a FastAPI backend, developing asynchronous RESTful APIs to trigger, monitor, and retrieve outputs from Agentic AI workflows.",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines using Pinecone and ChromaDB vector databases with Python embedding pipelines, improving response accuracy and grounding LLM outputs in relevant source data.",
      "Optimized AI agent execution using Python asyncio, response caching, and parallel agent orchestration to enhance workflow efficiency and reduce end-to-end processing latency",
    ],
  },
  {
    company: "Cognifyz Technologies",
    role: "Python Developer Intern",
    location: "Remote",
    duration: "1 Month Internship",
    certificate:
      "https://drive.google.com/file/d/1bbRs9bmLf68-4EirkVB64PlNh5xc6e_N/view?usp=sharing",
    achievements: [
      "Successfully completed 5 assigned internship tasks provided by the company, focused on Python programming.",
      "Implemented solutions for data handling, automation, and problem-solving using Python.",
      "Applied OOP concepts to build reusable and modular scripts.",
      "Performed debugging, testing, and documentation to ensure program accuracy.",
    ],
  },
  {
    company: "SkillCraft Technology",
    role: "Machine Learning Intern",
    location: "Remote",
    duration: "1 Month Internship",
    certificate:
      "https://drive.google.com/file/d/1IvrOfzbXjWpW2ncbxQjXSS-FYnotCmzu/view?usp=sharing",
    achievements: [
      "Completed 5 machine learning tasks assigned by the company covering supervised (Regression, Classification) and unsupervised (Clustering) models.",
      "Built robust preprocessing pipelines with NumPy, Pandas for cleaning and transforming datasets.",
      "Evaluated model performance using accuracy, precision, recall, and F1-score.",
      "Improved predictive accuracy through feature engineering and hyperparameter tuning.",
      "Achieved a Certificate of Completion and a Recommendation Letter for internship performance.",
    ],
  },
  {
    company: "Magic Bus Foundation",
    role: "Trainee (IBM-Supported College Program)",
    location: "Aditya Degree College, B. Kotha Kota",
    duration: "Aug 2025",
    certificate:
      "https://drive.google.com/file/d/1olsA-44AC9sah75pkXFbP-mjui2FXDAI/view?usp=sharing",
    achievements: [
      "Completed an intensive short-term training program conducted at college in collaboration with IBM.",
      "Gained foundational knowledge in AI concepts, communication, and problem-solving skills.",
      "Enhanced teamwork and analytical thinking through hands-on workshops.",
      "Earned a Certificate of Completion for successfully completing the program.",
    ],
  },
];

export type ProjectFlowNode = {
  label: string;
  detail?: string;
  kind?: "start" | "agent" | "tool" | "human" | "data" | "end";
};

export type ProjectLayer = {
  title: string;
  detail: string;
};

export type Project = {
  title: string;
  tagline: string;
  problem: string;
  architecture: string | string[];
  layers: ProjectLayer[];
  accent: "violet" | "cyan" | "emerald" | "amber" | "rose";
  motionStyle?: "pulse" | "wave" | "orbit" | "trace" | "cascade";
  layout?: "linear" | "zigzag" | "ring" | "spiral" | "constellation";
  highlights: string[];
  stack: string[];
  flow: ProjectFlowNode[];
  github?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "N45 Agentic Builder",
    tagline:
      "Enterprise AI Agent Development Platform — build, orchestrate, deploy, monitor and scale AI agents without writing workflow code.",
    problem:
      "Enterprises need production-grade AI automation but hand-coding orchestration, deployments, monitoring and governance for every workflow is slow, brittle and impossible to scale across teams.",
    accent: "violet",
    architecture:
      "A multi-tenant, layered platform: a Next.js visual studio talks to a FastAPI control plane over REST and WebSockets; the control plane persists workflow graphs in MySQL, queues executions through Redis + Celery, and hands each run to a LangGraph runtime that resolves nodes against 11 LLM providers, vector stores and enterprise integrations while streaming logs and metrics back to the studio.",
    layers: [
      {
        title: "Studio (client)",
        detail:
          "Next.js 15 + React 19 canvas built on React Flow with Zustand state, 18 node types, validation, autosave and versioning.",
      },
      {
        title: "Control plane (API)",
        detail:
          "FastAPI + SQLAlchemy 2.0 services for orgs, workspaces, RBAC, agent registry, deployments and audit logging behind JWT/OAuth2.",
      },
      {
        title: "Execution plane",
        detail:
          "LangGraph orchestrator running on Celery workers with Redis queues, retries, timeouts and per-agent memory and tool binding.",
      },
      {
        title: "Knowledge & data",
        detail:
          "Ingestion pipeline (PDF/DOCX/CSV/image/URL + OCR) with chunking and embeddings into Qdrant, Pinecone, ChromaDB, Weaviate or Milvus.",
      },
      {
        title: "Delivery & observability",
        detail:
          "Dockerized deployments with staging, canary and blue-green rollout, one-click rollback, and WebSocket live logs, health and cost analytics.",
      },
    ],
    highlights: [
      "Visual drag-and-drop workflow canvas (React Flow) with 18 node types — LLM, condition, memory, knowledge, tool, API, database, human approval, router, loop, delay, webhook and notification.",
      "Multi-agent orchestration with an agent registry, sub-agent management, per-agent prompts, models, memory, tools, retry policies and timeouts.",
      "Multi-tenant architecture with organizations, workspaces, folders, RBAC (Admin / Developer / Operator / Viewer) and full organization + workspace isolation.",
      "11 AI providers supported — OpenAI, Anthropic, Gemini, Azure OpenAI, AWS Bedrock, Groq, Ollama, HuggingFace, Mistral, OpenRouter and DeepSeek.",
      "Knowledge base with PDF/DOCX/CSV/Excel/image/URL ingestion, OCR, chunking, embeddings and semantic search over Qdrant, Pinecone, ChromaDB, Weaviate or Milvus.",
      "Workflow validation, autosave, versioning and deployment pipelines with staging, production, canary, blue-green and one-click rollback.",
      "Real-time monitoring over WebSockets — live execution logs, agent health, CPU/memory, queues and errors, plus analytics for requests, token usage, cost, latency and success rate.",
      "Security hardened: JWT + refresh tokens, secure cookies, OAuth2 (Google, Microsoft, GitHub), bcrypt hashing, rate limiting, CSRF/CORS, SQLi/XSS protection and audit logging.",
      "Enterprise integrations across Google Workspace, Microsoft 365, GitHub/GitLab, Jira, Slack, Discord, Notion, databases, email, SMS, webhooks, REST and GraphQL.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "React Flow",
      "Zustand",
      "FastAPI",
      "LangGraph",
      "SQLAlchemy 2.0",
      "MySQL",
      "Redis",
      "Python",
      "RAG",
      "Vector DB",
      "Celery",
      "Qdrant",
      "WebSockets",
      "Docker",
    ],
    flow: [
      { label: "Auth + RBAC", detail: "JWT / OAuth2", kind: "start" },
      { label: "Workspace", detail: "multi-tenant", kind: "data" },
      { label: "Agent Registry", detail: "agents + sub-agents", kind: "agent" },
      { label: "Visual Canvas", detail: "React Flow nodes", kind: "tool" },
      { label: "Validate + Version", detail: "autosave", kind: "tool" },
      { label: "Deploy", detail: "canary / blue-green", kind: "agent" },
      { label: "Orchestrator", detail: "LangGraph + Celery", kind: "agent" },
      { label: "Monitor", detail: "live logs + metrics", kind: "data" },
      { label: "Analytics", detail: "cost / latency", kind: "end" },
    ],
     github:
      "https://github.com/vishnu915/N45-Agentic-Builder",
    featured: true,},
  {
    title: "Agentic HR — AI Recruitment Pipeline",
    tagline:
      "8-node multi-agent LangGraph pipeline automating the full hire-to-onboard lifecycle with human-in-the-loop gates.",
    problem:
      "Manual recruitment coordination across shortlisting, screening, scheduling and onboarding is repetitive, slow and error-prone for HR teams.",
    accent: "cyan",
    layout: "zigzag",
    motionStyle: "wave",
    architecture: [
      "Stack: Python, LangGraph, FastAPI, Groq LLM, Twilio, Google Calendar API, Gmail API, MongoDB.",
      "8-node multi-agent pipeline on LangGraph StateGraph automating the full recruitment lifecycle from resume screening to onboarding with 3 human-in-the-loop approval gates.",
      "Resume Shortlister Agent (Groq Llama 3.3 70B) parses PDF/DOCX resumes and ranks the top 15 candidates against job descriptions with match scores and rationale.",
      "Pre-Screening Call Agent (Twilio voice + Edge TTS) autonomously runs live phone conversations, extracting 5 structured data points per candidate — CTC, availability, job-change intent.",
      "Interview Scheduler Agent (Google Calendar + Gmail APIs) scans availability windows, books the first free 1-hour slot and generates Google Meet links with zero manual coordination.",
      "Onboarding Agent auto-sends personalized welcome emails to selected candidates, completing the end-to-end hire-to-onboard workflow.",
      "Candidate state persists in MongoDB and flows node-to-node; approval gates pause the graph until an HR decision resumes it.",
    ],
    layers: [
      {
        title: "Intake",
        detail:
          "JD + bulk PDF/DOCX resume parsing normalised into structured candidate records.",
      },
      {
        title: "Reasoning agents",
        detail:
          "Groq Llama 3.3 70B shortlisting with match scores and rationale, plus screening-call transcript extraction into 5 structured fields.",
      },
      {
        title: "Human-in-the-loop",
        detail:
          "Three interrupt gates (shortlist, screening, selection) checkpointed in graph state so runs resume exactly where they paused.",
      },
      {
        title: "Action agents",
        detail:
          "Twilio + Edge TTS voice calls, Google Calendar slot booking with Meet links, Gmail onboarding mail.",
      },
      {
        title: "State store",
        detail:
          "MongoDB collections for candidates, call outcomes, schedules and audit trail of every agent transition.",
      },
    ],
    highlights: [
      "Built an 8-node multi-agent pipeline using LangGraph StateGraph, automating the full recruitment lifecycle from resume screening to onboarding with 3 human-in-the-loop approval gates.",
      "Resume Shortlister Agent using Groq LLM (Llama 3.3 70B) parses PDF/DOCX resumes and ranks the top 15 candidates against job descriptions with match scores and rationale.",
      "Pre-Screening Call Agent using Twilio voice and Edge TTS autonomously conducts live phone conversations, extracting 5 structured data points per candidate (CTC, availability, job-change intent).",
      "Interview Scheduler Agent integrates Google Calendar and Gmail APIs — scanning availability, booking the first free 1-hour slot and generating Google Meet links with zero manual coordination.",
      "Onboarding Agent auto-sends personalized welcome emails to selected candidates, completing the end-to-end hire-to-onboard workflow.",
      "Scoped production upgrades: migrating the voice agent to a low-latency streaming platform, and a Background Verification (BGV) Agent for post-onboarding checks.",
    ],
    stack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Groq LLM",
      "Twilio",
      "Google Calendar API",
      "Gmail API",
      "MongoDB",
    ],
    flow: [
      { label: "JD + Resumes", detail: "PDF / DOCX", kind: "start" },
      { label: "Shortlister", detail: "Llama 3.3 70B", kind: "agent" },
      { label: "HR Approval", detail: "top 15", kind: "human" },
      { label: "Screening Call", detail: "Twilio + Edge TTS", kind: "tool" },
      { label: "Data Extract", detail: "5 datapoints", kind: "data" },
      { label: "HR Approval", detail: "gate 2", kind: "human" },
      { label: "Scheduler", detail: "Calendar + Meet", kind: "agent" },
      { label: "Onboarding", detail: "welcome email", kind: "end" },
    ],
    github:
      "https://github.com/vishnu915/Multi-Agent-AI-HR-Recruitment-Workflow-Agent",
    featured: true,
  },
  {
    title: "AI Agent for Automated Workflows",
    tagline:
      "One natural-language prompt to a full autonomous browser execution plan across 10+ websites.",
    problem:
      "Multi-step web workflows (data extraction, form-filling, research) require constant manual navigation and re-prompting, with no way to execute a full task from a single instruction.",
    accent: "emerald",
    layout: "ring",
    motionStyle: "orbit",
    architecture: [
      "Stack: Python, LangChain, LangGraph, Mistral AI, IBM WatsonX, Browser-Use, Gradio, MCP.",
      "Autonomous agent converts a single natural-language prompt into a complete multi-step execution plan using LangGraph state orchestration with 2 LLM backends (Mistral AI, IBM WatsonX) for task decomposition and dynamic decision-making.",
      "Autonomous browser automation via Browser-Use — the agent independently navigates and completes tasks across 10+ distinct websites, extracting data and filling forms without hardcoded scripts or manual selectors.",
      "Improved LLM output reliability with JSON repair for malformed model responses and MainContentExtractor for clean parsing across diverse, unstructured web pages.",
      "Interactive Gradio UI for prompt submission, real-time execution tracking and step-by-step monitoring — full task completion in 30 seconds – 2 minutes, hands-off after the initial prompt.",
      "Upgrade paths scoped for production: persistent memory across sessions and parallel multi-agent execution for concurrent workflow requests.",
    ],
    layers: [
      {
        title: "Planner",
        detail:
          "LangGraph state machine that decomposes the prompt into steps, success criteria and fallbacks.",
      },
      {
        title: "Model router",
        detail:
          "Per-step selection between Mistral AI and IBM WatsonX based on task type and cost.",
      },
      {
        title: "Actuator",
        detail:
          "Browser-Use automation across 10+ sites — navigation, form fill and extraction with no hardcoded selectors.",
      },
      {
        title: "Parsing & repair",
        detail:
          "MainContentExtractor for clean page text and JSON repair for malformed LLM output before state updates.",
      },
      {
        title: "Interface",
        detail:
          "Gradio UI streaming step-by-step traces; typical run completes in 30s–2min hands-off.",
      },
    ],
    highlights: [
      "Architected an autonomous agent converting a single natural language prompt into a complete multi-step execution plan using LangGraph state orchestration with 2 LLM backends (Mistral AI, IBM WatsonX).",
      "Autonomous browser automation with Browser-Use — navigating and completing tasks across 10+ distinct websites, extracting data and filling forms without hardcoded scripts or selectors.",
      "Improved LLM output reliability with JSON repair for malformed responses and MainContentExtractor for clean parsing of unstructured pages.",
      "Interactive Gradio UI for prompt submission, real-time execution tracking and step-by-step monitoring — 30 seconds to 2 minutes per workflow, fully hands-off after the prompt.",
      "Identified production upgrade paths: persistent cross-session memory and parallel multi-agent execution for concurrent workflow requests.",
    ],
    stack: [
      "Python",
      "LangChain",
      "LangGraph",
      "Mistral AI",
      "IBM WatsonX",
      "Browser-Use",
      "Gradio",
      "MCP",
    ],
    flow: [
      { label: "Prompt", detail: "natural language", kind: "start" },
      { label: "Planner", detail: "task decomposition", kind: "agent" },
      { label: "Router", detail: "Mistral / WatsonX", kind: "agent" },
      { label: "Browser Agent", detail: "Browser-Use", kind: "tool" },
      { label: "Extractor", detail: "JSON repair", kind: "data" },
      { label: "Live Trace", detail: "Gradio UI", kind: "end" },
    ],
    github: "https://github.com/vishnu915/AI-Agent",
  },
  {
    title: "Online Fee Management System",
    tagline:
      "Full-stack AI-powered fee platform digitizing collection, receipts and analytics for a college.",
    problem:
      "Manual fee collection at Aditya Degree College caused delays in fee tracking, reporting and student query handling.",
    accent: "amber",
    layout: "spiral",
    motionStyle: "trace",
    architecture: [
      "Stack: HTML, CSS, JavaScript, Python, Flask, MySQL, AI (LangChain, LLMs, RAG, Vector DB).",
      "System design: full-stack AI-powered platform using Flask REST APIs, MySQL and a responsive web UI to digitize and automate fee operations.",
      "Secure admin authentication, automated fee tracking and digital receipt generation.",
      "LLMs + RAG integrated for intelligent fee queries, summaries and administrative assistance.",
      "Impact: reduced manual workload and improved fee management efficiency with a real-time analytics dashboard.",
      "Planned improvements: a multi-agent automation layer using n8n to orchestrate fee reminders, receipt workflows and administrative task handling.",
    ],
    layers: [
      {
        title: "Presentation",
        detail:
          "Responsive HTML/CSS/JS dashboard with fee entry, receipt download and real-time analytics widgets.",
      },
      {
        title: "API tier",
        detail:
          "Flask REST APIs with secure admin authentication, session handling and role-scoped routes.",
      },
      {
        title: "Data tier",
        detail:
          "MySQL schema for students, fee heads, transactions and receipts with indexed reporting queries.",
      },
      {
        title: "AI assistant",
        detail:
          "LangChain RAG over fee records and policy docs for natural-language queries and summaries.",
      },
      {
        title: "Planned automation",
        detail:
          "n8n multi-agent layer for reminder scheduling, receipt dispatch and routine admin tasks.",
      },
    ],
    highlights: [
      "Built a full-stack AI-powered platform using Flask REST APIs, MySQL and a responsive web UI to digitize and automate fee operations.",
      "Implemented secure admin authentication, automated fee tracking and digital receipt generation.",
      "Integrated LLMs + RAG for intelligent fee queries, summaries and administrative assistance.",
      "Reduced manual workload and improved efficiency with a real-time analytics dashboard.",
      "Planned: a multi-agent automation layer with n8n to orchestrate fee reminders, receipt workflows and admin tasks.",
    ],
    stack: [
      "Python",
      "Flask",
      "MySQL",
      "LangChain",
      "RAG",
      "Vector DB",
      "JavaScript",
    ],
    flow: [
      { label: "Admin Login", detail: "secure auth", kind: "start" },
      { label: "Flask REST API", kind: "tool" },
      { label: "MySQL", detail: "fees + students", kind: "data" },
      { label: "RAG Assistant", detail: "LLM + Vector DB", kind: "agent" },
      { label: "Receipts", detail: "auto-generated", kind: "tool" },
      { label: "Analytics", detail: "real-time", kind: "end" },
    ],
    github: "https://github.com/vishnu915/online-fee-management-system",
  },
  {
    title: "AI-Based Vehicle Speed Detection",
    tagline:
      "Hardware-free traffic speed estimation from video with ~95% accuracy and a live dashboard.",
    problem:
      "Traditional traffic monitoring relies on expensive hardware (radar guns, sensors) and manual supervision, making it costly and hard to scale.",
    accent: "rose",
    layout: "constellation",
    motionStyle: "cascade",
    architecture: [
      "Stack: HTML, CSS, JavaScript, Python, Flask, OpenCV, Deep Learning, TensorFlow/PyTorch, MySQL.",
      "Full-stack AI system that estimates vehicle speed from video, eliminating specialized hardware.",
      "Real-time detection, tracking and optical flow for accurate speed estimation.",
      "~95% accuracy with a low average error of ±7 km/h across diverse traffic conditions.",
      "Real-time speed visualization dashboard for monitoring vehicle speeds dynamically.",
      "Flask backend with secure user authentication (login/register) and REST APIs.",
      "MySQL database storing user data and vehicle speed records.",
      "Responsive frontend with video upload and interactive UI in HTML, CSS and JavaScript.",
      "Engineered for scalability, anomaly detection and vehicle re-identification.",
    ],
    layers: [
      {
        title: "Ingest",
        detail:
          "Video upload and frame extraction with OpenCV, plus per-scene calibration of pixel-to-metre distance.",
      },
      {
        title: "Detection",
        detail:
          "Deep-learning vehicle detection (TensorFlow / PyTorch) with confidence filtering per frame.",
      },
      {
        title: "Tracking",
        detail:
          "Multi-object tracking with persistent IDs enabling re-identification across occlusions.",
      },
      {
        title: "Speed estimation",
        detail:
          "Optical-flow displacement over time, ~95% accuracy with ±7 km/h average error.",
      },
      {
        title: "Backend & UI",
        detail:
          "Flask REST APIs with auth, MySQL storage of users and speed records, and a live monitoring dashboard with anomaly alerts.",
      },
    ],
    highlights: [
      "Built a full-stack AI system estimating vehicle speed from video, eliminating specialized hardware.",
      "Implemented real-time detection, tracking and optical flow for accurate speed estimation.",
      "Achieved ~95% accuracy with a low average error of ±7 km/h across diverse traffic conditions.",
      "Developed a real-time speed visualization dashboard for dynamic monitoring.",
      "Flask backend with secure authentication and REST APIs, plus MySQL storage for users and speed records.",
      "Engineered for scalability, anomaly detection and vehicle re-identification.",
    ],
    stack: [
      "Python",
      "Flask",
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "MySQL",
      "JavaScript",
    ],
    flow: [
      { label: "Video Upload", detail: "traffic footage", kind: "start" },
      { label: "Detection", detail: "deep learning", kind: "agent" },
      { label: "Tracking", detail: "multi-object", kind: "agent" },
      { label: "Optical Flow", detail: "speed estimate", kind: "tool" },
      { label: "MySQL", detail: "records", kind: "data" },
      { label: "Dashboard", detail: "live alerts", kind: "end" },
    ],
    github: "https://github.com/vishnu915/Vehicle-Speed-Detection",
  },
];


export const ACHIEVEMENTS = [
  { value: 18, suffix: "+", label: "Certificates" },
  { value: 6, suffix: "", label: "Hackathons" },
  { value: 5, suffix: "", label: "Internships" },
  { value: 900, suffix: "+", label: "GitHub Contributions" },
  { value: 10, suffix: "+", label: "Projects" },
];

export const SERVICES = [
  {
    icon: Bot,
    title: "AI Development",
    text: "Custom agents, evaluation harnesses and production LLM systems that actually ship.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    text: "Typed, observable FastAPI and Node services built for scale and low latency.",
  },
  {
    icon: Layers,
    title: "LLM Applications",
    text: "RAG, tool calling and memory architectures over your proprietary knowledge base.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Workflow automation that removes hours of manual work every single week.",
  },
  {
    icon: Braces,
    title: "Full Stack Apps",
    text: "React front ends with polished motion, paired with rock-solid backends.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Vishnu turned a vague agent idea into a production system in three weeks. The engineering judgment is way beyond his years.",
    name: "Ananya Rao",
    role: "Head of AI, Nexus AI Labs",
  },
  {
    quote:
      "Rare combination of backend rigor and design taste. Our API latency dropped and the dashboard finally looked premium.",
    name: "Marcus Feld",
    role: "CTO, Quantum Byte",
  },
  {
    quote:
      "He shipped the RAG pipeline, the evals and the UI. One person, full stack, zero drama.",
    name: "Priya Nair",
    role: "Product Lead, Cloudwave",
  },
  {
    quote:
      "The most self-directed intern we have hired. He left behind documentation better than our seniors write.",
    name: "Daniel Ortiz",
    role: "Engineering Manager, Vision Tech",
  },
];

export const MARQUEE_ITEMS = [
  "Python",
  "React",
  "FastAPI",
  "LangChain",
  "Docker",
  "AWS",
  "GitHub",
  "OpenAI",
  "MongoDB",
  "MySQL",
];
