import { useEffect, useRef, useState } from 'react';
import { categories, featuredWorks, navigation } from './data/portfolio';

const PAGE_SIZE = 12;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [displayCategory, setDisplayCategory] = useState('Todas');
  const [transitionStage, setTransitionStage] = useState('idle');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef(null);

  const visibleWorks =
    displayCategory === 'Todas'
      ? featuredWorks
      : featuredWorks.filter((work) => work.category === displayCategory);
  const paginatedWorks = visibleWorks.slice(0, visibleCount);
  const hasMore = visibleCount < visibleWorks.length;

  useEffect(() => {
    if (activeCategory === displayCategory) {
      return undefined;
    }

    setTransitionStage('leaving');

    const swapTimer = window.setTimeout(() => {
      setDisplayCategory(activeCategory);
      setTransitionStage('entering');
    }, 140);

    const settleTimer = window.setTimeout(() => {
      setTransitionStage('idle');
    }, 420);

    return () => {
      window.clearTimeout(swapTimer);
      window.clearTimeout(settleTimer);
    };
  }, [activeCategory, displayCategory]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setIsLoadingMore(false);
  }, [displayCategory]);

  useEffect(() => {
    if (!hasMore || isLoadingMore || transitionStage !== 'idle' || !loadMoreRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsLoadingMore(true);
      },
      {
        rootMargin: '320px 0px 320px 0px',
      },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, transitionStage]);

  useEffect(() => {
    if (!isLoadingMore) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setVisibleCount((current) => Math.min(current + PAGE_SIZE, visibleWorks.length));
      setIsLoadingMore(false);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [isLoadingMore, visibleWorks.length]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <div className="page-shell">
      <header className="page-head">
        {menuOpen && (
          <button
            aria-label="Lorem ipsum"
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
        )}

        <button
          aria-label={menuOpen ? 'Lorem ipsum' : 'Lorem ipsum'}
          aria-expanded={menuOpen}
          aria-controls="sidebar-menu"
          className={menuOpen ? 'menu-toggle active' : 'menu-toggle'}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <aside
          className={menuOpen ? 'sidebar-menu open' : 'sidebar-menu'}
          id="sidebar-menu"
        >
          <a className="sidebar-brand" href="#top">
            Lorem Ipsum
          </a>

          <nav className="sidebar-nav">
            {navigation.map((item) => (
              <a
                key={item}
                className={item === 'Portfolio' ? 'active' : ''}
                href={item === 'Portfolio' ? '#portfolio' : '#'}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="sidebar-footer">
            <a href="tel:+5511999999999">Lorem ipsum dolor</a>
            <a href="mailto:atelier@aurora.art">lorem@ipsum.test</a>
          </div>
        </aside>
      </header>

      <main className="page-content" id="top">
        <section className="hero-banner">
          <div className="hero-overlay">
            <div className="hero-brand">Lorem Ipsum</div>
          </div>
        </section>

        <section className="portfolio-page" id="portfolio">
          <div className="page-title">
            <h1>Lorem Ipsum</h1>
            <ul className="breadcrumbs">
              <li>Lorem</li>
              <li>Ipsum</li>
            </ul>
          </div>

          <div className="portfolio-layout">
            <aside className="portfolio-sidebar">
              <h4>Lorem Ipsum</h4>
              <div className="mobile-filter-label">Lorem ipsum dolor sit amet.</div>
              <ul className="filter-list">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      className={category === activeCategory ? 'filter-link active' : 'filter-link'}
                      onClick={() => {
                        if (category !== activeCategory) {
                          setActiveCategory(category);
                        }
                      }}
                      type="button"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <section className={`portfolio-grid is-${transitionStage}`}>
              {paginatedWorks.map((work, index) => (
                <article
                  key={`${displayCategory}-${work.id}`}
                  className={`portfolio-card ${work.size}`}
                  style={{ '--card-delay': `${index * 45}ms` }}
                >
                  <a href="#" onClick={(event) => event.preventDefault()}>
                    <div className={`portfolio-media tone-${work.palette}`} />
                    <div className="portfolio-caption">
                      <div>
                        <h3>{work.title}</h3>
                      </div>
                      <p>{work.description}</p>
                      <span className="arrow">→</span>
                    </div>
                  </a>
                </article>
              ))}
            </section>

            {(hasMore || isLoadingMore) && (
              <div className="portfolio-load-state" ref={loadMoreRef}>
                <div className={isLoadingMore ? 'loading-indicator active' : 'loading-indicator'}>
                  <span className="loading-dot" />
                  <span className="loading-dot" />
                  <span className="loading-dot" />
                </div>
                <p>{isLoadingMore ? 'Lorem ipsum dolor sit amet...' : 'Lorem ipsum dolor sit amet'}</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
