import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TariffPoint.module.scss';
import IconGreen from '@/shared/assets/icons/energy-green.svg';
import IconRed from '@/shared/assets/icons/energy-red.svg';
export function TariffPoint({ text, value, status }) {
    const baseClass = styles["tariff-point"];
    const wrapperClass = styles[`tariff-point__wrapper`];
    const iconBaseClass = styles["tariff-point__icon"];
    return (_jsxs("div", { className: `${baseClass}`, children: [_jsxs("div", { className: `${wrapperClass}`, children: [_jsx("img", { src: status == 'positive' ? IconGreen : IconRed, alt: "\u043F\u0443\u043D\u043A\u0442 \u0442\u0430\u0440\u0438\u0444\u0430", className: `${iconBaseClass}` }), _jsx("p", { children: text })] }), _jsx("p", { children: value })] }));
}
;
