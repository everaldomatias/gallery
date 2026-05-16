import PortfolioCard from '../portfolio/PortfolioCard';

function WorkRelatedGrid({ relatedTitle, works }) {
  if (!works.length) {
    return null;
  }

  return (
    <section className="work-related">
      <div className="work-related-header">
        <h2>{relatedTitle}</h2>
      </div>

      <div className="work-related-grid">
        {works.map((work, index) => (
          <PortfolioCard
            key={`related-${work.id}`}
            animationDelay={index * 60}
            item={work}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkRelatedGrid;
