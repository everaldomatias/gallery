import HeroBanner from '../components/chrome/HeroBanner';
import CategorySidebar from '../components/portfolio/CategorySidebar';
import PageTitle from '../components/portfolio/PageTitle';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioLoadState from '../components/portfolio/PortfolioLoadState';
import { categories, featuredWorks, portfolioContent } from '../data/portfolio';
import { useInfinitePortfolio } from '../hooks/useInfinitePortfolio';

function HomePage() {
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
    activeCategory: categories[0],
    allItems: featuredWorks,
    pageSize: 12,
  });

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
