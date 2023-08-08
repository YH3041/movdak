import styled from '@emotion/styled';
import { fetchDataFromApi } from '@utils/api';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular?language=ko').then((res) => console.log(res));
  };

  return <Wrap></Wrap>;
};

export default Home;

const Wrap = styled.main``;
