import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarMenu from './components/chrome/SidebarMenu';
import { navigation, portfolioContent } from './data/portfolio';
import { useMenuDismiss } from './hooks/useMenuDismiss';
import HomePage from './pages/HomePage';
import WorkDetailPage from './pages/WorkDetailPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useMenuDismiss({
    isOpen: menuOpen,
    onDismiss: () => setMenuOpen(false),
  });

  return (
    <div className="page-shell">
      <SidebarMenu
        brandLabel={portfolioContent.brand}
        contactLabel={portfolioContent.contactLabel}
        contactHref={portfolioContent.contactHref}
        isOpen={menuOpen}
        navigationItems={navigation}
        onClose={() => setMenuOpen(false)}
        onToggle={() => setMenuOpen((open) => !open)}
        phoneHref={portfolioContent.phoneHref}
        phoneLabel={portfolioContent.phoneLabel}
      />

      <main className="page-content" id="top">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<WorkDetailPage />} path="/works/:slug" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
