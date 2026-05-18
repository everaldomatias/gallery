import {
  fetchPortfolioPage,
  getInitialPortfolioPage,
} from '../../services/contentRepository';
import { useContentQuery } from './useContentQuery';

export function usePortfolioPage() {
  return useContentQuery({
    initialData: getInitialPortfolioPage(),
    queryFn: fetchPortfolioPage,
    queryKey: [],
  });
}
