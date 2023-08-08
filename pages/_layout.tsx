import Footer from '@components/footer/footer';
import Header from '@components/header/header';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
