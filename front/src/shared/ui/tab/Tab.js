import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../icon/Icon.js";
import styles from './Tab.module.scss';
export const Tab = ({ text, icon, isActive = false, onClick, className = '' }) => {
    return (_jsxs("div", { onClick: onClick, className: `${styles.tab} ${className}`, children: [_jsx("p", { className: `${styles.text}`, children: text }), _jsx(Icon, { source: icon, isActive: isActive })] }));
};
