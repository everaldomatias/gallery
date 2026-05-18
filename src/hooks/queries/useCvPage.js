import { fetchCvPage, getInitialCvPage } from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useCvPage() {
  return useContentQuery({
    initialData: getInitialCvPage(),
    queryFn: fetchCvPage,
    queryKey: [],
  });
}
