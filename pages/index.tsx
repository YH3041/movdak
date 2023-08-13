import Banner from '@components/banner/banner';
import SEO from '@components/seo/seo';
import Trending from '@components/trending/trending';
import { IMG_LOGO } from '@constants/images/images.constants';
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
      banner
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
      <SEO title="영화 드라마 평점, 정보를 확인하세요" content="무비닥에서 보고 싶은 영화와 드라마에 대한 평점 및 정보를 확인하실 수 있습니다." url="https://movdak.kr/" ogImage={IMG_LOGO} />
      <Banner banner={banner} />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.main``;
