const projects = [
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
      "The project is live and deployed, and is the flagship piece of the portfolio — a tool built for developers, by a developer, to make repository health legible at a glance.",
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
      "A shared set of design tokens — color, type, spacing — paired with a matching React component library, so visual decisions are made once and reused everywhere.",
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
    slug: "data-platform",
    name: "Data Platform",
    tagline:
      "A full-stack data management platform for storing, querying, and visualizing structured datasets.",
    tags: ["TypeScript", "PostgreSQL", "Prisma"],
    live: null,
    body: [
      "A platform for storing structured datasets, querying them efficiently, and visualizing the results without leaving the app.",
      "Prisma sits between the application and PostgreSQL, keeping the schema and queries type-safe end to end in TypeScript.",
      "Built with the kind of day-to-day data work in mind that most tools make more painful than it needs to be — importing, querying, and charting in one place.",
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
      "Each tool is scoped to do one job well — the same philosophy applied to their design as to shipping product code.",
      "Written in Python and Bash, and wired into CI so the automation runs the same way for every contributor, not just locally.",
    ],
  },
];

export default projects;
