function WorkDetailHeroTop({ work }) {
  return (
    <section className="work-hero work-hero-top">
      <div className={`work-hero-media tone-${work.palette}`} />
      <div className="work-hero-top-copy">
        <span className="work-eyebrow">{work.detail.heroEyebrow}</span>
        <h1>{work.title}</h1>
        <p>{work.detail.intro}</p>
      </div>
    </section>
  );
}

export default WorkDetailHeroTop;
