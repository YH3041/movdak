import { fetchDataFromApi } from '@utils/api';
import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError('');
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
    // return () => {
    //   setLoading(true);
    //   setData(null);
    //   setError('');
    // };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
