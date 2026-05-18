import { useAboutPage } from '../hooks/queries/useAboutPage';

function AboutPage() {
  const { data } = useAboutPage();
  const aboutContent = data?.aboutContent;

  if (!aboutContent) {
    return null;
  }

  return (
    <section className="about-page">
      <div className="about-shell">
        <div className="about-scroll-column">
          <div className="about-scroll-inner">
            <header className="about-header">
              <span className="about-kicker">About</span>
              <h1>{aboutContent.pageTitle}</h1>
              <p>{aboutContent.intro}</p>
            </header>

            <div className="about-meta">
              {aboutContent.meta.map((item) => (
                <div className="about-meta-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="about-blocks">
              {aboutContent.blocks.map((block) => (
                <section className="about-block" key={block.title}>
                  <h2>{block.title}</h2>
                  <p>{block.text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>

        <aside className="about-fixed-media-column" aria-hidden="true">
          <div className="about-fixed-media tone-moss" />
        </aside>
      </div>
    </section>
  );
}

export default AboutPage;
