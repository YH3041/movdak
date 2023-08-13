import { fetchDataFromApi } from '@utils/api';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError('');
    fetchDataFromApi(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
