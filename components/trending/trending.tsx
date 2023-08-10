import Carousel from '@components/carousel/carousel';
import ContentLayout from '@components/layout/contentLayout';
import styled from '@emotion/styled';
import useFetch from 'hooks/useFetch';

const Trending = () => {
  const { data, loading } = useFetch('/trending/movie/day?language=ko');

  return (
    <CarouselSection>
      <ContentLayout>
        <CarouselTitle>Trending</CarouselTitle>
      </ContentLayout>
      <Carousel data={data?.results} loading={loading} />
    </CarouselSection>
  );
};

export default Trending;

const CarouselSection = styled.section`
  position: relative;
  margin-bottom: 70px;
  & > .contentWrap {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const CarouselTitle = styled.h3`
  font-size: 24px;
  color: white;
  font-weight: normal;
`;
