function HeroBanner({ brand }) {
  return (
    <section className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-brand">{brand}</div>
      </div>
    </section>
  );
}

export default HeroBanner;
