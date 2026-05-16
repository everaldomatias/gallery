import WorkDetailHeroTop from './WorkDetailHeroTop';
import WorkDetailSplitRight from './WorkDetailSplitRight';

function WorkDetailHero({ work }) {
  if (work.detailLayout === 'split-right') {
    return <WorkDetailSplitRight work={work} />;
  }

  return <WorkDetailHeroTop work={work} />;
}

export default WorkDetailHero;
