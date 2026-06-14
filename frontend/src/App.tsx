import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ArchitecturePage from "./pages/Architecture/ArchitecturePage";
import BlogPage from "./pages/Blog/BlogPage";
import CertificatesPage from "./pages/Certificates/CertificatesPage";
import ContactPage from "./pages/Contact/ContactPage";
import EngineeringPage from "./pages/Engineering/EngineeringPage";
import ProjektsPage from "./pages/Projekts/ProjektsPage";
import TechStackPage from "./pages/TechStack/TechStackPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/projects" element={<ProjektsPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
