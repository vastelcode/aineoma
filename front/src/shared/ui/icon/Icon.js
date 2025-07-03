import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Icon.module.scss";
;
export const Icon = ({ source, alt = '', className, style, isActive = false }) => {
    const modifierClass = isActive ? styles["icon--active"] : '';
    return (_jsx("img", { src: source, alt: alt, className: `${styles.icon} ${className} ${modifierClass}`, style: style }));
};
