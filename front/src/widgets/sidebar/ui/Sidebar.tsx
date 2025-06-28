import { memo, useMemo } from 'react';
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import styles from './Sidebar.module.scss';

import { RootState } from '@/app/providers/store/index.js';
import { SwitchTheme } from '@/features/theme/index.js';

import { Tab } from '@/features/chat-tabs/index.js';
import { TabKey, tabsConfig } from '@/features/chat-tabs/model/constants.js';

import LogoLight from '@/shared/assets/icons/Logo-Light.svg';
import LogoDark from '@/shared/assets/icons/Logo-Dark.svg';

import { ProgressBar } from '@/features/progress-bar/index.js';

import { AccountCard } from '@/features/account-card/index.js';

import Avatar from '@/shared/assets/icons/Ellipse.svg';

export const Sidebar = memo(() => {
  const location = useLocation();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const isLight = theme === 'light';

  // Мемоизация активного таба
  const activeTabKey = useMemo((): TabKey => {
    const currentPath = location.pathname;
    
    // Находим таб, путь которого совпадает с текущим путём
    const activeTab = tabsConfig.find(tab => currentPath === tab.path);
    
    // Если нашли - возвращаем ключ, иначе дефолтный 'templates'
    return activeTab ? activeTab.key : 'templates';
  }, [location.pathname]); // Зависимость от пути

  // Мемоизированный логотип
  const Logo = useMemo(() => 
    isLight ? LogoLight : LogoDark, 
  [isLight]);

  return (
    <div className={`${styles.container} flex flex-col justify-between items-center`}>

      <div>
      <img 
        src={Logo} 
        alt="логотип AiNeoma" 
        className="mb-12"
      />
      
      <div className="flex gap-7 items-center mb-10">
        <p className={styles.header}>навигация</p>
        <SwitchTheme/>
      </div>
      
      <div className="w-full">
        {tabsConfig.map(tab => (
          <Tab 
            key={tab.key}
            icon={isLight ? tab.iconLight : tab.iconDark}
            isActive={activeTabKey === tab.key}
          >
            <Link to={tab.path}>{tab.label}</Link>
          </Tab>
        ))}
      </div>
      </div>

      <div className='flex flex-col gap-12'>
        <ProgressBar maxValue={1000} currentValue={500} width={190}/>
        <AccountCard username='Логин' avatar={Avatar} />
      </div>
    </div>
  );
});