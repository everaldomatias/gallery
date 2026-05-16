function PortfolioCard({ animationDelay, item }) {
  return (
    <article
      className={`portfolio-card ${item.size}`}
      style={{ '--card-delay': `${animationDelay}ms` }}
    >
      <a href="#" onClick={(event) => event.preventDefault()}>
        <div className={`portfolio-media tone-${item.palette}`} />
        <div className="portfolio-caption">
          <div>
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
          <span className="arrow">→</span>
        </div>
      </a>
    </article>
  );
}

export default PortfolioCard;
