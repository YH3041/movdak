import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>MovDak</title>
          <meta charSet="utf-8"></meta>
          <link rel="icon" type="image/svg+xml" href="/images/logo/favicon.png" />
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
