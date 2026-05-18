import { useEffect, useState } from 'react';

export function useContentQuery({ initialData = null, queryFn, queryKey = [] }) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    let isActive = true;

    async function load() {
      setIsLoading(!data);
      setError(null);

      try {
        const result = await queryFn();

        if (isActive) {
          setData(result);
          setIsLoading(false);
        }
      } catch (queryError) {
        if (isActive) {
          setError(queryError);
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, queryKey);

  return {
    data,
    error,
    isLoading,
  };
}
