import PortfolioCard from './PortfolioCard';

function PortfolioGrid({ items, transitionStage, transitionKey }) {
  return (
    <section className={`portfolio-grid is-${transitionStage}`}>
      {items.map((item, index) => (
        <PortfolioCard
          key={`${transitionKey}-${item.id}`}
          animationDelay={index * 45}
          item={item}
        />
      ))}
    </section>
  );
}

export default PortfolioGrid;
