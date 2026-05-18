import { fetchSiteShell, getInitialSiteShell } from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useSiteShell() {
  return useContentQuery({
    initialData: getInitialSiteShell(),
    queryFn: fetchSiteShell,
    queryKey: [],
  });
}
