import Carousel from '@components/carousel/carousel';
import ContentLayout from '@components/layout/contentLayout';
import SwitchTabs from '@components/tabs/switchTabs';
import styled from '@emotion/styled';
import useFetch from 'hooks/useFetch';
import { useState } from 'react';

const Trending = () => {
  const [type, setType] = useState<string>('day');
  const { data, loading } = useFetch(`/trending/all/${type}?language=ko`);

  const tabHandler = (tab: string, idx: number) => {
    setType(tab.toLocaleLowerCase());
  };

  return (
    <CarouselSection>
      <ContentLayout>
        <CarouselTitle>Trending</CarouselTitle>
        <SwitchTabs tabs={['Day', 'Week']} onChange={tabHandler} />
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
