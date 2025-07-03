import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Tab.module.scss';
;
export const Tab = ({ children, icon, isActive = false }) => {
    return (_jsxs("div", { className: `${styles.tab} pl-10 flex items-center gap-2.5 ${isActive ? `${styles["tab_active"]}` : ''}`, children: [_jsx("img", { src: icon, alt: "", className: `${styles.icon}` }), children] }));
};
