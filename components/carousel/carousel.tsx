import Style from './carousel.module.scss';
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
  const carouselContainer = useRef<HTMLDivElement>(null);

  const navigationHandler = (direction: 'left' | 'right') => {
    const container: HTMLDivElement = carouselContainer.current!;

    const scrollPosition = direction === 'left' ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

  const skeleton = () => {
    return (
      <div className={Style.skeletonItem}>
        <div className={`${Style.posterWrap} ${Style.skeleton}`}></div>
        <div className={Style.infoWrap}>
          <h4 className={Style.skeleton}></h4>
          <span className={Style.skeleton}></span>
        </div>
      </div>
    );
  };

  return (
    <div className={Style.wrap}>
      <div className={Style.contentWrap}>
        <BsFillArrowLeftCircleFill className={`${Style.carouselLeftNav} ${Style.arrow}`} onClick={() => navigationHandler('left')} />
        <BsFillArrowRightCircleFill className={`${Style.carouselRightNav} ${Style.arrow}`} onClick={() => navigationHandler('right')} />
        {!loading ? (
          <div className={Style.carouselItems} ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path ? url.poster + item.poster_path : IMG_NO_POSTER;
              return (
                <article key={item.id} className={Style.carouselItem}>
                  <div className={Style.posterWrap}>
                    <Image src={posterUrl} fill alt={item.title} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className={Style.infoWrap}>
                    <h4>{item.title}</h4>
                    <span>{dayjs(item.release_date).format('MMM D, YYYY')}</span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={Style.skeletonWrap}>
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
