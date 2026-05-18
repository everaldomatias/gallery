import HeroBanner from '../components/chrome/HeroBanner';
import CategorySidebar from '../components/portfolio/CategorySidebar';
import PageTitle from '../components/portfolio/PageTitle';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioLoadState from '../components/portfolio/PortfolioLoadState';
import { useInfinitePortfolio } from '../hooks/useInfinitePortfolio';
import { usePortfolioPage } from '../hooks/queries/usePortfolioPage';

function HomePage() {
  const { data } = usePortfolioPage();
  const categories = data?.categories ?? [];
  const featuredWorks = data?.featuredWorks ?? [];
  const portfolioContent = data?.portfolioContent;
  const {
    activeCategory,
    displayCategory,
    hasMore,
    isLoadingMore,
    loadMoreRef,
    paginatedWorks,
    setActiveCategory,
    transitionStage,
  } = useInfinitePortfolio({
    activeCategory: categories[0] ?? 'Todas',
    allItems: featuredWorks,
    pageSize: 12,
  });

  if (!portfolioContent) {
    return null;
  }

  return (
    <>
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
    </>
  );
}

export default HomePage;
