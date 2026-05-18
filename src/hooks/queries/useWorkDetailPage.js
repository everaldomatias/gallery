import {
  fetchWorkDetailPage,
  getInitialWorkDetailPage,
} from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useWorkDetailPage(slug) {
  return useContentQuery({
    initialData: getInitialWorkDetailPage(slug),
    queryFn: () => fetchWorkDetailPage(slug),
    queryKey: [slug],
  });
}
