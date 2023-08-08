import Banner from '@components/banner/banner';
import styled from '@emotion/styled';
import { getApiConfiguration } from '@store/homeSlice';
import { AppDispatch } from '@store/store';
import { fetchDataFromApi } from '@utils/api';
import axios from 'axios';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const headers = {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
  };
  const { data: configRes } = await axios.get('https://api.themoviedb.org/3/configuration', { headers });
  const { data: movieRes } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=ko', { headers });

  const banner = `${configRes.images.secure_base_url}original/${movieRes.results?.[Math.floor(Math.random() * 20)].backdrop_path}`;

  return {
    props: {
      banner,
      seoInfo: {
        title: 'MovDak | 무비닥',
        description: '',
        url: context.resolvedUrl
      }
    }
  };
};

interface IHome {
  banner: string;
}

const Home: NextPage<IHome> = ({ banner }) => {
  //? redux
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: `${res.images.secure_base_url}original`,
        poster: `${res.images.secure_base_url}original`,
        profile: `${res.images.secure_base_url}original`
      };

      dispatch(getApiConfiguration(url));
    });
  }, []);

  return (
    <Wrap>
      <Banner banner={banner} />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.main``;
