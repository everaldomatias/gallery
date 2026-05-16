export const navigation = [
  { href: '/', isActive: false, label: 'Lorem' },
  { href: '#', isActive: false, label: 'Ipsum' },
  { href: '/#portfolio', isActive: true, label: 'Dolor' },
  { href: '#', isActive: false, label: 'Sit Amet' },
  { href: '#', isActive: false, label: 'Consectetur' },
];

export const categories = ['Todas', 'Lorem', 'Ipsum', 'Dolor', 'Amet', 'Elit'];

const detailLayouts = ['hero', 'split-right'];
const palettes = ['sun', 'sand', 'clay', 'ink', 'moss', 'mist', 'charcoal', 'rose', 'ochre', 'forest', 'ash', 'copper'];

const worksSeed = [
  ['Lorem Ipsum', 'Lorem', 'landscape'],
  ['Dolor Sit', 'Dolor', 'portrait'],
  ['Amet Elit', 'Ipsum', 'landscape'],
  ['Consectetur', 'Amet', 'portrait'],
  ['Adipiscing', 'Lorem', 'landscape'],
  ['Tempor Incididunt', 'Dolor', 'square'],
  ['Ut Labore', 'Ipsum', 'portrait'],
  ['Et Dolore', 'Amet', 'landscape'],
  ['Magna Aliqua', 'Lorem', 'landscape'],
  ['Ut Enim', 'Elit', 'portrait'],
  ['Ad Minim', 'Ipsum', 'landscape'],
  ['Veniam Quis', 'Elit', 'portrait'],
  ['Nostrud Exercitation', 'Lorem', 'portrait'],
  ['Ullamco Laboris', 'Dolor', 'landscape'],
  ['Nisi Ut', 'Ipsum', 'square'],
  ['Aliquip Ex', 'Amet', 'portrait'],
  ['Ea Commodo', 'Lorem', 'landscape'],
  ['Consequat Duis', 'Elit', 'portrait'],
  ['Aute Irure', 'Ipsum', 'portrait'],
  ['Dolor In', 'Amet', 'landscape'],
  ['Reprehenderit', 'Lorem', 'square'],
  ['Voluptate Velit', 'Dolor', 'portrait'],
  ['Esse Cillum', 'Elit', 'landscape'],
  ['Fugiat Nulla', 'Ipsum', 'landscape'],
];

export const featuredWorks = worksSeed.map(([title, category, size], index) => {
  const id = index + 1;

  return {
    id,
    slug: `work-${id}`,
    title,
    category,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    size,
    palette: palettes[index % palettes.length],
    detailLayout: detailLayouts[index % detailLayouts.length],
    detail: {
      year: '2026',
      medium: 'Lorem ipsum dolor sit amet',
      dimensions: '120 x 180 cm',
      location: 'Lorem Ipsum Studio',
      heroEyebrow: 'Lorem Ipsum',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      narrative:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      notes: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      ],
      relatedIds: [
        ((id + 1 - 1) % worksSeed.length) + 1,
        ((id + 2 - 1) % worksSeed.length) + 1,
        ((id + 3 - 1) % worksSeed.length) + 1,
        ((id + 4 - 1) % worksSeed.length) + 1,
      ],
    },
  };
});

export function getWorkBySlug(slug) {
  return featuredWorks.find((work) => work.slug === slug);
}

export function getRelatedWorks(work) {
  if (!work) {
    return [];
  }

  return work.detail.relatedIds
    .map((relatedId) => featuredWorks.find((candidate) => candidate.id === relatedId))
    .filter(Boolean);
}

export const portfolioContent = {
  breadcrumbs: ['Lorem', 'Ipsum'],
  brand: 'Lorem Ipsum',
  categoriesHeading: 'Lorem Ipsum',
  contactHref: 'mailto:lorem@ipsum.test',
  contactLabel: 'lorem@ipsum.test',
  detailBackLabel: 'Lorem Ipsum',
  detailMetaTitle: 'Lorem Ipsum',
  loadMoreIdleLabel: 'Lorem ipsum dolor sit amet',
  loadMoreLoadingLabel: 'Lorem ipsum dolor sit amet...',
  mobileCategoryLabel: 'Lorem ipsum dolor sit amet.',
  pageTitle: 'Lorem Ipsum',
  phoneHref: 'tel:+5511999999999',
  phoneLabel: 'Lorem ipsum dolor',
  relatedTitle: 'Lorem Ipsum Dolor',
};
