import Head from 'next/head';

interface ISeo {
  title: string;
  content: string;
  url: string;
  ogImage?: string;
}

const SEO: React.FC<ISeo> = ({ title, content, url, ogImage }) => {
  return (
    <Head>
      <title>무비닥 - {title}</title>
      <meta name="description" content={content} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`무비닥 - ${title}`} />
      <meta property="og:description" content={content} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="로고 이미지" />
    </Head>
  );
};

export default SEO;
