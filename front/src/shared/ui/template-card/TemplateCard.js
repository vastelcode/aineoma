import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './TemplateCard.module.scss';
export const TemplateCard = ({ header, text, color = 'default' }) => {
    return (_jsxs("div", { className: `${styles.card} ${styles[`card_${color}`]} flex justify-center items-center flex-col gap-2.5`, children: [_jsx("p", { className: `${styles.header}`, children: header }), _jsx("p", { className: `${styles.text}`, children: text })] }));
};
