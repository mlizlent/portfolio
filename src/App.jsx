import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import projectsData from "./data/projects.js";

const SITE_TITLE = "Meroline Lizlent — Full-Stack & ML Engineer";
const SITE_DESC = "Full-stack software developer specializing in ML/AI engineering, frontend, backend, UI/UX design, and Docker.";
const SITE_URL = "https://mlizlent.com/";

const PAGE_META = {
  home: {
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  projects: {
    title: "Projects — Meroline Lizlent",
    description: "Selected projects built end to end across full-stack, ML/AI, and UI/UX.",
  },
  about: {
    title: "About — Meroline Lizlent",
    description: "Software engineer based in Kenya, focused on ML/AI and full-stack development.",
  },
  contact: {
    title: "Contact — Meroline Lizlent",
    description: "Get in touch for freelance projects, collaborations, and full-time opportunities.",
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
  const selectedProject = selectedProjectSlug
    ? projectsData.find((p) => p.slug === selectedProjectSlug)
    : null;

  const handleViewProject = (slug) => {
    setSelectedProjectSlug(slug);
    setActiveTab("project-detail");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home onViewProject={handleViewProject} onNavigate={setActiveTab} />;
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "project-detail":
        return (
          <ProjectDetail
            slug={selectedProjectSlug}
            onBack={() => setActiveTab("projects")}
          />
        );
      default:
        return <Home onViewProject={handleViewProject} onNavigate={setActiveTab} />;
    }
  };

  const meta =
    activeTab === "project-detail" && selectedProject
      ? {
          title: `${selectedProject.name} — Meroline Lizlent`,
          description: selectedProject.tagline,
        }
      : PAGE_META[activeTab] || PAGE_META.home;

  return (
    <div className="app-layout">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <Nav currentTab={activeTab} onChangeTab={(tabId) => {
        setActiveTab(tabId);
        setSelectedProjectSlug(null);
      }} />

      <main className="main-content">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}
