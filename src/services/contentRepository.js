import { CONTENT_SOURCE } from '../config/contentSource';
import {
  aboutContent,
  categories,
  clippingContent,
  cvContent,
  featuredWorks,
  getLegalPage,
  getRelatedWorks,
  getWorkBySlug,
  legalPagesContent,
  navigation,
  portfolioContent,
} from '../mocks/siteContent';
import {
  mapWpAboutPage,
  mapWpClippingPage,
  mapWpContactModal,
  mapWpCvPage,
  mapWpLegalPage,
  mapWpPortfolioPage,
  mapWpSiteShell,
  mapWpWorkDetailPage,
} from '../mappers/wp/contentMappers';
import { fetchWordPressJson } from './wp/client';

const isMockSource = CONTENT_SOURCE === 'mock';

export function getInitialSiteShell() {
  return isMockSource
    ? { navigation, portfolioContent }
    : null;
}

export function getInitialPortfolioPage() {
  return isMockSource
    ? { categories, featuredWorks, portfolioContent }
    : null;
}

export function getInitialWorkDetailPage(slug) {
  if (!isMockSource) {
    return null;
  }

  const work = getWorkBySlug(slug);

  return {
    portfolioContent,
    relatedWorks: getRelatedWorks(work),
    work,
  };
}

export function getInitialAboutPage() {
  return isMockSource ? { aboutContent } : null;
}

export function getInitialCvPage() {
  return isMockSource ? { cvContent } : null;
}

export function getInitialClippingPage() {
  return isMockSource ? { clippingContent } : null;
}

export function getInitialLegalPage(legalType) {
  return isMockSource
    ? { legalPage: getLegalPage(legalType) }
    : null;
}

export function getInitialContactModal() {
  return isMockSource
    ? { contactModal: portfolioContent.contactModal }
    : null;
}

export async function fetchSiteShell() {
  if (isMockSource) {
    return { navigation, portfolioContent };
  }

  const payload = await fetchWordPressJson('/wp-json/site-shell/v1/content');
  return mapWpSiteShell(payload);
}

export async function fetchPortfolioPage() {
  if (isMockSource) {
    return { categories, featuredWorks, portfolioContent };
  }

  const payload = await fetchWordPressJson('/wp-json/site-content/v1/portfolio');
  return mapWpPortfolioPage(payload);
}

export async function fetchWorkDetailPage(slug) {
  if (isMockSource) {
    const work = getWorkBySlug(slug);

    return {
      portfolioContent,
      relatedWorks: getRelatedWorks(work),
      work,
    };
  }

  const payload = await fetchWordPressJson(
    `/wp-json/site-content/v1/works/${encodeURIComponent(slug)}`,
  );
  return mapWpWorkDetailPage(payload);
}

export async function fetchAboutPage() {
  if (isMockSource) {
    return { aboutContent };
  }

  const payload = await fetchWordPressJson('/wp-json/site-content/v1/about');
  return mapWpAboutPage(payload);
}

export async function fetchCvPage() {
  if (isMockSource) {
    return { cvContent };
  }

  const payload = await fetchWordPressJson('/wp-json/site-content/v1/cv');
  return mapWpCvPage(payload);
}

export async function fetchClippingPage() {
  if (isMockSource) {
    return { clippingContent };
  }

  const payload = await fetchWordPressJson('/wp-json/site-content/v1/clipping');
  return mapWpClippingPage(payload);
}

export async function fetchLegalPage(legalType) {
  if (isMockSource) {
    return { legalPage: legalPagesContent[legalType] ?? null };
  }

  const payload = await fetchWordPressJson(
    `/wp-json/site-content/v1/legal/${encodeURIComponent(legalType)}`,
  );
  return mapWpLegalPage(payload);
}

export async function fetchContactModal() {
  if (isMockSource) {
    return { contactModal: portfolioContent.contactModal };
  }

  const payload = await fetchWordPressJson('/wp-json/site-content/v1/contact');
  return mapWpContactModal(payload);
}
