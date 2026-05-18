import { Navigate, useParams } from 'react-router-dom';
import { useLegalPage } from '../hooks/queries/useLegalPage';

function LegalPage() {
  const { legalType } = useParams();
  const { data, isLoading } = useLegalPage(legalType);
  const content = data?.legalPage;

  if (!isLoading && !content) {
    return <Navigate replace to="/" />;
  }

  if (!content) {
    return null;
  }

  return (
    <section className="legal-page">
      <div className="legal-shell">
        <header className="legal-header">
          <span className="legal-kicker">Informacoes Institucionais</span>
          <h1>{content.pageTitle}</h1>
          <p>{content.intro}</p>
          <small>{content.updatedAt}</small>
        </header>

        <div className="legal-sections">
          {content.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <div className="legal-section-title">
                <h2>{section.title}</h2>
              </div>

              <div className="legal-section-body">
                {section.entries.map((entry) => (
                  <p key={`${section.title}-${entry}`}>{entry}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LegalPage;
