import { useClippingPage } from '../hooks/queries/useClippingPage';

function ClippingPage() {
  const { data } = useClippingPage();
  const clippingContent = data?.clippingContent;

  if (!clippingContent) {
    return null;
  }

  return (
    <section className="clipping-page">
      <div className="clipping-shell">
        <header className="clipping-header">
          <span className="clipping-kicker">Press</span>
          <h1>{clippingContent.pageTitle}</h1>
          <p>{clippingContent.intro}</p>
        </header>

        <div className="clipping-list">
          {clippingContent.items.map((item) => (
            <article className="clipping-item" key={`${item.date}-${item.outlet}-${item.title}`}>
              <div className="clipping-meta">
                <span>{item.date}</span>
                <strong>{item.outlet}</strong>
              </div>

              <div className="clipping-copy">
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClippingPage;
