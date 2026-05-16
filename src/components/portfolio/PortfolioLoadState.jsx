function PortfolioLoadState({ hasMore, idleLabel, isLoading, loadingLabel, loadMoreRef }) {
  if (!hasMore && !isLoading) {
    return null;
  }

  return (
    <div className="portfolio-load-state" ref={loadMoreRef}>
      <div className={isLoading ? 'loading-indicator active' : 'loading-indicator'}>
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>
      <p>{isLoading ? loadingLabel : idleLabel}</p>
    </div>
  );
}

export default PortfolioLoadState;
