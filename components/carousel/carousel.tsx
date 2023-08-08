import { IMG_NO_POSTER } from '@constants/images/images.constants';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

interface ICarousel {
  data: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  loading: boolean;
}

const Carousel: React.FC<ICarousel> = ({ data, loading }) => {
  //? next
  const router = useRouter();
  //? redux
  const { url } = useSelector((state: any) => state.home);
  //? state
  const carouselContainer = useRef();

  return (
    <Wrap>
      <ContentWrap>
        <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" />
        <BsFillArrowRightCircleFill className="carouselRightNav arrow" />
        {!loading ? (
          <CarouseItems>
            {data?.map((item) => {
              const posterUrl = item.poster_path ? url.poster + item.poster_path : IMG_NO_POSTER;
              return (
                <CarouselItem key={item.id}>
                  <PosterBlock>
                    <Image src={posterUrl} fill alt={item.title} />
                  </PosterBlock>
                </CarouselItem>
              );
            })}
          </CarouseItems>
        ) : (
          <span>Loading...</span>
        )}
      </ContentWrap>
    </Wrap>
  );
};

export default Carousel;

const Wrap = styled.div`
  margin-bottom: 50px;
`;

const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CarouseItems = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: hidden;
  margin-right: -20px;
  margin-left: -20px;
  padding: 0 20px;
  ${media('md')} {
    gap: 20px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;

const CarouselItem = styled.div`
  width: 125px;
  height: 325px;
  cursor: pointer;
  flex-shrink: 0;
  ${media('md')} {
    width: calc(25% - 15px);
  }
  ${media('lg')} {
    width: calc(20% - 16px);
  }
`;

const PosterBlock = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.5;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px;
  border-radius: 12px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`;
