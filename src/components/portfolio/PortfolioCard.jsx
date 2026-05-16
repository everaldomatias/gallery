import { Link } from 'react-router-dom';

function PortfolioCard({ animationDelay, item }) {
  return (
    <article
      className={`portfolio-card ${item.size}`}
      style={{ '--card-delay': `${animationDelay}ms` }}
    >
      <Link to={`/works/${item.slug}`}>
        <div className={`portfolio-media tone-${item.palette}`} />
        <div className="portfolio-caption">
          <div>
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
          <span className="arrow">→</span>
        </div>
      </Link>
    </article>
  );
}

export default PortfolioCard;
