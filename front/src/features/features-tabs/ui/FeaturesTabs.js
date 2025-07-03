import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './FeaturesTabs.module.scss';
import { useState } from 'react';
import { tabs as tabs_data } from '../model/data-tabs.js';
import { Tab } from '@/shared/ui/tab/index.js';
export const FeaturesTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const currentTab = tabs.find(tab => tab.id === activeTab);
    function changeTab(id) {
        setActiveTab(id);
    }
    ;
    return (_jsxs("div", { className: `${styles.container}`, children: [_jsx("div", { className: `${styles.tabs}`, children: tabs_data.map((elem, index) => {
                    return (_jsx(Tab, { text: elem.text, icon: elem.icon, isActive: currentTab.id === elem.id, onClick: () => changeTab(elem.id), className: `${styles.tab}` }, index));
                }) }), _jsxs("div", { className: `${styles.content} flex justify-start items-center flex-col`, children: [_jsx("p", { className: `${styles.header}`, children: currentTab.title }), _jsx("p", { className: `${styles.text}`, children: currentTab.description }), _jsx("img", { src: currentTab.image, alt: currentTab.id })] }, currentTab.id)] }));
};
