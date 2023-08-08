import styled from '@emotion/styled';
import { media } from '@styles/media';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Wrap = styled.footer`
  background-color: var(--black3);
  padding: 50px 0;
  color: white;
  position: relative;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MenuItemsWrap = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  ${media('md')} {
    margin-bottom: 30px;
    gap: 30px;
  }

  p {
    text-align: center;
    font-size: 14px;
    padding-bottom: 4px;
  }
`;

const MenuItem = styled.li`
  transition: all ease 0.3s;
  cursor: pointer;
  font-size: 12px;
  @include md {
    font-size: 16px;
  }
  &:hover {
    color: var(--pink);
  }
`;

const InfoTextWrap = styled.div`
  font-size: 12px;
  line-height: 20px;
  opacity: 0.5;
  text-align: center;
  max-width: 800px;
  margin-bottom: 20px;
  ${media('md')} {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

const SocialIconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const Icon = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0 0 0.625em var(--pink);
    color: var(--pink);
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <ContentWrap>
        <MenuItemsWrap>
          <p>© 2023 Young Hoon</p>
          <MenuItem>Terms Of Use</MenuItem>
          <MenuItem>Privacy-Policy</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuItemsWrap>
        <InfoTextWrap>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </InfoTextWrap>
        <SocialIconsWrap>
          <Icon>
            <FaFacebookF />
          </Icon>
          <Icon>
            <FaInstagram />
          </Icon>
        </SocialIconsWrap>
      </ContentWrap>
    </Wrap>
  );
};

export default Footer;
