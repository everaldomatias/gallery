import {
  fetchContactModal,
  getInitialContactModal,
} from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function useContactModal() {
  return useContentQuery({
    initialData: getInitialContactModal(),
    queryFn: fetchContactModal,
    queryKey: [],
  });
}
