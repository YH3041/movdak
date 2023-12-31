import Style from './contentLayout.module.scss';

interface IContentLayout {
  children: React.ReactNode;
}

const ContentLayout: React.FC<IContentLayout> = ({ children }) => {
  return <div className={Style.contentWrap}>{children}</div>;
};

export default ContentLayout;
