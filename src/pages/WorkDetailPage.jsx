import { Link, Navigate, useParams } from 'react-router-dom';
import WorkDetailHero from '../components/work-detail/WorkDetailHero';
import WorkDetailMeta from '../components/work-detail/WorkDetailMeta';
import WorkRelatedGrid from '../components/work-detail/WorkRelatedGrid';
import WorkDetailSplitRightLayout from '../components/work-detail/WorkDetailSplitRightLayout';
import { getRelatedWorks, getWorkBySlug, portfolioContent } from '../data/portfolio';

function WorkDetailPage() {
  const { slug } = useParams();
  const work = getWorkBySlug(slug);

  if (!work) {
    return <Navigate replace to="/" />;
  }

  const relatedWorks = getRelatedWorks(work);

  if (work.detailLayout === 'split-right') {
    return <WorkDetailSplitRightLayout relatedWorks={relatedWorks} work={work} />;
  }

  return (
    <section className="work-detail-page">
      <div className="work-detail-shell">
        <Link className="work-detail-back" to="/">
          ← {portfolioContent.detailBackLabel}
        </Link>

        <WorkDetailHero work={work} />

        <div className="work-detail-content">
          <div className="work-detail-copy">
            <p>{work.detail.narrative}</p>
            <ul className="work-detail-notes">
              {work.detail.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <WorkDetailMeta metaTitle={portfolioContent.detailMetaTitle} work={work} />
        </div>

        <WorkRelatedGrid relatedTitle={portfolioContent.relatedTitle} works={relatedWorks} />
      </div>
    </section>
  );
}

export default WorkDetailPage;
