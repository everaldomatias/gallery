import { Link, Navigate, useParams } from 'react-router-dom';
import WorkDetailHero from '../components/work-detail/WorkDetailHero';
import WorkDetailMeta from '../components/work-detail/WorkDetailMeta';
import WorkRelatedGrid from '../components/work-detail/WorkRelatedGrid';
import WorkDetailSplitRightLayout from '../components/work-detail/WorkDetailSplitRightLayout';
import { useWorkDetailPage } from '../hooks/queries/useWorkDetailPage';

function WorkDetailPage() {
  const { slug } = useParams();
  const { data, isLoading } = useWorkDetailPage(slug);
  const portfolioContent = data?.portfolioContent;
  const relatedWorks = data?.relatedWorks ?? [];
  const work = data?.work;

  if (!isLoading && !work) {
    return <Navigate replace to="/" />;
  }

  if (!work || !portfolioContent) {
    return null;
  }

  if (work.detailLayout === 'split-right') {
    return (
      <WorkDetailSplitRightLayout
        detailBackLabel={portfolioContent.detailBackLabel}
        detailMetaTitle={portfolioContent.detailMetaTitle}
        work={work}
      />
    );
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
