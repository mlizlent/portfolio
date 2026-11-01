const projects = [
  {
    slug: "efpitch",
    name: "EF Pitch",
    tagline:
      "UI/UX design for a platform where football tournaments are created, managed, and shared.",
    tags: ["UI/UX", "Figma", "React"],
    live: "https://efpitch.com",
    body: [
      "I designed the end-to-end user experience for a platform that lets organizers create, manage, and share football tournaments from setup to matchday.",
      "The core flow starts with tournament creation: setting format, teams, venues, and scheduling rules. From there, organizers manage brackets, track results, and publish updates for players and fans to follow in real time.",
      "The interface keeps complex tournament data readable at every level, from the admin dashboard to the public-facing tournament page, using clear hierarchy, consistent spacing, and an interaction model that reduces cognitive load.",
      "I treated the design as a system rather than a collection of screens: tokens, components, and responsive behavior are all consistent so the experience holds across desktop, tablet, and mobile.",
    ],
  },
  {
    slug: "selah",
    name: "Selah",
    tagline:
      "A full-stack web application integrating LLM-powered features with Express.js, PostgreSQL, and React/Vite.",
    tags: ["Express.js", "PostgreSQL", "React", "Vite", "LLM"],
    live: "https://selah-5npb.onrender.com",
    body: [
      "A full-stack application built with Express.js and PostgreSQL on the backend, and React with Vite on the frontend, delivering a responsive and performant user experience.",
      "LLM integration is woven into the core experience, the app connects to language models to generate, summarize, or assist with content in real time, rather than treating AI as an afterthought.",
      "The backend handles authentication, data persistence, and LLM API orchestration, while the frontend manages state, streaming responses, and a polished interface that keeps interactions snappy.",
      "Deployed on Render with a live URL, the project demonstrates end-to-end capability across the full stack and the practical application of LLMs in a production web app.",
    ],
  },
  {
    slug: "regenfeed",
    name: "RegenFeed",
    tagline:
      "A full-stack web application built with Go/Buffalo, Svelte, and PostgreSQL, from backend to UI/UX design.",
    tags: ["Go", "Buffalo", "Svelte", "PostgreSQL", "UI/UX", "Lightning Network"],
    live: "https://regenfeed.onrender.com",
    body: [
      "I owned the full stack end to end, backend services with Go and the Buffalo framework, a reactive frontend with Svelte, and a PostgreSQL data layer tying everything together.",
      "The backend handles routing, business logic, and database interactions, while the frontend delivers a fast, component-driven interface with Svelte's reactivity model.",
      "Bitcoin and Lightning Network payments are integrated into the platform, enabling fast, low-fee transactions directly within the application flow.",
      "I also designed the UI/UX from scratch, mapping user flows, wireframing screens, and building a visual system that keeps the experience intuitive across desktop and mobile.",
      "Deployed live on Render, the project reflects a complete product build: backend, frontend, database, payment integration, and design, all delivered by me.",
    ],
  },
  {
    slug: "repan",
    name: "RePAN",
    tagline:
      "A repository analyzer that inspects codebases, surfaces insights, and helps developers understand project structure and health.",
    tags: ["Full-Stack", "AI/ML", "Docker"],
    live: "https://repan.onrender.com",
    body: [
      "RePAN takes a GitHub repository URL and breaks it down into code, docs, issues, commits, and pull requests, then produces a quality score for the repo as a whole.",
      "Repos can be tracked over time so the quality trend is visible across analyses, and results can be compared against other repos on a shared leaderboard. Branch-level analysis, JSON/PDF export, and report sharing are all built in.",
      "The project is live and deployed, and is the flagship piece of the portfolio, a tool built for developers, by a developer, to make repository health legible at a glance.",
    ],
  },
  {
    slug: "ml-pipeline",
    name: "ML Inference Pipeline",
    tagline:
      "An end-to-end machine learning pipeline for data preprocessing, model inference, and result visualization.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    live: null,
    body: [
      "A pipeline that takes raw input data through preprocessing, feeds it to a trained model for inference, and returns results through a FastAPI service layer.",
      "Built to keep the preprocessing and inference stages decoupled, so the model can be swapped or retrained without reworking the surrounding service.",
      "Results are exposed in a form suited to visualization, closing the loop between raw data and something a person can actually read and act on.",
    ],
  },
  {
    slug: "design-system",
    name: "UI/UX Design System",
    tagline:
      "A cohesive component library and design tokens used to ship consistent, accessible interfaces across products.",
    tags: ["Figma", "React", "Tailwind"],
    live: null,
    body: [
      "A shared set of design tokens, color, type, spacing, paired with a matching React component library, so visual decisions are made once and reused everywhere.",
      "Designed first in Figma, then implemented as components so the handoff between design and engineering stays tight and nothing drifts out of sync.",
      "Built with accessibility as a baseline requirement rather than an afterthought: keyboard focus, contrast, and semantic markup are part of every component.",
    ],
  },
  {
    slug: "dockerized-api",
    name: "Dockerized Backend API",
    tagline:
      "A containerized REST API with automated deployments, scalable architecture, and comprehensive documentation.",
    tags: ["Node.js", "Docker", "PostgreSQL"],
    live: null,
    body: [
      "A REST API built on Node.js and backed by PostgreSQL, packaged as a Docker image so it runs identically in development, staging, and production.",
      "Deployments are automated end to end, and the service is structured to scale horizontally as load grows.",
      "Documentation is treated as part of the deliverable, not an afterthought — every endpoint is documented so the API is usable by someone who didn't build it.",
    ],
  },
  {
    slug: "open-source-tools",
    name: "Open Source DevTools",
    tagline:
      "Command-line utilities and GitHub Actions that automate repetitive development workflows.",
    tags: ["Python", "Bash", "GitHub Actions"],
    live: null,
    body: [
      "A collection of small, focused CLI utilities and GitHub Actions that remove repetitive manual steps from everyday development work.",
      "Each tool is scoped to do one job well, the same philosophy applied to their design as to shipping product code.",
      "Written in Python and Bash, and wired into CI so the automation runs the same way for every contributor, not just locally.",
    ],
  },
  {
    slug: "zone01",
    name: "Zone01 Kisumu",
    tagline:
      "SEO and QA work on the Zone01 Kisumu website, improving search visibility and quality assurance.",
    tags: ["SEO", "QA", "Web"],
    live: "https://www.zone01kisumu.ke/",
    body: [
      "Performed SEO optimization on the Zone01 Kisumu website to improve search engine visibility and rankings.",
      "Led quality assurance efforts, testing the site across devices and browsers to catch bugs and ensure a consistent user experience.",
      "Worked on content structure, metadata, and performance improvements so the site ranks better and loads faster.",
      "Collaborated with the team to ship a polished, production-ready website for the Kisumu campus.",
    ],
  },
  {
    slug: "chiro",
    name: "Chiro",
    tagline:
      "An ecommerce platform for online shopping across Western Kenya.",
    tags: ["Ecommerce", "Next.js", "PostgreSQL"],
    live: null,
    body: [
      "An online shopping app built for Western Kenya, connecting buyers with local sellers and vendors.",
      "End-to-end ecommerce experience: product browsing, cart, checkout, and order tracking.",
      "Built with Next.js on the frontend and PostgreSQL on the backend, supporting payments and inventory management.",
      "Designed to serve the Western Kenya region with a localized, accessible shopping experience.",
    ],
  },
  {
    slug: "civicvote",
    name: "CivicVote",
    tagline:
      "A voters companion app — UI/UX design to help citizens navigate elections and make informed choices.",
    tags: ["UI/UX", "Figma", "Design"],
    live: null,
    body: [
      "Designed the UI/UX for CivicVote, a voters companion app that helps citizens navigate elections and make informed choices.",
      "Mapped user flows, wireframed screens, and built a visual system focused on clarity and accessibility.",
      "Created an intuitive interface for browsing candidates, understanding ballots, and accessing voting information.",
      "Delivered high-fidelity designs and a component library ready for development handoff.",
    ],
  },
  {
    slug: "micro-influencer",
    name: "Micro Influencer",
    tagline:
      "A platform connecting business brands with influencers for business campaigns.",
    tags: ["Next.js", "Frontend", "Influencer Marketing"],
    live: null,
    body: [
      "Built the frontend for a micro-influencer platform where business brands connect with influencers to run campaigns.",
      "Designed and implemented brand and influencer onboarding flows, campaign discovery, and collaboration dashboards.",
      "Built with Next.js for a fast, responsive, and SEO-friendly user experience.",
      "Enabled brands to find, vet, and partner with influencers while giving influencers a clean way to manage campaigns and earnings.",
    ],
  },
  {
    slug: "guidely",
    name: "Guidely",
    tagline:
      "A RAG (Retrieval-Augmented Generation) system for intelligent document search and Q&A.",
    tags: ["Python", "React", "RAG", "AI/ML"],
    live: "https://github.com/mlizlent/guidely",
    body: [
      "Built Guidely, a RAG system that retrieves relevant context from documents and generates accurate answers using an LLM.",
      "Python backend handles document ingestion, embedding generation, vector storage, and retrieval pipelines.",
      "React frontend provides a clean interface for uploading documents, querying the knowledge base, and viewing sourced answers.",
      "Designed for accurate, citation-backed responses so users can trace answers back to the original documents.",
    ],
  },
];

export default projects;
