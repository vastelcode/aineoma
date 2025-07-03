import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// импорт внутренних модулей React
import React, { useMemo } from 'react';
// импорт ui-компонентов
import Button from '@/shared/ui/button/index.js';
import { TariffName } from '@/shared/ui/tariff-name/index.js';
import { TariffPoint } from '@/shared/ui/tariff-point/index.js';
//импорт стилей для карточки
import styles from './TariffCard.module.scss';
// импорт помощников
import { values } from '@/shared/lib/helpers/index.js';
// 1. Константа для перевода ключей в читаемые названия
const FEATURE_LABELS = {
    symbols: "символы / месяц",
    images: "изображений / месяц",
    sounds: "голос в текст / месяц",
    templates: "Шаблоны Neoma",
    history: "История генерации",
    "gpt-3.5": "Чат GPT-3.5",
    "gpt-4": "Чат GPT-4",
    "dall-e": "Чат GPT-4 + DALL-E"
};
export const TariffCard = React.memo(({ price, infoTariff, nameTariff, modelTariff, textBtn, isAllInclusive }) => {
    // 2. Мемоизируем рендер пунктов для оптимизации
    const tariffPoints = useMemo(() => (Object.entries(infoTariff).map(([key, value]) => {
        // 3. Проверка типа для безопасного преобразования
        const featureKey = key;
        return (_jsx(TariffPoint, { text: FEATURE_LABELS[featureKey], value: value === 'true' || value === 'false' ? '' : value, status: values.getPointStatus(value) }, featureKey));
    })), [infoTariff]);
    return (_jsxs("div", { className: styles["tariff-card"], children: [_jsxs("div", { className: styles["tariff-card__wrapper"], children: [_jsxs("div", { className: styles["tariff-card__wrapper-tariff"], children: [_jsx(TariffName, { isAllInclusive: isAllInclusive, name: nameTariff, model: modelTariff }), _jsxs("p", { className: styles["tariff-card__price"], children: [price, " \u20BD"] })] }), _jsx("div", { className: styles["tariff-card__wrapper-points"], children: tariffPoints })] }), _jsx(Button, { className: `${styles.btn}`, children: textBtn })] }));
});
