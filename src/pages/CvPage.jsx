import { cvContent } from '../data/portfolio';

function CvPage() {
  return (
    <section className="cv-page">
      <div className="cv-shell">
        <header className="cv-header">
          <span className="cv-kicker">Artist CV</span>
          <h1>{cvContent.pageTitle}</h1>
          <p>{cvContent.intro}</p>
        </header>

        <div className="cv-sections">
          {cvContent.sections.map((section) => (
            <section className="cv-section" id={section.id} key={section.id}>
              <div className="cv-section-title">
                <h2>{section.title}</h2>
              </div>

              <div className="cv-section-entries">
                {section.entries.map((entry) => (
                  <article className="cv-entry" key={`${section.id}-${entry.meta}-${entry.text}`}>
                    <span className="cv-entry-meta">{entry.meta}</span>
                    <p>{entry.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CvPage;
