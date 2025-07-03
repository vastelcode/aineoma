import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useMemo } from 'react';
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from './Sidebar.module.scss';
import { SwitchTheme } from '@/features/theme/index.js';
import { Tab } from '@/features/chat-tabs/index.js';
import { tabsConfig } from '@/features/chat-tabs/model/constants.js';
import LogoLight from '@/shared/assets/icons/Logo-Light.svg';
import LogoDark from '@/shared/assets/icons/Logo-Dark.svg';
import { ProgressBar } from '@/features/progress-bar/index.js';
import { AccountCard } from '@/features/account-card/index.js';
import Avatar from '@/shared/assets/icons/Ellipse.svg';
export const Sidebar = memo(() => {
    const location = useLocation();
    const theme = useSelector((state) => state.theme.mode);
    const isLight = theme === 'light';
    // Мемоизация активного таба
    const activeTabKey = useMemo(() => {
        const currentPath = location.pathname;
        // Находим таб, путь которого совпадает с текущим путём
        const activeTab = tabsConfig.find(tab => currentPath === tab.path);
        // Если нашли - возвращаем ключ, иначе дефолтный 'templates'
        return activeTab ? activeTab.key : 'templates';
    }, [location.pathname]); // Зависимость от пути
    // Мемоизированный логотип
    const Logo = useMemo(() => isLight ? LogoLight : LogoDark, [isLight]);
    return (_jsxs("div", { className: `${styles.container} flex flex-col justify-between items-center`, children: [_jsxs("div", { className: 'flex items-center flex-col', children: [_jsx("img", { src: Logo, alt: "\u043B\u043E\u0433\u043E\u0442\u0438\u043F AiNeoma", className: `mb-12 ${styles.logo}` }), _jsxs("div", { className: "flex gap-7 items-center mb-10", children: [_jsx("p", { className: styles.header, children: "\u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F" }), _jsx(SwitchTheme, {})] }), _jsx("div", { className: "w-full", children: tabsConfig.map(tab => (_jsx(Tab, { icon: isLight ? tab.iconLight : tab.iconDark, isActive: activeTabKey === tab.key, children: _jsx(Link, { to: tab.path, children: tab.label }) }, tab.key))) })] }), _jsxs("div", { className: 'flex flex-col gap-12 items-center', children: [_jsx(ProgressBar, { maxValue: 1000, currentValue: 500, width: 190 }), _jsx(AccountCard, { username: '\u041B\u043E\u0433\u0438\u043D', avatar: Avatar })] })] }));
});
