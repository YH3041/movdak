import styled from '@emotion/styled';

interface IContentLayout {
  children: React.ReactNode;
}

const ContentLayout: React.FC<IContentLayout> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default ContentLayout;

const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  pad: 0 20px;
`;
