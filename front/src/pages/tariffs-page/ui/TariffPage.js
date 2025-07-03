import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* необходжимые хуки */
import { useState, useCallback, useMemo } from 'react';
/* стилизация */
import styles from './TariffPage.module.scss';
/* карточка тарифа */
import { TariffCard } from '@/enteries/tariff/ui/card/index.js';
/* информация о тарифах */
import { tariffs_info } from '@/enteries/tariff/model/tariffs-data.js';
/* компонент аккордеона */
import { Accordion } from '@/shared/ui/accordion/index.js';
/* информация о FAQ */
import { accordion_info } from '@/shared/ui/accordion/index.js';
export function TariffPage() {
    // состояние активного периода
    const [activePeriod, setActivePeriod] = useState('month');
    // Мемоизированная функция смены периода
    const changePeriod = useCallback((newPeriod) => {
        setActivePeriod(newPeriod);
    }, []);
    // Мемоизированный список тарифных карточек
    const tariffCards = useMemo(() => {
        return tariffs_info.map((elem, index) => (_jsx(TariffCard, { nameTariff: elem.nameTariff, modelTariff: elem.modelTariff, textBtn: elem.textBtn, isAllInclusive: elem.isAllInclusive, infoTariff: elem.infoTariff, price: elem.prices[activePeriod] }, `${elem.nameTariff}_${index}`)));
    }, [activePeriod]); // Зависит только от activePeriod
    return (_jsxs("div", { className: `${styles.container} flex justify-center items-center flex-col`, children: [_jsxs("div", { className: `${styles.tariffs} flex flex-col items-center`, children: [_jsx("p", { className: `${styles.header}`, children: "\u0442\u0430\u0440\u0438\u0444\u044B" }), _jsx("div", { className: `${styles["tariffs__tabs"]} flex justify-between`, children: ['month', 'halfYear', 'year'].map(period => (_jsx(TabButton, { period: period, activePeriod: activePeriod, onClick: changePeriod }, period))) }), _jsx("div", { className: `${styles["tariffs__wrapper"]}`, children: tariffCards })] }), _jsxs("div", { className: `${styles.faq} flex flex-col items-center gap-28`, children: [_jsx("p", { className: `${styles.header}`, children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B" }), _jsx(Accordion, { items: accordion_info, className: `${styles.accordion}` })] })] }));
}
// Вынесенный компонент для кнопок таба
const TabButton = ({ period, activePeriod, onClick }) => {
    const periodLabels = {
        month: '1 месяц',
        halfYear: '6 месяцев',
        year: '1 год'
    };
    return (_jsx("div", { className: `${styles["tariffs__tab"]} ${activePeriod === period ? `${styles["tariffs__tab_active"]}` : ''}`, onClick: () => onClick(period), children: periodLabels[period] }));
};
