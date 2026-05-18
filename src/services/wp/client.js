import { WORDPRESS_API_BASE_URL } from '../../config/contentSource';

function buildRequestUrl(path) {
  if (!WORDPRESS_API_BASE_URL) {
    throw new Error('Missing VITE_WORDPRESS_API_BASE_URL for WordPress content source.');
  }

  return new URL(path, WORDPRESS_API_BASE_URL).toString();
}

export async function fetchWordPressJson(path, options = {}) {
  const response = await fetch(buildRequestUrl(path), {
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`WordPress request failed with status ${response.status}.`);
  }

  return response.json();
}
