import {
  fetchLegalPage,
  getInitialLegalPage,
} from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useLegalPage(legalType) {
  return useContentQuery({
    initialData: getInitialLegalPage(legalType),
    queryFn: () => fetchLegalPage(legalType),
    queryKey: [legalType],
  });
}
