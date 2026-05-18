import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SidebarMenu from './components/chrome/SidebarMenu';
import { useMenuDismiss } from './hooks/useMenuDismiss';
import { useSiteShell } from './hooks/queries/useSiteShell';
import AboutPage from './pages/AboutPage';
import ClippingPage from './pages/ClippingPage';
import ContactModalPage from './pages/ContactModalPage';
import CvPage from './pages/CvPage';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';
import WorkDetailPage from './pages/WorkDetailPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { data: siteShell } = useSiteShell();
  const backgroundLocation = location.state?.backgroundLocation;
  const contentLocation =
    backgroundLocation ||
    (location.pathname === '/contact' ? { ...location, pathname: '/' } : location);

  useMenuDismiss({
    isOpen: menuOpen,
    onDismiss: () => setMenuOpen(false),
  });

  if (!siteShell) {
    return null;
  }

  return (
    <div className="page-shell">
      <SidebarMenu
        brandLabel={siteShell.portfolioContent.brand}
        contactLabel={siteShell.portfolioContent.contactLabel}
        contactHref={siteShell.portfolioContent.contactHref}
        isOpen={menuOpen}
        navigationItems={siteShell.navigation}
        onClose={() => setMenuOpen(false)}
        onToggle={() => setMenuOpen((open) => !open)}
        phoneHref={siteShell.portfolioContent.phoneHref}
        phoneLabel={siteShell.portfolioContent.phoneLabel}
      />

      <main className="page-content" id="top">
        <Routes location={contentLocation}>
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ClippingPage />} path="/clipping" />
          <Route element={<CvPage />} path="/cv" />
          <Route element={<HomePage />} path="/" />
          <Route element={<LegalPage />} path="/:legalType(terms|privacy)" />
          <Route element={<WorkDetailPage />} path="/works/:slug" />
        </Routes>

        <Routes>
          <Route element={<ContactModalPage />} path="/contact" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
