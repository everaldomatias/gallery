import { fetchAboutPage, getInitialAboutPage } from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useAboutPage() {
  return useContentQuery({
    initialData: getInitialAboutPage(),
    queryFn: fetchAboutPage,
    queryKey: [],
  });
}
