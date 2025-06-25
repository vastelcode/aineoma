import styles from './FeaturesTabs.module.scss';
import { useState } from 'react';

import { FeaturesTabsProps } from '../model/types.js';

import { tabs as tabs_data} from '../model/data-tabs.js';

import { Tab } from '@/shared/ui/tab/index.js';



export const FeaturesTabs = ({ tabs } : FeaturesTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  function changeTab(id:string) {
    setActiveTab(id);
  };

  return (
    <div 
    className={`${styles.container}`}>

      <div 
      className={`${styles.tabs}`}>
        {tabs_data.map((elem,index) => {
          return (
            <Tab 
            text={elem.text} 
            icon={elem.icon}  
            key={index}
            isActive={currentTab.id === elem.id}
            onClick={() => changeTab(elem.id)}
            className={`${styles.tab}`}
            />
          );
        })}
      </div>

      <div
      key={currentTab.id}
      className={`${styles.content} flex justify-start items-center flex-col`}>
        <p 
        className={`${styles.header}`}>
          {currentTab.title}
        </p>
        <p 
        className={`${styles.text}`}>
          {currentTab.description}
        </p>
        <img src={currentTab.image} alt={currentTab.id}  />
      </div>

    </div>
  );
};