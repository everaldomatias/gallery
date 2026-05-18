function mapWpEntry(entry) {
  return {
    meta: entry.meta ?? '',
    text: entry.text ?? '',
  };
}

export function mapWpSiteShell(payload) {
  return {
    navigation: payload.navigation ?? [],
    portfolioContent: payload.portfolioContent ?? {},
  };
}

export function mapWpPortfolioPage(payload) {
  return {
    categories: payload.categories ?? [],
    featuredWorks: payload.featuredWorks ?? [],
    portfolioContent: payload.portfolioContent ?? {},
  };
}

export function mapWpWorkDetailPage(payload) {
  return {
    portfolioContent: payload.portfolioContent ?? {},
    relatedWorks: payload.relatedWorks ?? [],
    work: payload.work ?? null,
  };
}

export function mapWpAboutPage(payload) {
  return {
    aboutContent: payload.aboutContent ?? {},
  };
}

export function mapWpCvPage(payload) {
  return {
    cvContent: {
      ...payload.cvContent,
      sections: (payload.cvContent?.sections ?? []).map((section) => ({
        ...section,
        entries: (section.entries ?? []).map(mapWpEntry),
      })),
    },
  };
}

export function mapWpClippingPage(payload) {
  return {
    clippingContent: payload.clippingContent ?? {},
  };
}

export function mapWpLegalPage(payload) {
  return {
    legalPage: payload.legalPage ?? null,
  };
}

export function mapWpContactModal(payload) {
  return {
    contactModal: payload.contactModal ?? {},
  };
}
