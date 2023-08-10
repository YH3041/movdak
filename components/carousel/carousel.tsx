import { IMG_NO_POSTER } from '@constants/images/images.constants';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import CircleRating from '@components/circleRating/circleRating';

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

  const skeleton = () => {
    return (
      <SkeletonItem>
        <div className="posterBlock skeleton"></div>
        <div className="textBlock skeleton">
          <div className="title skeleton"></div>
          <span className="date skeleton"></span>
        </div>
      </SkeletonItem>
    );
  };

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
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </PosterBlock>
                  <InfoBlock>
                    <Title>{item.title}</Title>
                    <Date>{dayjs(item.release_date).format('MMM D, YYYY')}</Date>
                  </InfoBlock>
                </CarouselItem>
              );
            })}
          </CarouseItems>
        ) : (
          <span>...loading</span>
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
  color: white;
  ${media('md')} {
    gap: 20px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;

const CarouselItem = styled.div`
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

  img {
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
`;

const InfoBlock = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  ${media('md')} {
    font-size: 20px;
  }
`;

const Date = styled.span`
  color: white;
  font-size: 14px;
  opacity: 0.5;
`;

const SkeletonWrap = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: hidden;
  margin-right: -20px;
  margin-left: -20px;
  padding: 0 20px;
  @include md {
    gap: 20px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;

const SkeletonItem = styled.div`
  width: 125px;
  ${media('md')} {
    width: calc(25% - 15px);
  }
  ${media('lg')} {
    width: calc(20% - 16px);
  }
  flex-shrink: 0;
  .posterBlock {
    border-radius: 12px;
    width: 100%;
    aspect-ratio: 1 / 1.5;
    margin-bottom: 30px;
  }
  .textBlock {
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      height: 20px;
      margin-bottom: 10px;
    }
    .date {
      width: 75%;
      height: 20px;
    }
  }
`;
