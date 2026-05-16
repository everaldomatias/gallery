import { useEffect, useMemo, useRef, useState } from 'react';

const FILTER_TRANSITION_OUT_MS = 140;
const FILTER_TRANSITION_SETTLE_MS = 420;
const LOAD_MORE_DELAY_MS = 650;
const INTERSECTION_ROOT_MARGIN = '320px 0px 320px 0px';

export function useInfinitePortfolio({ activeCategory, allItems, pageSize }) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);
  const [displayCategory, setDisplayCategory] = useState(activeCategory);
  const [transitionStage, setTransitionStage] = useState('idle');
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef(null);

  const visibleItems = useMemo(
    () =>
      displayCategory === 'Todas'
        ? allItems
        : allItems.filter((item) => item.category === displayCategory),
    [allItems, displayCategory],
  );

  const paginatedWorks = useMemo(
    () => visibleItems.slice(0, visibleCount),
    [visibleCount, visibleItems],
  );
  const hasMore = visibleCount < visibleItems.length;

  useEffect(() => {
    if (selectedCategory === displayCategory) {
      return undefined;
    }

    setTransitionStage('leaving');

    const swapTimer = window.setTimeout(() => {
      setDisplayCategory(selectedCategory);
      setTransitionStage('entering');
    }, FILTER_TRANSITION_OUT_MS);

    const settleTimer = window.setTimeout(() => {
      setTransitionStage('idle');
    }, FILTER_TRANSITION_SETTLE_MS);

    return () => {
      window.clearTimeout(swapTimer);
      window.clearTimeout(settleTimer);
    };
  }, [selectedCategory, displayCategory]);

  useEffect(() => {
    setVisibleCount(pageSize);
    setIsLoadingMore(false);
  }, [displayCategory, pageSize]);

  useEffect(() => {
    if (!hasMore || isLoadingMore || transitionStage !== 'idle' || !loadMoreRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoadingMore(true);
        }
      },
      {
        rootMargin: INTERSECTION_ROOT_MARGIN,
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
      setVisibleCount((current) => Math.min(current + pageSize, visibleItems.length));
      setIsLoadingMore(false);
    }, LOAD_MORE_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isLoadingMore, pageSize, visibleItems.length]);

  return {
    activeCategory: selectedCategory,
    displayCategory,
    hasMore,
    isLoadingMore,
    loadMoreRef,
    paginatedWorks,
    setActiveCategory: setSelectedCategory,
    transitionStage,
  };
}
