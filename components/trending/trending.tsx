import Style from './trending.module.scss';
import Carousel from '@components/carousel/carousel';
import SwitchTabs from '@components/tabs/switchTabs';
import useFetch from 'hooks/useFetch';
import { useState } from 'react';

const Trending = () => {
  const [type, setType] = useState<string>('day');
  const { data, loading } = useFetch(`/trending/all/${type}?language=ko`);

  const tabHandler = (tab: string, idx: number) => {
    setType(tab.toLocaleLowerCase());
  };

  return (
    <section className={Style.wrap}>
      <div className={Style.contentWrap}>
        <h2 className={Style.title}>Trending</h2>
        <SwitchTabs tabs={['Day', 'Week']} onChange={tabHandler} />
      </div>
      {!loading && <Carousel data={data?.results} loading={loading} />}
    </section>
  );
};

export default Trending;
