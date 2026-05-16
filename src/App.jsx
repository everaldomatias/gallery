import { useState } from 'react';
import HeroBanner from './components/chrome/HeroBanner';
import SidebarMenu from './components/chrome/SidebarMenu';
import CategorySidebar from './components/portfolio/CategorySidebar';
import PageTitle from './components/portfolio/PageTitle';
import PortfolioGrid from './components/portfolio/PortfolioGrid';
import PortfolioLoadState from './components/portfolio/PortfolioLoadState';
import { categories, featuredWorks, navigation, portfolioContent } from './data/portfolio';
import { useInfinitePortfolio } from './hooks/useInfinitePortfolio';
import { useMenuDismiss } from './hooks/useMenuDismiss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const {
    displayCategory,
    hasMore,
    isLoadingMore,
    loadMoreRef,
    paginatedWorks,
    transitionStage,
  } =
    useInfinitePortfolio({
      activeCategory,
      allItems: featuredWorks,
      pageSize: 12,
    });

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
        <HeroBanner brand={portfolioContent.brand} />

        <section className="portfolio-page" id="portfolio">
          <PageTitle breadcrumbs={portfolioContent.breadcrumbs} title={portfolioContent.pageTitle} />

          <div className="portfolio-layout">
            <CategorySidebar
              activeCategory={activeCategory}
              categories={categories}
              heading={portfolioContent.categoriesHeading}
              mobileLabel={portfolioContent.mobileCategoryLabel}
              onCategoryChange={setActiveCategory}
            />

            <PortfolioGrid
              items={paginatedWorks}
              transitionKey={displayCategory}
              transitionStage={transitionStage}
            />

            <PortfolioLoadState
              hasMore={hasMore}
              idleLabel={portfolioContent.loadMoreIdleLabel}
              isLoading={isLoadingMore}
              loadingLabel={portfolioContent.loadMoreLoadingLabel}
              loadMoreRef={loadMoreRef}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
