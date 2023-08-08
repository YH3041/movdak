import ContentLayout from '@components/layout/contentLayout';
import { IMG_LOGO } from '@constants/images/images.constants';
import { INPUT_PARAMS_TYPE } from '@constants/types/event.constants';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { media } from '@styles/media';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';

const Header = () => {
  //? next
  const { push } = useRouter();

  //? state
  const [show, setShow] = useState<string>('top');
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [query, setQuery] = useState<string>();
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (event: INPUT_PARAMS_TYPE) => {
    if (event.key === 'Enter') {
      push(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type: 'movie' | 'tv') => {
    if (type === 'movie') {
      push('/explore/movie');
    } else {
      push('/explore/tv');
    }
    setMobileMenu(false);
  };

  return (
    <Wrap className={`${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentLayout>
        <LogoWrap>
          <Image src={IMG_LOGO} fill alt="로고" />
        </LogoWrap>
        <MenuItems>
          <MenuItem onClick={() => navigationHandler('movie')}>Movies</MenuItem>
          <MenuItem onClick={() => navigationHandler('tv')}>TV Shows</MenuItem>
          <MenuItem>
            <HiOutlineSearch onClick={openSearch} />
          </MenuItem>
        </MenuItems>

        <MobileMenuItems>
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </MobileMenuItems>
      </ContentLayout>
      {showSearch && (
        <SearchBar>
          <ContentWrap>
            <SearchInputWrap>
              <input type="text" placeholder="영화 또는 TV 프로그램을 검색해보세요..." onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </SearchInputWrap>
          </ContentWrap>
        </SearchBar>
      )}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  position: fixed;
  transform: translateY(0);
  width: 100%;
  height: 60px;
  z-index: 1;
  display: flex;
  align-items: center;
  transition: all ease 0.5s;
  z-index: 2;
  &.top {
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
  }
  &.show {
    background-color: var(--black3);
  }
  &.hide {
    transform: translateY(-60px);
  }
`;
const LogoWrap = styled.div`
  cursor: pointer;
  width: 120px;
  height: 45px;
  position: relative;
  img {
    object-fit: cover;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuItems = styled.ul`
  list-style-type: none;
  align-items: center;
  ${media('md')} {
    display: flex;
  }
`;
const MenuItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0 15px;
  color: white;
  font-weight: 500;
  position: relative;
  &.searchIcon {
    margin-right: 0;
  }
  svg {
    font-size: 18px;
  }
  cursor: pointer;
  &:hover {
    color: var(--pink);
  }
`;

//! 모바일 추가 구현 필요
const MobileMenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${media('md')} {
    display: none;
  }
  svg {
    font-size: 18px;
    color: white;
  }

  &.mobileView {
    background-color: var(--black3);
  }
`;

const SearchBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  position: absolute;
  top: 60px;
  animation: mobileMenu 0.3s ease forwards;
`;
const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    font-size: 20px;
    flex-shrink: 0;
    margin-left: 10px;
    cursor: pointer;
  }
  input {
    width: 100%;
    max-width: 1180px;
    height: 50px;
    background-color: white;
    outline: 0;
    border: 0;
    border-radius: 30px 0 0 30px;
    padding: 0 15px;
    font-size: 14px;
    ${media('md')} {
      height: 60px;
      font-size: 20px;
      padding: 0 30px;
    }
  }
`;
