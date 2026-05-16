function WorkDetailSplitRight({ work }) {
  return (
    <section className="work-hero work-hero-split">
      <div className="work-hero-split-copy">
        <span className="work-eyebrow">{work.detail.heroEyebrow}</span>
        <h1>{work.title}</h1>
        <p>{work.detail.intro}</p>
      </div>

      <div className={`work-hero-split-media tone-${work.palette}`} />
    </section>
  );
}

export default WorkDetailSplitRight;
