import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ProgressBar.module.scss';
export const ProgressBar = ({ maxValue, width, currentValue }) => {
    return (_jsxs("div", { className: "flex flex-col gap-1.5", children: [_jsx("p", { className: `${styles.header}`, children: "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }), _jsx("div", { className: `${styles.bar}`, style: { width: width + 'px' }, children: _jsx("div", { className: `${styles.progress}`, style: { width: currentValue / maxValue * width + 'px' } }) }), _jsxs("p", { className: `${styles.text}`, children: [currentValue, "/", maxValue] })] }));
};
