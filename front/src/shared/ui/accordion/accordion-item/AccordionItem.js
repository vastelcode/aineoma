import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './AccordionItem.module.scss';
;
import arrowIcon from '@/shared/assets/icons/arrow.svg';
export const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }
    return (_jsxs("div", { className: `${styles.container} flex justify-center flex-col`, onClick: toggleIsOpen, children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("p", { className: `${styles.header}`, children: title }), _jsx("img", { src: arrowIcon, alt: "\u0441\u0442\u0440\u0435\u043B\u043E\u0447\u043A\u0430", className: `${styles.symbol} flex justify-center items-center ${isOpen ? `${styles["symbol_active"]}` : ''}` })] }), _jsx("div", { className: `${styles.content} ${isOpen ? `${styles["content_active"]}` : ''}`, children: content })] }));
};
