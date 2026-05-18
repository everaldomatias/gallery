import {
  fetchClippingPage,
  getInitialClippingPage,
} from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useClippingPage() {
  return useContentQuery({
    initialData: getInitialClippingPage(),
    queryFn: fetchClippingPage,
    queryKey: [],
  });
}
