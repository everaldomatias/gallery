import { Link } from 'react-router-dom';
import WorkDetailMeta from './WorkDetailMeta';

function WorkDetailSplitRightLayout({ detailBackLabel, detailMetaTitle, work }) {
  return (
    <section className="work-detail-page work-detail-page--split">
      <div className="work-detail-shell work-detail-shell--split">
        <div className="work-detail-scroll-column">
          <div className="work-detail-scroll-inner">
            <Link className="work-detail-back" to="/">
              ← {detailBackLabel}
            </Link>

            <section className="work-hero work-hero-split">
              <div className="work-hero-split-copy">
                <span className="work-eyebrow">{work.detail.heroEyebrow}</span>
                <h1>{work.title}</h1>
                <p>{work.detail.intro}</p>
              </div>
            </section>

            <div className="work-detail-content">
              <div className="work-detail-copy">
                <p>{work.detail.narrative}</p>
                <ul className="work-detail-notes">
                  {work.detail.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>

              <WorkDetailMeta metaTitle={detailMetaTitle} work={work} />
            </div>
          </div>
        </div>

        <div className="work-detail-fixed-media-column">
          <div className={`work-detail-fixed-media tone-${work.palette}`} />
        </div>
      </div>
    </section>
  );
}

export default WorkDetailSplitRightLayout;
