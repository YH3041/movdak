import { useState } from 'react';
import Style from './switchTabs.module.scss';

interface ISwitchTabs {
  tabs: string[];
  onChange: (tab: string, idx: number) => void;
}

const SwitchTabs: React.FC<ISwitchTabs> = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  const activeTab = (tab: string, index: number) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 500);
    onChange(tab, index);
  };

  return (
    <div className={Style.wrap}>
      <div className={Style.tabItems}>
        {tabs.map((tab, idx) => (
          <span key={tab} className={`${Style.tabItem} ${selectedTab == idx ? 'active' : ''}`} onClick={() => activeTab(tab, idx)}>
            {tab}
          </span>
        ))}
        <span className={Style.movingBg} style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
