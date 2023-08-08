import ContentLayout from '@components/layout/contentLayout';
import { INPUT_PARAMS_TYPE } from '@constants/types/event.constants';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IBanner {
  banner: string;
}

const Banner: React.FC<IBanner> = ({ banner }) => {
  //? next
  const { push } = useRouter();

  //? state
  const [query, setQuery] = useState<string>('');

  const searchQueryHandler = (event: INPUT_PARAMS_TYPE) => {
    if (event.key === 'Enter') {
      push(`/search/${query}`);
    }
  };

  return (
    <Wrap>
      <BackgroundWrap>
        <Image src={banner} fill alt="배너 이미지" />
      </BackgroundWrap>
      <ContentLayout>
        <ContentWrap>
          <Title>환영합니다.</Title>
          <SubTitle>수백만 개의 영화, TV 프로그램을 지금 찾아보세요.</SubTitle>
          <SearchInputWrap>
            <input type="text" placeholder="영화 또는 TV 프로그램을 검색해보세요..." onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
            <button>Search</button>
          </SearchInputWrap>
        </ContentWrap>
      </ContentLayout>
      <OpacityLayer />
    </Wrap>
  );
};

export default Banner;

const Wrap = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--black);
  display: flex;
  align-items: center;
  position: relative;

  ${media('md')} {
    height: 700px;
  }
`;
const BackgroundWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;
const Title = styled.span`
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 12px;
  ${media('md')} {
    margin-bottom: 0;
    font-size: 80px;
  }
`;
const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 40px;
  ${media('md')} {
    font-size: 24px;
  }
`;
const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    width: calc(100% - 100px);
    height: 50px;
    background-color: white;
    outline: 0;
    border: 0;
    border-radius: 30px 0 0 30px;
    padding: 0 15px;
    font-size: 14px;
    ${media('md')} {
      width: calc(100% - 150px);
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }

  button {
    width: 100px;
    height: 50px;
    background: var(--gradient);
    color: white;
    outline: 0;
    border: 0;
    border-radius: 0 30px 30px 0;
    font-size: 16px;
    cursor: pointer;
    ${media('md')} {
      width: 150px;
      height: 60px;
      font-size: 18px;
    }
  }
`;
const OpacityLayer = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, rgba(4, 21, 45, 0), #04152d 79.17%);
  position: absolute;
  bottom: 0;
  left: 0;
`;
