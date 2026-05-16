function WorkDetailMeta({ metaTitle, work }) {
  return (
    <aside className="work-detail-meta">
      <h2>{metaTitle}</h2>
      <dl>
        <div>
          <dt>Lorem</dt>
          <dd>{work.category}</dd>
        </div>
        <div>
          <dt>Ipsum</dt>
          <dd>{work.detail.year}</dd>
        </div>
        <div>
          <dt>Dolor</dt>
          <dd>{work.detail.medium}</dd>
        </div>
        <div>
          <dt>Amet</dt>
          <dd>{work.detail.dimensions}</dd>
        </div>
        <div>
          <dt>Elit</dt>
          <dd>{work.detail.location}</dd>
        </div>
      </dl>
    </aside>
  );
}

export default WorkDetailMeta;
