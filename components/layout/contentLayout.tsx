import Style from './contentLayout.module.scss';

interface IContentLayout {
  children: React.ReactNode;
}

const ContentLayout: React.FC<IContentLayout> = ({ children }) => {
  return <div className={Style.wrap}>{children}</div>;
};

export default ContentLayout;
