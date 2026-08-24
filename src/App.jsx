import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);

  // Helper function to navigate to project details safely
  const handleViewProject = (slug) => {
    setSelectedProjectSlug(slug);
    setActiveTab("project-detail");
  };

  // Component rendering router mapping
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home onViewProject={handleViewProject} onNavigate={setActiveTab} />;
      case "projects":
        return <Projects onViewProject={handleViewProject} />;
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

  return (
    <div className="app-layout">
      {/* Top Navbar syncing the global active tab layout */}
      <Nav currentTab={activeTab} onChangeTab={(tabId) => {
        setActiveTab(tabId);
        setSelectedProjectSlug(null); // Reset detail flags on explicit nav switch
      }} />

      {/* Instant view display frame container */}
      <main className="main-content">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}
