import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// стили
import styles from './TemplatesPage.module.scss';
// хуки
import { useState, useCallback, useMemo } from 'react';
// карточка шаблона UI
import { TemplateCard } from '@/shared/ui/template-card/index.js';
// информационный объект
import { templates_info } from '../model/templates-info.js';
import { categoryTabs } from '../model/templates-info.js';
export const TemplatesPage = () => {
    const [activeCategory, setActiveCategory] = useState('content');
    const changeCategory = useCallback((newCategory) => {
        setActiveCategory(newCategory);
    }, []);
    // мемоизированный список карточкек
    const templatesCards = useMemo(() => {
        return templates_info[activeCategory].map((elem, index) => {
            return (_jsx(TemplateCard, { header: elem.header, text: elem.text, color: categoryTabs[activeCategory].color }, index));
        });
    }, [activeCategory]);
    return (_jsxs("div", { className: `${styles.container} flex items-center flex-col gap-7 pt-6`, children: [_jsx("div", { className: `${styles["categories__tabs"]} flex justify-between`, children: ['content', 'site', 'marketing', 'social'].map(category => {
                    return (_jsx(TabButton, { category: category, activeCategory: activeCategory, onClick: changeCategory }, category));
                }) }), _jsxs("div", { className: `flex-col flex gap-5`, children: [_jsx("div", { className: `${styles["category__tab"]} ${styles[`category__tab_${categoryTabs[activeCategory].color}`]} inline-flex justify-center items-center`, children: categoryTabs[activeCategory].text }), _jsx("div", { className: `${styles.grid}`, children: templatesCards }, activeCategory)] })] }));
};
// Вынесенный компонент для кнопок таба
const TabButton = ({ category, activeCategory, onClick }) => {
    const categoryLabels = {
        content: `Контент ${templates_info.content.length}`,
        site: `Сайт ${templates_info.site.length}`,
        marketing: `Маркетинг ${templates_info.marketing.length}`,
        social: `Соцсети ${templates_info.social.length}`
    };
    return (_jsx("div", { className: `${styles["categories__tab"]} ${activeCategory === category ? `${styles["categories__tab_active"]}` : ''}`, onClick: () => onClick(category), children: categoryLabels[category] }));
};
