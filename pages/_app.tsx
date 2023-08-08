import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './_layout';
import { store } from '@store/stroe';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
