function CategorySidebar({
  activeCategory,
  categories,
  heading,
  mobileLabel,
  onCategoryChange,
}) {
  return (
    <aside className="portfolio-sidebar">
      <h4>{heading}</h4>
      <div className="mobile-filter-label">{mobileLabel}</div>
      <ul className="filter-list">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={category === activeCategory ? 'filter-link active' : 'filter-link'}
              onClick={() => {
                if (category !== activeCategory) {
                  onCategoryChange(category);
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
  );
}

export default CategorySidebar;
